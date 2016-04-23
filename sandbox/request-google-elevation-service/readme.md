<span style=display:none; >
[You are now in a GitHub source code view - click this link to view the home page]( http://fgx.github.io/sandbox/request-google-elevation-service/#readme.md "View file as a web page." )
</span>
<input type=button onclick=window.location.href='https://github.com/fgx/fgx.github.io/tree/master/sandbox/request-google-elevation-service'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

Request Google Elevation Service Read me
===


## &#128279; [Request Google Elevation Service R1]( http://fgx.github.io/sandbox/request-google-elevation-service/index.html )

To display data see: [Read Elevations Update Plane R1]( http://fgx.github.io/sandbox/read-elevations-update-plane/read-elevations-update-plane-r1.html )


<iframe src=http://fgx.github.io/sandbox/request-google-elevation-service/index.html width=100% height=500px ></iframe>

## Concept

* The idea is to get the data once from Google Maps, save it and be able to display it ever after
* Because data is from Google it is likely to be the latest and most accurate data that is readily available
* Gathering the data can take a number of minutes, so still not feasible to gather data at run-time



### Features

* Work-in-progress. Still very hard-wired. Not flexible
* Given min and max lat and long, requests data from [Google Maps Elevation Service]( https://developers.google.com/maps/documentation/javascript/elevation )
* Parses returned JSON
* Displays the elevations found
	* Draws bar on screen 
* Allows you to save elevation data to file
* Number of segments per side is a variable you can edit in the source code
* Indicates typical resolution of the data
	* Appears to be ~19 meters for the current map

## Issues

* UI needs streamlining


## Road Map

* Add settings for any latitude and longitude
	* As well as length and width of area to be covered
* Get up to ~1024 sample points per path
	* Aim toward suppling data for 1024x1024 segments in a Three.js Plane - about the maximum that display at an OK FPS using current technology
* Save to binary data 


## Change Log

### 2016-04-22

* [Request Google Elevation Service R3]( http://fgx.github.io/sandbox/request-google-elevation-service/request-google-elevation-service-r3.html )
* Reads up to 512 x 512 elevations
* Slows down if there are usage limit issues
* Displays helpful info during process



### 2016-04-21

* [Request Google Elevation Service R1]( http://fgx.github.io/sandbox/request-google-elevation-service/request-google-elevation-service-r1.html )