<span style=display:none; >
[You are now in a GitHub source code view - click this link to view the home page]( http://fgx.github.io/sandbox/ "View file as a web page." )
</span>
<input type=button onclick=window.location.href='https://github.com/fgx/fgx.github.io/tree/master/sandbox'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >


FGX Sandbox Read Me
===

Files here 

## Flightpath Concept

* Open a data file of FlightGear flight path data and display that data as a 3D animation


### Mission

* Provide access to 3D maps in a manner that is free, global and easy
	* Include a variety of terrain overlays
* Read files with flight path data and translate into 3D polyline
* Package it all in a easy-to-use 3D game-like environment 


### Elevation data

Terrain elevation data is a complex topic with a voluminous pedigree of studies and data sets. 
The FGx mission is to help access to digital elavation data be faster, cheaper and smarter

See also: [Digital elevation model]( https://en.wikipedia.org/wiki/Digital_elevation_model ).

The bullet points include:

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
	* All tools free, open source software
* Utilize any and all data sources - both public and private, including
	* Scripps Institute
	* USGS
	* de Ferranti
	* Google
	* [MaoQuest]( https://open.mapquestapi.com/elevation/ )
	* Whether it is acceptable to use data from from servers where the server code is not open source is an interesting question
		* For the moment we ar saying it's OK.


### Elevation Data: old style and new style

In the days of your people would download data files from severs such as USGS and de Ferranti.
The data did not have to be downloaded, but many people did not unnderstand the internet.
Then the data had to be massaged and put back up on the Internet. 
Now the data is just 'in the cloud'.

Here is an example of the differences:

What the demos are about is resolution or accuracy or fineness of detail. The two images show Alcatraz island in San Francisco Bay.


![image](https://cloud.githubusercontent.com/assets/547626/16705728/abeef564-4547-11e6-9aaf-9d91084bc6c8.png )

_Screen capture using [PNG USGS 1 Second Viewer 3D unFlatland R1 ]( http://jaanga.github.io/terrain-usgs-viewers/png-usgs-viewer-3d-unflatland/r1/png-usgs-viewer-3d-unflatland.html )_

Note that the model shows only sea level and above and that the rendering is fairly indistinct. It is unlikely that zooming in will show more detail.

![image](https://cloud.githubusercontent.com/assets/547626/16705793/39cf9b34-454a-11e6-8ab7-8e2b6e9aab7a.png )

_Screen capture using data obtained by [ Google Maps API Elevations for Tiles ]( https://jaanga.github.io/cookbook-threejs/examples/google-api/google-maps-api-elevations-for-tiles/ )_

See also [Alcatraz R1]( https://fgx.github.io/sandbox/sample-maps/alcatraz-r1.html )

 Note that full bathymetric data is available and visible. Note that the model shows more detail. It is likely that zooming in and increasing the sampling rate will display more detail.



## Notes

The [home page]( http://fgx.github.io/sandbox/ ) menu on the left provides links to all directories in this sandbox directory that have 'read me' files.

The important script is the 'flightpath' script. This script may take a while to load. If the terrain appears white, you should reload the page.

'Flight Path to 2D Map Texture' and 'Read Elevations Update Plane' to go to archive

