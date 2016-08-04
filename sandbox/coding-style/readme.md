<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( http://fgx.github.io/sandbox/coding-style/#readme.md "View file as a web page." )</span>
<input type=button onclick=window.location.href='https://github.com/fgx/fgx.github.io/tree/master/sandbox/coding-style/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[FGx]( https://fgx.github.io ) &raquo; [Sandbox]( http://fgx.github.io/sandbox/  ) &raquo;

[Sandbox Coding Style]( http://fgx.github.io/sandbox/xxxxxx/index.html#readme.md )
===


For some background see also: https://github.com/fgx/fgx.github.io/issues/37#issuecomment-237409716


## Cookbook Format

Otherwise known as 'Cut and Paste' coding

The code herin is:

* Made up of individual HTML files
	* Each file contains all the styling and JavaScript it requires
* Minimal external dependecies
	* Only Three.js and ShowDown
	* Can copy and paste code into a file on your computer, hit `enter` and it runs
* Designed for students and non-programmers
	* Any script can be 'digested' in less than an hour


## Client-side not Server-side

* Scripts must access a GPU
	* 'Cause no GPU then no 3D
	* Can be edited and run on any device
* Means can be hosted on static servers
	* Such as GitHub, DropBox or GDrive
	* So penniless kids around the world can play and experiment


## Everything in Git plus more

* Everything gitted in GitHub
* But code in older releases is not just viewable BUT also runnable
	* You can see the evolution of the design process
	* Think of an artist and a sketchbook

## 3D is not 2D

* 3D is its own special world
	* You get, say, 18 milleseconds about 60 times a second
	* You need to multiply, say, a 1000x1000 matrix by 0x456789
	* jQuery, React, Go whatever are of no use at all here - and mostly just get in the way
* Communucate to the 2D world using iframes
	* Just aboutt every script here has neen tested in an iframe
	* Scripts in iframes are heppy having ongoing dialogs with their parents


## Links of interest

Examples of coding styles similar to the one use here:

* [Three.js Examples]( http://threejs.org/examples/ )
* [Stemkoski]( http://stemkoski.github.io/Three.js/ )
* [Dirksen ]( http://www.smartjava.org/content/all-109-examples-my-book-threejs-threejs-version-r63 )
* [Parisi]( https://github.com/tparisi/WebGLBook )

See also

* [Mr.doob's Code Style™]( https://github.com/mrdoob/three.js/wiki/Mr.doob's-Code-Style%E2%84%A2 )



## Change Log

### 2016-08-03

* First commit
* Add Read Me


***

<center title='FGx ~ a place to fly' >
# <a href=javascript:window.scrollTo(0,0); style=text-decoration:none; > ❦ </a>
</center>
