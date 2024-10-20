// ---- INIT ----
// import L from "leaflet";
// import 'leaflet/dist/leaflet.css';

// ---- MENDER MAP SCRIPTING ----
// LEAFLET MAP API SETUP; LEAFLET JS NEEDS TO STAY AT THE TOP OF THE FILE OTHERWISE IT FAILS TO REFERENCE THE SCRIPTING
var map = L.map('map').setView([-33.8887156, 151.1894847], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 25, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

// creates location marker 
var marker = L.marker([-33.85, 151.190]).addTo(map);
// creates popup for that marker
marker.bindPopup("<b>Wilkinson Building</b><br>Darlinghurst, NSW");

// Click event on map example
var clickPopup = L.popup();
function onMapClick(e) {
    // alert(`You clicked the map at ${e.latlng}`);
    // clickPopup.setLatLng(e.latlng).setContent(`You clicked the map at ${e.latlng.toString()}`).openOn(map);
    clickPopup
    .setLatLng(e.latlng)
    .setContent("You clicked on the map at " + e.latlng.toString())
    .openOn(map);
}
map.on('click', onMapClick);

function minimiseNavBar() {
    var x = document.getElementById("navBarContainer");
    if (x.className === "navBarContainer") {
        x.className += " responsive";
    } else {
        x.className = "navBarContainer";
    }
    console.log("minimise clicked");
}