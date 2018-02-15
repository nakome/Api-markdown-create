/* globals parser */

let express = require('express');
let app = express();
let fs = require('fs');
let parser = require('markdown-parse');
let shortcode = require('shortcode-parser');
let shortcodes = require('./shortcodes.js')();

// send json error
const errorFn = function(response){
    return response.send({
      attributes: {
        title: 'Error 404',
        description: 'Sorry this file not exists!'
      },
      html: 'Page not fount'
    });
}
// read file and send data in callback
const readFromFile = function(filename,res,callback){
    // the file location
    let file = __dirname+'/public/pages/'+filename+'.md';
    // set json header
    res.setHeader('Content-Type', 'application/json');
    // read file
    fs.readFile(file, 'utf8',(err,data) => {
      // error
      if(err){
        errorFn(res);
      }else{
        return callback(data);
      }
    });
}


// use public folder
app.use(express.static('public'));
// use cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// for info only
app.get("/", function (req, res) {
    res.sendFile(__dirname+'/views/index.html');
});



// read/init
app.get("/read/:name",  (req, res) =>{
    let filename = req.params.name;
    // call function
    readFromFile(filename,res,function(data){
        // parse data
        parser(data, (err, result) => {

            let html = '';
            html += result.html.replace(/&#39;/g,'"');

            if(err){
                errorFn(res);
            }else{
                res.send({
                  attributes: result.attributes,
                  html: shortcode.parse(html)
                });
            }
        });
    });
});


app.get("/find/:name/:key",  (req, res) =>{
    let filename = req.params.name,
    key = req.params.key
    // call function
    readFromFile(filename,res,function(data){
        // parse data
        parser(data, (err, result) => {
            if(err){
                errorFn(res);
            }else{
                if(result.attributes[key]){
                    res.send({
                      [key]: result.attributes[key]
                    });
                }else{
                    errorFn(res);
                }
            }
        });
    });
});




// listen for requests :)
var local = true,
port = 5000;
if(!local){
  port = process.env.PORT
}
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
