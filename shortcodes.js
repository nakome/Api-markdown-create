let shortcode = require('shortcode-parser');

module.exports = () => {

  /**
  *   [row class=ohter]
  *     [col num=6 class=custom]
  *   ## column 6
  *   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ad doloremque,
  *     [/col]
  *     [col num=6]
  *   ## column 6
  *   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  *     [/col]
  *   [/row]
  */
  shortcode.add('row', function(element, options) {
    let cls = (options.class) ? options.class : '';
    return '<div class="row '+cls+'">'+element+'</div>';
  });
  shortcode.add('col', function(element, options) {
    let num = (options.num) ? options.num : '',
    cls = (options.class) ? options.class : '';
    return '<div class="col-sm-'+num+' col-md-'+num+'col-lg-'+num+' '+cls+'">'+element+'</div>';
  });


  /**
   *  [style] css style [/style]
   */
  shortcode.add('style', function(element, options) {
    return '<style rel="stylesheet">'+element+'</style>';
  });
  /**
   *  [big] text here [/big]
   *  [big color=blue] text here [/big]
   */
  shortcode.add('big', function(element, options) {
    let color = (options.color) ? options.color: 'red';

    let html = '<div>';
    html += '<span style="font-size: 200%; color:'+color+';">' + element[0] + '</span>';
    html += '<span>' + element.substring(1) + '</span>';
    html += '</div>';
    return html;
  });
  /**
   *  [color name=red] text here [/color]
   */
  shortcode.add('color', function(element, options) {
    let color = (options.name) ? options.name: 'red';
    return '<span style="color:'+color+'">' + element + '</span>';
  });

  /**
   *  [blue] text here [/blue]
   */
  shortcode.add('blue', function(element, options) {
    return '<em style="color:blue">' + element + '</em>';
  });

  /**
   *  [red] text here [/red]
   */
  shortcode.add('red', function(element, options) {
    return '<em style="color:red">' + element + '</em>';
  });

  /**
   *  [green] text here [/green]
   */
  shortcode.add('green', function(element, options) {
    return '<em style="color:green">' + element + '</em>';
  });

  /**
   *  [yellow] text here [/yellow]
   */
  shortcode.add('yellow', function(element, options) {
    return '<em style="color:yellow">' + element + '</em>';
  });

  /**
   *  [pink] text here [/pink]
   */
  shortcode.add('pink', function(element, options) {
    return '<em style="color:pink">' + element + '</em>';
  });


  /**
   *  [note] text here [/note]
   *  [note class=note] text here [/note]
   *  [note background=red padding=1em color=white] text here [/note]
   */
  shortcode.add('note', function(element, options) {
    let cls = (options.class) ? 'class="'+options.class+'"': '',
    color = (options.color) ? 'color:'+options.color+';': ' ',
    background = (options.background) ? 'background:'+options.background+';' : '',
    padding = (options.padding) ? 'padding:'+options.padding+';' : '';
    return '<div '+cls+' style="'+background+color+padding+'">'+element+'</div>';
  });

  /**
   *  [youtube id=pakñjalsdf class=responsive]
   */
  shortcode.add('youtube', function(element, options) {
    let cls = (options.class) ? 'class="'+options.class+'"': '',
    id = (options.id) ? options.id: '';

    if(id) return '<div '+cls+'><iframe src="https://www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen></iframe></div>';
  });
}
