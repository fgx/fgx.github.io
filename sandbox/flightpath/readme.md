<span style=display:none; >
[You are now in a GitHub source code view - click this link to view the home page]( http://fgx.github.io/sandbox/flightpath#readme.md "View file as a web page." )
</span>
<input type=button onclick=window.location.href='https://github.com/fgx/fgx.github.io/tree/master/sandbox/flightpath'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[FGx FlightPath Read Me]( index.html#readme.md )
===

### See also [README-LEIG]( index.html#README-LEIG.md )


## &#128279; [FGx FlightPath]( http://fgx.github.io/sandbox/flightpath/ )

<iframe src=http://fgx.github.io/sandbox/flightpath//index.html width=100% height=500px ></iframe>

### Features 

* Reads 3D terrain data from a file and displays a 3D mesh
* Requests a Google map static bitmap and displays the result as a texture on the mesh
* Reads flightpath data from a CSV file
* Draws a green 3D flightpath from the data
* Simulates the motion of an aircraft following the path << not in r7
* Buttons allow toggling between camera following aircraft and world camera << not in r7
* Supports the normal Three.js rotate, zoom and pan features

### Issues 

* Camera Follow is mostly broken
* Display of aircraft has issues because model scaled down too much.
	* May need to consider scaling up the whole exercise

### Road Map - in probable order of appearance

* Add 3D points of interest placards/indications, like castle, and freeway intersection, visual turn clues and more to make this a real sim PPL circuit view...
* Upgrade c172p aircraft to have colors and textures
* More controls over camera placement


### Notes

* CSV must not end in a newline - protect against a v(0,0,0) last point


## Change Log

### 2016-04-24

* [FGx FlightPath R7]( fgx-flightpath-r7.html ) 297 lines of code
* Reads 3D terrain data and displays a 3D mesh
* Requests a Google map static bitmap and displays the result as a texture on the mesh
* Draws the 3D flight path as a green 'ribbon'
 

### 2016-04-19

* [FGx FlightPath R6]( fgx-flightpath-r6.html ) 256 lines of code
* Reads <LEIG-L1500-cooked-01.csv> flight path data
	* Draws the 3D flightpath as a red line
* Loads the C172P aircraft model
	* Creates playback from positions and rotations
* Updates camera, target and axes to position of first point in flightpath

Also
* Geoff adds data, utilities and <README-LEIG.md> read me file


### 2016-04-17

* [FGx FlightPath R5]( fgx-flightpath-r5.html ) ~ 277 lines of code
* Add 'Camera Follow' and 'Camera World' buttons and associated code
	* Satisfies wish list item: A follow view mode where the camera is out the front of the model
* Add 'Camera Angle' button
	* Limited to horizontal motion only

### 2016-04-16

* [FGx FlightPath R4]( fgx-flightpath-r4.html )
* Add FGx Aircraft c172p
* [FGx FlightPath R3.1]( fgx-flightpath-r3.html )
* Removes delay after landing
* [FGx FlightPath R3]( fgx-flightpath-r3.html )
* Take off and land on same runway


### 2016-04-15

* [FGx FlightPath R2]( fgx-flightpath-r2.html )
* Read CSV file

### 2016-04-14

* [FGx FlightPath R1]( fgx-flightpath-r1.html )
