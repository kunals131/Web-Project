function initMap() {
  // Your location
  var loc = { lat: 20.593683, lng: 78.962883 };
  var loc={ lat: 56.130367, lng: -106.346771 }
  // Centered map on location
  var map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 7,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}