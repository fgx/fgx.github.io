<span style=display:none; >
[You are now in a GitHub source code view - click this link to view the home page]( http://fgx.github.io/sandbox/flightpath#readme.md "View file as a web page." )
</span>
<input type=button onclick=window.location.href='https://github.com/fgx/fgx.github.io/tree/master/sandbox/flightpath/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[FGx FlightPath Read Me]( http://fgx.github.io/sandbox/flightpath/index.html#readme.md )
===

### See also [README-LEIG]( http://fgx.github.io/sandbox/flightpath/index.html#README-LEIG.md )


## &#128279; [FGx FlightPath]( http://fgx.github.io/sandbox/flightpath/ )

<iframe src=http://fgx.github.io/sandbox/flightpath/index.html width=100% height=500px ></iframe>

### Features 

* Loads and displays a 3D model of a Cessna C172P
* Reads 3D terrain data from a file and displays a 3D mesh
* Requests a Google map static bitmap and displays the result as a texture on the mesh
* Reads flightpath data from a CSV file
* Draws a red 3D flightpath from the data
* Simulates the motion of an aircraft following the path
* Buttons allow toggling between camera following aircraft and world camera
	* Sliders control camera placement
* Supports the normal Three.js rotate, zoom and pan features
* AutoRotate with toggle
* Stop and start motion
* Display current position, heading, roll, yaw etc in a dashboard

### Issues 

* Flightpath scaling and positioning is still by eye
* Too long a wait before things start appearing on screen
* Chase camera rotation has many gimbal lock / where is up? issues
	* Try changing to cylindrical view


### Road Map - in probable order of appearance

* Add 3D points of interest placards/indications, like castle, and freeway intersection, visual turn clues and more to make this a real sim PPL circuit view...
* Upgrade c172p aircraft to have colors and textures
* Skybox
* User-defined height scales
* Read alternate data files
* Sun position? Fog? Night flying
* Increase size of texture map - to show more detail
* Increase size of ground mesh from 512x512 to 1024x1024
	* Once we get elevation data file size smaller
* Permalinks?
* Speed control
* Reorganize code and content files

### Notes

* CSV must not end in a newline - protect against a v(0,0,0) last point


## Change Log

### 2016-04-26

* [FGx FlightPath R9]( fgx-flightpath-r9.html ) 386 lines of code
* Rename camera follow to camera chase
* Add camera chase latitude and longitude sliders
* Add code to update camera position upon slider updates
* Code to update camera rotation has many issues ;-(
* Add Auto-rotate check box and code
* Add Flying check box and code

### 2016-04-25

* [FGx FlightPath R8]( fgx-flightpath-r8.html ) 361 lines of code
* Loads and displays Cessna C172P data from Three.js JSON file
* Aircraft follows flight path continuously
* Simple camera follow / camera world toggle - with buttons
* Camera helper is displayed
* Ground can be displayed as wireframe

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
