function MapTypeControl(div, map) {

  // Get the control DIV. We'll attach our control UI to this DIV.
  var controlDiv = div;

  // Setup the click event listeners for zoom-in, zoom-out:


  var mapText = document.createElement('div');
  mapText.innerHTML = '<button class="custom-map-type-control">Map</button>';
  mapText.id = "maptype-btn";
  controlDiv.appendChild(mapText);

  var satellite = document.createElement('div');
  satellite.innerHTML = '<button class="custom-map-type-control">Satellite</button>';
  satellite.id = "satellite-btn";
  controlDiv.appendChild(satellite);

  google.maps.event.addDomListener(mapText, 'click', function() {
   // var currentZoomLevel = map.getZoom();
   // if(currentZoomLevel != 0){
   //   map.setZoom(currentZoomLevel - 1);}  
     		this.style.fontWeight="bold";
  		$('#satellite-btn').css('font-weight','normal');
   map.setMapTypeId(google.maps.MapTypeId.ROADMAP);   
  });

   google.maps.event.addDomListener(satellite, 'click', function() {
  //  var currentZoomLevel = map.getZoom();
  //  if(currentZoomLevel != 21){
  //    map.setZoom(currentZoomLevel + 1);}
  		this.style.fontWeight="bold";
  		$('#maptype-btn').css('font-weight','normal');
  		// light.style
  	map.setMapTypeId(google.maps.MapTypeId.HYBRID);
  	 });
  // });
}

