---

title: Shortcodes

---



You can use shortcodes with [foo] text here [/foo]



**Example:**



[note padding='1em' background='#f55' color='#fff']
  The urls in shortcode not use http or https only //
[/note]



[button type='primary' url='//monchovarela.es'] button [/button]
[button type='danger' url='//monchovarela.es'] button [/button]
[button type='info' url='//monchovarela.es'] button [/button]
[button type='success' url='//monchovarela.es'] button [/button]
[button type='warning' url='//monchovarela.es'] button [/button]



[style]
pre{
  padding:1em;
  border: 2px solid blue;
  border-radius: 15px 5px 5px 25px/5px 25px 25px 5px;
  background: blue;
  color: white;
}
.responsive {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}
.responsive iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}
.custom{
  background:blue;
  color:white
}
[/style]


[row]
  [col num=4]
    [card img='//cdn.hyperdev.com/drag-in-files.svg?1477153069954' title='This is a title']
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ad doloremque, fugit obcaecati consequatur atque nisi tenetur officiis nobis sequi earum excepturi ipsa, saepe quas eaque sint facilis harum quam.
    [/card]
  [/col]
  [col num=4]
    [card img='//cdn.hyperdev.com/click-me.svg?1477239469954' title='This is a title']
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ad doloremque, fugit obcaecati consequatur atque nisi tenetur officiis nobis sequi earum excepturi ipsa, saepe quas eaque sint facilis harum quam.
    [/card]
  [/col]

  [col num=4]
    [card img='//cdn.hyperdev.com/paste-me.svg?1477325869954' title='This is a title']
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ad doloremque, fugit obcaecati consequatur atque nisi tenetur officiis nobis sequi earum excepturi ipsa, saepe quas eaque sint facilis harum quam.
    [/card]
  [/col]
[/row]




[row class=custom]
  [col num=6]

## column 6
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ad doloremque, fugit obcaecati consequatur atque nisi tenetur officiis nobis sequi earum excepturi ipsa, saepe quas eaque sint facilis harum quam.

  [/col]
  [col num=6]

## column 6
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti, nam, aperiam cum, a facilis reiciendis veritatis, consectetur corporis dicta accusantium fugiat modi! Ipsam, voluptates inventore. Nulla soluta excepturi rerum?

  [/col]
[/row]


[row]
  [col num=4]

## [big]Column 4[/big]
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ad doloremque, fugit obcaecati consequatur atque nisi tenetur officiis nobis sequi earum excepturi ipsa, saepe quas eaque sint facilis harum quam.

  [/col]
  [col num=4 class=custom]

## [big]Column 4[/big]
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti, nam, aperiam cum, a facilis reiciendis veritatis, consectetur corporis dicta accusantium fugiat modi! Ipsam, voluptates inventore. Nulla soluta excepturi rerum?

  [/col]

  [col num=4]

## [big]Column 4[/big]
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti, nam, aperiam cum, a facilis reiciendis veritatis, consectetur corporis dicta accusantium fugiat modi! Ipsam, voluptates inventore. Nulla soluta excepturi rerum?

  [/col]
[/row]



[big]This shortcode add big first letter[/big]

[big color='aquamarine']This shortcode add big first letter with color[/big]


[note padding=1em background=grey color=white]
  This is a note, you can use padding, background, color or simply class
[/note]



**Example Youtube video with class and id of video**
[youtube class=responsive id=muONBiadpl8]


