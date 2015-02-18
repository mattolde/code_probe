function init() {
  var mapOptions = {
    center: { lat: -34.397, lng: 150.644},
    zoom: 8
  };

  var venueMap;
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}


google.maps.event.addDomListener(window, 'load', init);
