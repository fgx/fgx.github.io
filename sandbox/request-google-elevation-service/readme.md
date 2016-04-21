<span style=display:none; >
[You are now in a GitHub source code view - click this link to view the home page]( http://fgx.github.io/sandbox/request-google-elevation-service "View file as a web page." )
</span>
<input type=button onclick=window.location.href='https://github.com/fgx/fgx.github.io/tree/master/sandbox/request-google-elevation-service'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

Request Google Elevation Service Read me
===


## [Request Google Elevation Service R1]( request-google-elevation-service-r1.html )

To display data see: [Read Elevations Update Plane R1]( http://fgx.github.io/sandbox/read-elevations-update-plane/read-elevations-update-plane-r1.html )
### Features

* Work-in-progress. Still very hard-wired. Not flexible
* Given min and max lat and long, requests data from [Google Maps Elevation Service]( https://developers.google.com/maps/documentation/javascript/elevation )
* Displays the elevations found
	* Draws bar on screen 
* Allows you to save elevation data to file
* Number of segments per side is a variable you can edit in the source code

## Issues

* Still working on the minimum delay between requests in order to comply with Google usage limits
* Much to learn in general 

## Road Map

* Identify the scale of the map
* Indicate typical resolution of the data
	* Appears to be ~19 meters for the current map
* Add settings for any latitude and longitude
	* As well as length and width of area to be covered
* Get up to ~1024 sample points per path
	* Aim toward suppling data for 1024x1024 segments in a Three.js Plane - about the maximum that display at an OK FPS using current technology
* Save to binary data 