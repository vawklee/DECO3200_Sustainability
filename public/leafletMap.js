// ---- INIT ----
// import L from "leaflet";
// import 'leaflet/dist/leaflet.css';
// Leaflet is linked directly in each HTML <head> thus requiring an internet connection to function

// -------- MENDER MAP SCRIPTING --------

// ---- Setting up the Leaflet Map with a set starting position that is showing ----
var userLocation = [-33.880466, 151.206894];
var attributionText = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var menderMap = L.map('menderMap').setView(userLocation, 15); // references id="menderMap"
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: attributionText}).addTo(menderMap);

// creating a circle marker to indicate the user location
var blueHexCode = "#40a9e6";
var redHexCode = "#e34d42";
var blackHexCode = "#4a4a4a";
var menderMapUserLoc = L.circle(userLocation, {
    color: blueHexCode,
    fillColor: blueHexCode,
    fillOpacity: 0.35,
    weight: 1,
    radius: 100
}).addTo(menderMap);
var menderMapUserRadius = L.circle(userLocation, {
    color: blueHexCode,
    fillColor: blueHexCode,
    fillOpacity: 1.00,
    radius: 50
}).addTo(menderMap);
var menderMapUserBorder = L.circle(userLocation, {
    color: "#FFFFFF",
    fillColor: "#FFFFFF",
    fillOpacity: 0.00,
    radius: 50
}).addTo(menderMap);

menderMapUserLoc.bindPopup("You are here");
menderMapUserRadius.bindPopup("You are here");
menderMapUserBorder.bindPopup("You are here");

menderMapUserLoc.on("mouseover", onMarkerHover);
menderMapUserRadius.on("mouseover", onMarkerHover);
menderMapUserBorder.on("mouseover", onMarkerHover);

// creates location marker 
// var marker = L.marker([-33.891579, 151.200532]).addTo(menderMap);
// creates popup for that marker
// marker.bindPopup("<b>Wilkinson Building</b><br>Darlinghurst, NSW");

// Local Repair Services Coordinates
coordsTemmuni = [-33.8805, 151.21096];
popupTemmuni = "<b>Temmuni Fabrics</b><br>⭐ ⭐ ⭐ ⭐ ⭑<br>110 Commonwealth St, Surry Hills 2010<br>0.6 km away<br>Tel.: 02 998 299 762";
coordsFabricM = [-33.88808, 151.19686];
popupFabricM = "<b>Fabric Moose</b><br>⭐ ⭐ ⭐ ⭑ ⭑<br>92-120 Cleveland St, Chippendale 2008<br>1.8 km away<br>Tel.: 02 388 029 938";
coordsSoSpecial = [-33.86984, 151.21013];
popupSoSpecial = "<b>So Special</b><br>⭐ ⭐ ⭐ ⭐ ⭐<br>111 Elizabeth St, Sydney 2000<br>1.9 km away<br>Tel.: 02 808 429 954";

// Temmuni Fabric Location Marker
var markerTemmuni = L.marker(coordsTemmuni).addTo(menderMap);
markerTemmuni.bindPopup(popupTemmuni);
// Fabric Moose Location Marker
var markerFabricM = L.marker(coordsFabricM).addTo(menderMap);
markerFabricM.bindPopup(popupFabricM);
// So Special Location Marker
var markerSoSpecial = L.marker(coordsSoSpecial).addTo(menderMap);
markerSoSpecial.bindPopup(popupSoSpecial);

// applying colour change filter through .css class
markerTemmuni._icon.classList.add("menderMarkerHueChange");
markerFabricM._icon.classList.add("menderMarkerHueChange");
markerSoSpecial._icon.classList.add("menderMarkerHueChange");

// Click event on map example
var clickPopupExample = L.popup();
menderMap.on('click', onMapClick);

markerTemmuni.on('click', onMapClick);
markerFabricM.on('click', onMapClick);
markerSoSpecial.on('click', onMapClick);
markerTemmuni.on('mouseover', onMarkerHover);
markerFabricM.on('mouseover', onMarkerHover);
markerSoSpecial.on('mouseover', onMarkerHover);

function onMapClick(e) {
    // clickPopupExample
    // .setLatLng(e.latlng)
    // .setContent("You clicked on the map at " + e.latlng.toString())
    // .openOn(menderMap);
    e.target.openPopup();
}

// Shows the preset pop-up when cursor hover's over the marker
function onMarkerHover(e) {
    e.target.openPopup();
    // console.log(e.target);
    // console.log(e.target._popup._content);
}

// ---- Scripting for map card interactivity ---
var cardTemmuni = document.getElementById("cardTemmuni");
var cardFabricMoose = document.getElementById("cardFabricMoose");
var cardSoSpecial = document.getElementById("cardSoSpecial");

cardTemmuni.addEventListener("click", onMapCardClick);
cardFabricMoose.addEventListener("click", onMapCardClick);
cardSoSpecial.addEventListener("click", onMapCardClick);

// Used for recognising which card was clicked on the map page
// Shows the appropriate marker on the map based on what was clicked
function onMapCardClick(e) {
    console.log(e.target.className);

    // The following works to make the image appear but cannot revert that change
    if (e.target.className.includes("classCardTemmuni")) {
        // var thumbnail = document.getElementById("thumbnailTemmuni");
        // thumbnail.style.display = "block";
        markerTemmuni.openPopup();
    } else if (e.target.className.includes("classCardFabricMoose")) {
        // var thumbnail = document.getElementById("thumbnailFabricMoose");
        // thumbnail.style.display = "block";
        markerFabricM.openPopup();
    } else if (e.target.className.includes("classCardSoSpecial")) {
        // var thumbnail = document.getElementById("thumbnailSoSpecial");
        // thumbnail.style.display = "block";
        markerSoSpecial.openPopup();
    }
}