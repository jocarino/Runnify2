var map = L.map('map').setView([51.505, -0.09], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


if (!navigator.geolocation) {
    // Show location error
    // locationErrorMessage = "Location not found. Try refreshing the page and allowing location permissions."
    // handleRouteGenerationFormError(locationErrorMessage, true)

    // Refresh the page
    location.reload();

} else {
    // Hide location error
    // handleRouteGenerationFormError("", false)
    map.locate({ setView: true, maxZoom: 16 });
}

function onLocationFound(e) {
    var currentLocationMarker = L.marker(e.latlng).addTo(map).bindPopup("You are here.").openPopup();
    mapLayers.push(currentLocationMarker);
    user_location = [e.latlng.lat, e.latlng.lng];
    user_location_element.value = user_location;
}

map.on('locationfound', onLocationFound);


$(window).on("resize", function () {
    $("#map").height($(window).height()).width($(window).width());
    map.invalidateSize();
}).trigger("resize");