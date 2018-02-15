/* globals parser */

let express = require('express');
let app = express();
let fs = require('fs');
let parser = require('markdown-parse');
let shortcode = require('shortcode-parser');
let shortcodes = require('./shortcodes.js')();


// use public folder
app.use(express.static('public'));
// cors
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
    // the file location
    let file = __dirname+'/public/pages/'+req.params.name+'.md';
    // set json header
    res.setHeader('Content-Type', 'application/json');
    // read file
    fs.readFile(file, 'utf8',(err,data) => {
      // error
      if(err){
        res.send({
          attributes: {
            title: 'Error 404',
            description: 'Sorry this file not exists!'
          },
          html: 'Page not fount'
        });
      }else{
        // parse data
        parser(data, (err, result) => {
            if(err){
                res.send({
                  attributes: {
                    title: 'Error 404',
                    description: 'Sorry this file not exists!'
                  },
                  html: 'Page not fount'
                });
            }else{
                res.send({
                  attributes: result.attributes,
                  html: shortcode.parse(result.html)
                });
            }
        });
      }
    });
    
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
