---

title: Info

---



Info
==========


This project is a experiment to transform markdown files in json format,



**Example:**  _demo.md_


    ---

    alias:  Create an alias •.
    apropos:  Search Help manual pages (man -k).
    apt-get:  Search for and install software packages (Debian/Ubuntu).
    aptitude:  Search for and install software packages (Debian/Ubuntu).
    aspell:  Spell Checker.
    awk:  Find and Replace text, database sort/validate/index.
    basename:  Strip directory and suffix from filenames.

    ---

    Simple text or shortcodes



When you go to _https://make-api-with-markdown.glitch.me/read/demo_


**Ouput:**


    {
      "attributes":{
        "alias":"Create an alias •.",
        "apropos":"Search Help manual pages (man -k).",
        "apt-get":"Search for and install software packages (Debian/Ubuntu).",
        "aptitude":"Search for and install software packages (Debian/Ubuntu).",
        "aspell":"Spell Checker.",
        "awk":"Find and Replace text, database sort/validate/index.",
        "basename":"Strip directory and suffix from filenames."
      },
      "html":"Simple text or shortcodes"
    }









### Shortcodes

You can use shortcodes with [foo] text here [/foo]



**Example:**



**Example style:**

      [style]
      /**
        This is a custom style
      */

      pre{
        padding:1em;
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



**Example 2 columns :**

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


**Example 4 columns:**

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



**Example big letter:**

      [big]This shortcode add big first letter[/big]

      [big color=red]This shortcode add big first letter with color[/big]


**Example notes:**

      [note padding=1em background=grey color=white]
        This is a note, you can use padding, background, color or simply class
      [/note]



**Example Youtube video with class and id of video**


      [youtube class=responsive id=muONBiadpl8]




