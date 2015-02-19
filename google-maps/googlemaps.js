function init() {

  var latLng = new google.maps.LatLng(-34.397, 150.644);

  // setup map options
  var mapOptions = {
    center: latLng,
    zoom: 8,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map;
  // Map() draws the map.
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: 'this is a test marker'
  });

  marker.setMap(map);
}

function loadScript() {
  var script = document.createElement('script');
  // use JSONP with API
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;
