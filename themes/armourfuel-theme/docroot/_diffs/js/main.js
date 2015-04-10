
AUI().use('aui-viewport');

AUI().ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {	
		
	}
);

Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function(portletId, node) {
	}
);

Liferay.on(
	'allPortletsReady',
	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {
		//Animate triangles
	    jQuery('.triangle').bind('inview', function (event, visible) {
	        if (visible == true) {
	            jQuery(this).addClass("animated fadeInDown");
	        } else {
	            jQuery(this).removeClass("animated fadeInDown");
	        }
	    });
	}
);

var methodName = 'initializeMap';
Liferay.provide(
		window,
		methodName,
		function(){

		    var lat = '44.8164056'; //Set your latitude.
		    var lon = '20.46090424'; //Set your longitude.

		    var centerLon = lon - 0.0105;

		    var myOptions = {
		        scrollwheel: false,
		        draggable: false,
		        disableDefaultUI: true,
		        center: new google.maps.LatLng(lat, centerLon),
		        zoom: 15,
		        mapTypeId: google.maps.MapTypeId.ROADMAP
		    };

		    //Bind map to elemet with id map-canvas
		    var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
		    var marker = new google.maps.Marker({
		        map: map,
		        position: new google.maps.LatLng(lat, lon),
		    });

		    var infowindow = new google.maps.InfoWindow();

		    google.maps.event.addListener(marker, 'click', function () {
		        infowindow.open(map, marker);
		    });

		    infowindow.open(map, marker);
		}
);