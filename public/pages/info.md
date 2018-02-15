---

title: Info

---


[style]
pre{
  padding:1em;
  border: 2px solid blue;
  border-radius: 15px 5px 5px 25px/5px 25px 25px 5px;
  background: blue;
  color: white;
}
.custom{
  background:blue;
  color:white
}
[/style]



This project is a experiment to transform markdown files in json format,



**Example:**  _demo.md_

```
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

```


When you go to _https://make-api-with-markdown.glitch.me/read/demo_

Or more advanced mode _https://make-api-with-markdown.glitch.me/read/test_


**Ouput:**


```
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
```

**Or more advanced mode:**

    {
       "attributes":{
          "alias":{
             "apropos":{
                "apt-get":"Search for and install software packages (Debian/Ubuntu).",
                "aptitude":{
                   "aspell":{
                      "awk":"Find and Replace text, database sort/validate/index.",
                      "basename":"Strip directory and suffix from filenames."
                   }
                }
             }
          },
          "posts":{
             "1":{
                "name":"Hello world",
                "title":"This is a title",
                "description":"A short description goes here",
                "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ad doloremque, fugit obcaecati consequatur atque nisi tenetur officiis nobis sequi earum excepturi ipsa, saepe quas eaque sint facilis harum quam."
             },
             "2":{
                "name":"Another post",
                "title":"This is a title 2",
                "description":"A short description goes here 2",
                "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ad doloremque, fugit obcaecati consequatur atque nisi tenetur officiis nobis sequi earum excepturi ipsa, saepe quas eaque sint facilis harum quam."
             }
          }
       },
       "html":""
    }



Also you can use find method
**Example:** _https://make-api-with-markdown.glitch.me/find/test/posts_



    {
       "posts":{
          "1":{
             "name":"Hello world",
             "title":"This is a title",
             "description":"A short description goes here",
             "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ad doloremque, fugit obcaecati consequatur atque nisi tenetur officiis nobis sequi earum excepturi ipsa, saepe quas eaque sint facilis harum quam."
          },
          "2":{
             "name":"Another post",
             "title":"This is a title 2",
             "description":"A short description goes here 2",
             "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ad doloremque, fugit obcaecati consequatur atque nisi tenetur officiis nobis sequi earum excepturi ipsa, saepe quas eaque sint facilis harum quam."
          }
       }
    }




