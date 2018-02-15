let shortcode = require('shortcode-parser');

module.exports = () => { 
  
  
  shortcode.add('color', function(element, options) {
    return '<span style="color:'+options.name+'">' + element + '</span>';
  });
  
  shortcode.add('blue', function(element, options) {
    return '<em style="color:blue">' + element + '</em>';
  });
  
  shortcode.add('red', function(element, options) {
    return '<em style="color:red">' + element + '</em>';
  });
  
  shortcode.add('green', function(element, options) {
    return '<em style="color:green">' + element + '</em>';
  });
  
  shortcode.add('note', function(element, options) {
    let color = (options.color) ? options.color: 'white';
    let background = (options.background) ? options.background : 'black';
    let padding = (options.padding) ? options.padding : '5px';
    return '<div style="background:'+background+';color:'+color+';padding:'+padding+'">'+element+'</div>';
  });

  shortcode.add('youtube', function(element, options) {
    let id = (options.id) ? options.id: '';
    if(id) return '<div class="'+options.class+'"><iframe width="560" height="315" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen></iframe></div>';
  });
}
