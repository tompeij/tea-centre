// replace Google Map iframe with leaflet map

$('iframe').replaceWith('<div id="mapid"></div>');

$('#mapid').css({
    width: "450px",
    height: "450px"
});

var mymap = L.map('mapid').setView([49.691, -124.998], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidG9tcGVpaiIsImEiOiJjamZicHZlNHQzaTB6MndvMWlhOGhhYWZnIn0.0gY7AGTL0Tn193oXLH2XBQ'
}).addTo(mymap);

var teaCentreMarker = L.marker([49.691, -124.998]).addTo(mymap);

teaCentreMarker.bindPopup("Tea Centre");