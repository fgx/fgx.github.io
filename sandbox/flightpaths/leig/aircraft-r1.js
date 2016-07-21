// 2016-07-21 ~ 14:26

// aircraft R1 

	var aircraft = new THREE.Object3D();
	aircraft.flying = false;

	var aircraftDataURL = 'http://fgx.github.io/fgx-aircraft/data/c172p/c172p.js';
	var delta = 0;

	function loadAircraft( url ) {

		var loader, geometry, material, mesh;

		loader = new THREE.JSONLoader();
		loader.crossOrigin = 'anonymous';
		loader.load( url || aircraftDataURL, function ( geometry, materials ) {

			geometry.applyMatrix( new THREE.Matrix4().makeRotationY( pi05 ) );
//			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( pi05 ) );

			geometry.applyMatrix( new THREE.Matrix4().makeScale( 0.001, 0.001, 0.001 ) );

			geometry.center();

			material = new THREE.MeshNormalMaterial( { side: 0 } );
			mesh = new THREE.Mesh( geometry, material );

			aircraft.add( mesh );
			scene.add( aircraft );

			aircraft.flying = true;

		} );

	}
