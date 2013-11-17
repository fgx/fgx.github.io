	var DS = DS || {};

	DS.css = document.body.appendChild( document.createElement('style') );
	DS.css.innerHTML = 'body { font: bold 12pt monospace; margin: 0; overflow: hidden; }' +
		'h1, h2, h3, p { margin: 10px 0px; padding: 0px 25px;  }' +
		'p {padding: 5px 20px 5px 25px; }' +
		'#githubio { display: block important!; }' +
	'';	

	DS.converter = new Showdown.converter();	
	
	DS.basic = 'border: 3px double #eee; overflow-x: hidden; overflow-y: auto; position: absolute; ';

	DS.horzMnu = ' left: 0; width: 23%;';
	DS.horzRdm = ' left: 28%; margin auto: auto; max-width: 900px; min-width: 700px; right: 50px; width: 100%; ';

	DS.height = ' height: ' + (window.innerHeight * 0.88) + 'px;';

	//DS.top = ' top: ' + (window.innerHeight * 0.08) + 'px;';
	DS.top = ' top: 60px;';
	
	DS.title = document.body.appendChild( document.createElement( 'h1' ) );
	DS.title.style.cssText = ' left: 0; position: absolute; top: 10px;'
	
	DS.menu = document.body.appendChild( document.createElement( 'div' ) );
	DS.menu.style.cssText = DS.basic + DS.height + DS.horzMnu + DS.top;

	DS.readme = document.body.appendChild( document.createElement( 'div' ) );
	DS.readme.style.cssText = DS.basic + DS.height + DS.horzRdm + DS.top;
	
	DS.editButton = document.createElement( 'div' ) ;
	DS.editButton.style.cssText = 'background-color: #555; color: #fff; opacity: 0.5; padding: 8px; position: absolute; right: 5%; top: 3%; ';
	
	DS.readme.appendChild( DS.editButton );
	
	DS.init = function( base, fname, id) {
		DS.base = base;
		DS.intro = id;
		if ( !location.hash ) {
			DS.displayMarkdown( fname, id );
		} else {
			DS.displayMarkdown( location.hash.substr(1), id );
		}
	};
	
	
	DS.displayMarkdown = function( fname, element ) {
	
		DS.readme.innerHTML = DS.converter.makeHtml( DS.requestFile( fname ) );
		
		DS.editButton.innerHTML = '<a href="' + DS.base + fname + 
		'" onmouseover=this.style.opacity=1; style=color:#fff;text-decoration:none;	>' +
		'Edit this page</a>';
		
		DS.readme.appendChild( DS.editButton );
		DS.readme.children[2].style.cssText = 'display:block;'
		
		DS.clearMenuHighlights( element );

		if ( element === DS.intro ) {
			history.pushState('', document.title, window.location.pathname);
		} else {
			location.hash = fname ;
		}	
	};

	DS.clearMenuHighlights = function( element ) {
	
		var tit = DS.menu.getElementsByTagName('h1');
		DS.title.innerHTML = tit[0].innerHTML;
		DS.menu.children[0].style.cssText= 'display:none;'
		
		var paragraphs = document.getElementsByTagName('p');
		for (var i = 0, len = paragraphs.length; i < len; i++) {
			paragraphs[i].style.backgroundColor='';
		}
		if ( !!element ) element.style.backgroundColor='#edd';
	};

	DS.requestFile = function( fname ) {
		var xmlHttp = null;
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open( 'GET', fname, false );
		xmlHttp.send( null );
		return xmlHttp.responseText;
	};
