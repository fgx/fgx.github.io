// 2016-07-21 10:57
// flight-path-r1.js

//

	var flightPath = {};

	flightPath.url = 'YGIL-01-cooked.csv';
	flightPath.color = 0xff0000;

	var v = function( x, y, z ){ return new THREE.Vector3( x, y, z ); };

// FlightPath code

	function getFilePathCSV( path ) {

		var xhr, text, waypoints;

		xhr = new XMLHttpRequest();
		xhr.open( 'GET', path.url, true );
		xhr.onload = callback;
		xhr.send( null );

		function callback() {

			text = xhr.responseText;

			waypoints = text.split( '\n' ).map( function( point ) { return point.split( ',' ).map( parseFloat ); } );

			path.waypoints = waypoints.slice( 1, -1 );

			drawPath( path );

		}

	}

	function drawPath( path ) {

		var scale, geometry, material;

		scene.remove( path.path, path.box );

		path.points = path.waypoints.map( function( p ) { return v( p[ 0 ], p[ 1 ], inpVertical.valueAsNumber * 0.3048 * p[ 2 ] ); } );

		geometry = new THREE.Geometry();
		geometry.vertices = path.points;

		material = new THREE.LineBasicMaterial( { color: path.color } );
		path.path = new THREE.Line( geometry, material);

		path.box = new THREE.BoxHelper( path.path );
//		path.box.geometry.computeBoundingBox();
		scene.add( path.path, path.box );

		geometry.computeBoundingSphere();
		center = geometry.boundingSphere.center;
		latitude = center.z;
		longitude = center.x;

		geometry.computeBoundingBox();
		latMin = geometry.boundingBox.min.y;
		latMax = geometry.boundingBox.max.y;
		lonMin = geometry.boundingBox.min.x;
		lonMax = geometry.boundingBox.max.x;

		menuDetailsFlightPath.innerHTML =

		'<details open >' +

			'<summary><h3>flightpath details</h3></summary>' +

			'UL Lat: ' + latMax.toFixed( 4 ) + '&deg;' + b +
			'LR Lat: ' + latMin.toFixed( 4 ) + '&deg;' + b + b +

			'UL Lon: ' + lonMin.toFixed( 4 ) + '&deg;' + b +
			'LR Lon: ' + lonMax.toFixed( 4 ) + '&deg;' + b + b +

			'Center Latitude : ' + center.y.toFixed( 4 ) + '&deg;' + b +
			'Center Longitude: ' + center.x.toFixed( 4 ) + '&deg;' + b + b +

		'</details>';

	}

