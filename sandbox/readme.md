<span style=display:none; >
[You are now in a GitHub source code view - click this link to view the home page]( http://fgx.github.io/sandbox/ "View file as a web page." )
</span>
<input type=button onclick=window.location.href='https://github.com/fgx/fgx.github.io/tree/master/sandbox'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >


FGX Sandbox Read Me
===

Files here 

## Flightpath Concept

* Open a file of FlightGear data that saved and display that data in 3D.


### Mission

### Elevation data

* Supply elevation data for the entire globe
	* Including bathymetric (ocean) data
	* At the most accurate resolution currently available
	* Including data with accuracy of 60cm or less when available
	* Including data being averaged appropriately for every zoom level
		* Not picking random points and hoping the points are close to the average
		* Not using image-processing algorithms that may or may not generate correct interpolations 
* Make the elevation data accessible via a web browser connected to the internet
	* No downloading and saving. It just works
	* No translations necessary
	* No programs to install and run in order to complete the process
* Your choice of data
	* Select any latitude and longitude
	* Select zoom level and number of tiles
	* Select number of samples per side
	* Take as much or as little data as needed
* Eschew data updating and maintenance, file uploads, gargantuan data repos
	* No need to access multiple weird server setups to obtain data files
	* No need to check if data sources has been updated, moved or discontinued
	* No need to modify data, deal with big/little-endian issues, shift byte size or whatever
* Data is available from source and goes straight to user
	* No need for 'middleware' data stores
	* No need for shared data repositories
	* No hassling with git add, commit and push for data files
	* No dealing with GitHub usage rate limits, repo size limits and file limits
* Coding skills needed are beginner level
	* All algorithms very basic JavaScript
	* Relevant code is a few hundred lines
	* May be assimilated by a new user in less than and hour
	* Fork or download the HTML file and it just runs
		* No jQuery, Node or any other dependencies apart from Google Maps API




## Notes

The [home page]( http://fgx.github.io/sandbox/ ) menu on the left provides links to all directories in this sandbox directory that have 'read me' files.

The important script is the 'flightpath' script. This script may take a while to load. If the terrain appears white, you should reload the page.

'Flight Path to 2D Map Texture' and 'Read Elevations Update Plane' to go to archive

