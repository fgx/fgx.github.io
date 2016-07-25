// 2016-07-24

// aircraft R2

	var aircraft = new THREE.Object3D();
	aircraft.flying = false;

	var aircraftDataURL = 'http://fgx.github.io/fgx-aircraft/data/c172p/c172p.js';
	var delta = 3000;

	var cameraChase, cameraWorld, cameraHelper;

	function loadAircraft( url ) {

		var loader, geometry, material, mesh;

		loader = new THREE.JSONLoader();
		loader.crossOrigin = 'anonymous';
		loader.load( url || aircraftDataURL, function ( geometry, materials ) {

			geometry.applyMatrix( new THREE.Matrix4().makeRotationZ( pi05 ) );
//			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( pi05 ) );

			geometry.applyMatrix( new THREE.Matrix4().makeScale( 0.001, 0.001, 0.001 ) );

			geometry.center();

			material = new THREE.MeshNormalMaterial( { side: 0 } );
			mesh = new THREE.Mesh( geometry, material );

			aircraft.add( mesh );
			scene.add( aircraft );

			aircraft.flying = true;

		} );

		setMenuDetailsAircraft();

		cameraWorld = camera;
		controlsWorld = controls;
//		controls.autoRotate = true;

	}


	function setMenuDetailsAircraft() {

		menuDetailsAircraft.innerHTML =

			'<details open>' +

				'<summary><h3>aircraft details</h3></summary>' +

				'<p>Aircraft: C172P</p>' +

			'<p>' +
				'<button onclick=setCameraChase(); >Camera Chase</a></button> ' +
				'<button onclick=setCameraWorld(); >Camera World</button>' +
			'</p>' +

/*
			'<p>' +
				'Chase camera position<br>' +
				'X <input type=range id=inpPosX min=-10 max=10 value=0 step=0.05 oninput=setCameraChase(); ><output id=outPosX ></output><br>' +
				'Y <input type=range id=inpPosY min=-10 max=10 value=1.5 step=0.05 oninput=setCameraChase(); ><output id=outPosY ></output><br>' +
				'Z <input type=range id=inpPosZ min=-10 max=10 value=0.4 step=0.05 oninput=setCameraChase(); ><output id=outPosZ ></output>' +

			'</p>' +

			'<p>' +
				'Chase camera rotation<br>' +
				'X <input type=range id=inpRotX min=-90 max=90 value=0 step=1 oninput=setCameraChase(); ><output id=outRotX ></output><br>' +
				'Y <input type=range id=inpRotY min=-180 max=180 value=0 step=1 oninput=setCameraChase(); ><output id=outRotY ></output><br>' +
				'Z <input type=range id=inpRotZ min=-180 max=180 value=0 step=1 oninput=setCameraChase(); ><output id=outRotZ ></output>' +

			'</p>' +
*/

				'<p id=pFlightStats ></p>' +

			'</details>' +

		'';

	}


	function setMenuFlightStats( index ) {

		var line = flightPath.waypoints[ index ];

		pFlightStats.innerHTML = 

				'<p>lat:' + line[ 0 ].toFixed( 4 ) + ' lon:' + line[ 1 ].toFixed( 4 ) + ' alt:' + line[ 2 ] + '<br>' +

				'hdg:' + line[ 3 ] + ' ias:' + line[ 4 ] + ' roll:' + line[ 5 ].toFixed( 3 ) + '<br>' +

				'pitch:' + line[ 6 ].toFixed( 3 ) + ' slip:' + line[ 7 ].toFixed( 3 ) + '<br>' +

				'vertex:' + index +

		''

	}


	function setCameraChase() {

		aircraft.remove( cameraChase );


		cameraChase = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 0.01, 1000 );

		aircraft.add( cameraChase );

		camera = cameraChase;


/*
		var radius, latitude, longitude, x, y, z ;

		outPosX.value = posX = inpPosX.valueAsNumber;
		outPosY.value = posY = inpPosY.valueAsNumber;
		outPosZ.value = posZ = inpPosZ.valueAsNumber;

		outRotX.value = rotX = inpRotX.valueAsNumber;
		outRotY.value = rotY = inpRotY.valueAsNumber;
		outRotZ.value = rotZ = inpRotZ.valueAsNumber;

		aircraft.remove( cameraChase );
		scene.remove( cameraHelper );

		cameraChase = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 0.01, 1000 );

		cameraChase.position.set( posX, - posY, - posZ );
//		cameraChase.rotation.set( rotX * d2r - pi05, rotY * d2r, rotZ * d2r );

		aircraft.add( cameraChase );

		cameraHelper = new THREE.CameraHelper( cameraChase );
		scene.add( cameraHelper );

		camera = cameraChase;
*/

	}

	function setCameraWorld() {

		camera = cameraWorld;

	}

