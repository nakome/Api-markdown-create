Info
==========

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

  [note padding=1em background=red color=blue]
    Hello World
  [/note]

  [youtube class=iframe id=Hfm7q6CT36U]
  
```

When you go to _https://yoururl/read/demo_


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
  "html":"<div style=\"background:red;color:blue;padding:1em\">  Hello World</div></p>\n<p>\n<p><div class=\"iframe\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/muONBiadpl8\" frameborder=\"0\" allowfullscreen></iframe></div>"
}
