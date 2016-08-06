<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( http://fgx.github.io/sandbox/globe-crossfeed-replay/#readme.md "View file as a web page." )</span>
<input type=button onclick=window.location.href='https://github.com/fgx/fgx.github.io/tree/master/sandbox/globe-crossfeed-replay/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[FGx]( https://fgx.github.io ) &raquo; [Sandbox]( http://fgx.github.io/sandbox/  ) &raquo;

[FGx Globe Crossfeed Dailies Replay Read Me]( http://fgx.github.io/sandbox/globe-crossfeed-replay/index.html#readme.md )
===

## Full Screen: [ FGx Globe Crossfeed Dailies Replay ]( http://fgx.github.io/sandbox/globe-crossfeed-replay/ )

<img src="https://cloud.githubusercontent.com/assets/547626/17286812/ae71758c-5780-11e6-91db-f802ea769ab5.png" style=display:none; width=800 >

<iframe src=http://fgx.github.io/sandbox/globe-crossfeed-replay/index.html width=100% height=500px ></iframe>

_FGx Globe Crossfeed Dailies Replay_


## Features

## Concept

3D Globe that reads and displays historical FGx Crossfeed daily data

[FGx Crossfeed dailies]( https://github.com/fgx/crossfeed-dailies )


### Mission

* TBD

### Vision

* TBD


## Features

* TBD


## Things you can do using this script

* Use one/two/three fingers to rotate/zoom/pan the display in 3D
	* Or left/scroll/right with your pointing device 
* Click the three bars( 'hamburger menu icon' ) to slide the menu in and out
* Click the check box to display mesh as solid or wireframe
* Click the 'I' in the circle to go to the read me file
* Click on the title to reload the script
* Click the [Stats]( https://github.com/mrdoob/stats.js/ ) box in the top corner to toggle FPS / MS / MB views
* Press Control-U/Command-Option-U to view the source code
* Press Control-Shift-J/Command-Option-J to see if the JavaScript console reports any errors



## Things you can do by editing the code

<iframe sandbox='allow-scripts' src='https://jaanga.github.io/cookbook-html/examples/libraries/ace-editor/ace-view-r1.html#
	http://fgx.github.io/sandbox/globe-crossfeed-replay/globe-crossfeed-replay-r6.html' width=100% height=600 ></iframe>

<input type=button onclick=window.location.href='https://github.com/fgx/fgx.github.io/tree/master/sandbox/globe-crossfeed-replay/globe-crossfeed-replay-r6.html';
value='Source code listing' >


* Open this file: https://github.com/fgx/fgx.github.io/blob/master/globe-crossfeed-replay/globe-crossfeed-replay-r6.html
* Click the 'Raw' icon and save the raw file to your computer
* Once you've downloaded the file, you can click it to run it.
* Open the file with a text editor


## Issues


## To Do / Wish List

* Add jump to previous day - once current day is finished?
	* Or jump to random day?
* Placards
* Links to unFlatland 3D maps
* Stars
* Etc

## Users

Intended for general use


## Goals


## Links of Interest


## Change Log

### 2016-08-05 ~ R6


* No more zombies just about
* Needs to indicate where callsigns are warp seppeding instead of flying
* Needs to indicate which callsugns are not currently flying
 


### 2016-08-03 ~ R5


Still takes way to long to reload or close the page. This has to do with the trails - Three.ls lines.


* Generally being less of a memory hog
* Updates on `tot_secs`
* Still working on memory issues
* Still not deleting zombie flights


### 2016-08-02 ~ R4

Back to creating objects foe each callsigns. Means fewer objects to update 60 times per second. ;-)

Will need to look at monitoring both callsigns and FIDs.
Still too many zomble trails.
And there still appear to be some memory and performance issues tat should be cleaned up prior to adding features.

* Linking meshes and trails to callsigns 
* Add more metrics
* Simplify mesh creation and trails tacking


### 2016-08-01 ~ R2/R3

* R3 adds
	* Select file memu item, uses GitHub API to obtain list of files
	* More detailed flights menu
	* Flights based on FID not call sign. Thanks Geoff
	* No longer crashes browser (Or maybe just not as quckly ;-)
	* Objects appear at correct lat/lon
	* Better object management
* BUT trails still causing big slowdown /havimg memory issues? and not working as intended
* R2 was a dud

### 2016-08-01 ~ R1

* First commit
* Add Read Me


***

<center title='FGx ~ a place to fly' >
# <a href=javascript:window.scrollTo(0,0); style=text-decoration:none; > ❦ </a>
</center>
