<span style=display:none; >
[You are now in a GitHub source code view - click this link to view the home page]( http://fgx.github.io/sandbox/flightpath#readme.md "View file as a web page." )
</span>
<input type=button onclick=window.location.href='https://github.com/fgx/fgx.github.io/tree/master/sandbox/flightpath'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[FGx FlightPath Read Me]( index.html#readme.md )
===

## &#128279; [FGx FlightPath]( http://fgx.github.io/sandbox/flightpath/ )

### Features 

* Reads flightpath data from a CSV file
* Creates a spline from the data
* Simulates the motion of an aircraft following the spline path
* Velocity is controlled by the distance between control points

### Issues 

* LookAt next point has gimbal lock issues

### Road Map - in probable order of appearance

* A follow view mode where the camera is out the front of the model
* The display to include the 3D generated terrain
* Updrade c172p aircraft to have colors and textures

### Notes

* CSV must not end in a newline - protect against a v(0,0,0) last point

## Change Log

### 2016-04-16

* [R4]( fgx-flightpath-r4.html )
* Add FGx Aircraft c172p
* [R3.1]( fgx-flightpath-r3.html )
* Removes delay after landing
* R3 
* Take off and land on same runway


### 2016-04-15

* [R2]( fgx-flightpath-r2.html )
* Read CSV file

### 2016-04-14

* [R1]( fgx-flightpath-r1.html )
