// ---- INIT ----
// import L from "leaflet";
// import 'leaflet/dist/leaflet.css';

// ---- MENDER MAP SCRIPTING ----
// LEAFLET MAP API SETUP; LEAFLET JS NEEDS TO STAY AT THE TOP OF THE FILE OTHERWISE IT FAILS TO REFERENCE THE SCRIPTING

// Setting up the Leaflet Map with a set starting position that is showing

var userLocation = [-33.880466, 151.206894];
var attributionText = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var map = L.map('map').setView(userLocation, 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: attributionText}).addTo(map);

// creating a circle marker to indicate the user location
var userCircle = L.circle(userLocation, {
    color: '#40a9e6',
    fillColor: '#40a9e6',
    fillOpacity: 0.35,
    radius: 75
}).addTo(map);

// creates location marker 
// var marker = L.marker([-33.891579, 151.200532]).addTo(map);
// creates popup for that marker
// marker.bindPopup("<b>Wilkinson Building</b><br>Darlinghurst, NSW");

// Temmuni Fabric Location Marker
var markerTemmuni = L.marker([-33.8805, 151.21096]).addTo(map);
markerTemmuni.bindPopup("<b>Temmuni Fabrics</b><br>Surry Hills, 2010");
// Fabric Moose Location Marker
var markerFabricM = L.marker([-33.88808, 151.19686]).addTo(map);
markerFabricM.bindPopup("<b>Fabric Moose</b><br>Chippendale, 2008");
// So Special Location Marker
var markerSoSpecial = L.marker([-33.86984, 151.21013]).addTo(map);
markerSoSpecial.bindPopup("<b>So Special</b><br>Sydney, 2000")

// applying colour change filter through .css class
markerTemmuni._icon.classList.add("markerHueChange");
markerFabricM._icon.classList.add("markerHueChange");
markerSoSpecial._icon.classList.add("markerHueChange");

// Click event on map example
var clickPopupExample = L.popup();
map.on('click', onMapClick);

markerTemmuni.on('mouseover', onMarkerHover);
markerFabricM.on('mouseover', onMarkerHover);
markerSoSpecial.on('mouseover', onMarkerHover);

function onMapClick(e) {
    // alert(`You clicked the map at ${e.latlng}`);
    // clickPopupExample.setLatLng(e.latlng).setContent(`You clicked the map at ${e.latlng.toString()}`).openOn(map);
    clickPopupExample
    .setLatLng(e.latlng)
    .setContent("You clicked on the map at " + e.latlng.toString())
    .openOn(map);
}

// Shows the preset pop-up when cursor hover's over the marker
function onMarkerHover(e) {
    e.target.openPopup();
}