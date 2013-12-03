docBrowser.js Read Me
=====================

## Concept
docBrowser.js is a very simple and very small library for browsing Markdown files on GitHub.

## Objectives

_The following are some of the thoughts going on while this app and these web pages are being developed. This text is very much a work in rapid progress._

### Easy to enhance
Create something that screams: 'tweak me till I twerkle.' 'Open up the hood, pick up your wrench and screwdriver, and take me apart.'


### Lots of interactive 3D
If this is 'your 3D happy-place' then it better be dripping with luscious interactive 3D


### Lots of images and videos
Don't forget the Handicapped
Not everybody has cutting edge technology


### Apps are from Venus. Code is from Mars.
two links for every repo - one for app view - one for source view

html files are about using the apps
moving around github is about looking at source code
seamless transitions between viewing apps and viewing source


### Embrace GitHub
Fully utilizes GitHub spirit/features


### Effortless Navigation
Moving around is as easy as changing TV channels. You can go to the next channel by clicking. Like a multipane file tree viewer.

You *do not* have have to go and return, go and return, go and return.
Browse apps and code easily.
Each screen shows images of the contents
Handles folders and files


### WORM revisited
* Write once, read anywhere
A guiding precept is: 'Write once. Read many.' 

This has nothing to to with WORM drives. 

In this case meaning the ability to view files in a well-formatted fashion in either a GitHub source code repository or available as a GitHub-hosted web-page.


### Accept Quantity
Make it really easy and really fast to look after and curate lots of projects and c=very simple to add new projects.


### Compatibility
* Markdown interpreter 
* Compatible with airDoodle 
* Totally embraces the GitHub thing

### Oriented toward programmers
* Monospace font
* Left justified
* IDE-like feeling
* Snarky attitude


### Oriented toward Designers / Code is for dummies


### Easy to Maintain
Lends itself to progressive improvements

Ability to go through lots of files - one by one - and make incremental improvements that evolve as the improvements are made and then can be easily carried0back to the previously enhanced files.
- or putting it another way: nothing prevents the above from happening.


### 100% JavaScript
Use the ability of JavaScript to create and it HTML and CSS.
Write with a single thought process


## Live Demo

[docBrowser R2](http://jaanga.github.io/libs/db/doc-browser-prototype.html)

## Notes

The ideas or concept for code used to display this document is sourced from the code used to display the documentation for Three.js - a JavaScript library for 3D visualizations such as the demo included in this document.

The code - which appears not to have a name - enables a multi-page document to be generated from files stored on GitHub.

The Three.js documentation app has the following features:

* Allows the two frames to scroll independently.
* Allows frames to be loaded without reloading the entire web page
* Overcomes the inability of the GitHub server to update IFRAMES using HTML by providing a JavaScript routine to do this.
* Provides a simple folder and file structure for creating documents of any length or complexity
* Provides a simple wiki-like method for creating internal and external links 

This code used here has evolved away from the original. It has the title of docBrowser.

docBrowser has the following features

* All data designated to appear in the content frames is assumed to be in Markdown format - which is interpreted at run-time and displayed as HTML.
* The app loads data via an `XMLhttpRequest` and display that data in a `div`. Thus the app is constricted (or enhanced) by the usual CORS issues.
* The Markdown files may contain images, iframes and many other cool things - and full HTML if wanted


The title of the app follows a commonly used JavaScript notation standard that use camel case except that the first letter is lower case,

Thus the title of the library is docBrowser. Of course if used in a title or at the beginning of a sentence the initial letter may be uppercase. 

## Help Files

<http://jaanga.github.io/libs/md/showdown-test.html>

### Copyright, License and Credits
Copyright &copy; 2013 Jaanga authors

All work herein is available under the MIT License.  

For details see [Jaanga Copyright and License](http://jaanga.github.io/libs/jaanga-copyright-and-mit-license.md)


### Change Log

2013-11-14 ~ Theo

* Additions to read me

2013-11-06 ~ Theo

* Changed name from docSimple to docBrowser - more specific
* Greatly simplified the functionality


2013-11-04 ~ Theo

* Update copyright notice

2013-11-03 ~ Theo

* Readme updates

2013-11-02 ~ Theo

* File and folder set up 
