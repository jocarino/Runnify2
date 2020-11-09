var map = L.map('map').setView([51.505, -0.09], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([51.5, -0.09]).addTo(map)
// .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
// .openPopup();

$(window).on("resize", function () {
    $("#map").height($(window).height()).width($(window).width());
    map.invalidateSize();
}).trigger("resize");