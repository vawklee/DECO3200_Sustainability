// ---- INIT ----
// import L from "leaflet";
// import 'leaflet/dist/leaflet.css';

// ---- MENDER MAP SCRIPTING ----
// LEAFLET MAP API SETUP; LEAFLET JS NEEDS TO STAY AT THE TOP OF THE FILE OTHERWISE IT FAILS TO REFERENCE THE SCRIPTING
// Requires internet connection due to relying on URLs for libraries

// ---- Setting up the Leaflet Map with a set starting position that is showing ----
var userLocation = [-33.880466, 151.206894];
var attributionText = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var map = L.map('map').setView(userLocation, 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: attributionText}).addTo(map);

// creating a circle marker to indicate the user location
var blueHexCode = "#40a9e6";
var redHexCode = "#e34d42";
var userCircle = L.circle(userLocation, {
    color: redHexCode,
    fillColor: redHexCode,
    fillOpacity: 0.35,
    radius: 100
}).addTo(map);
var moreCircle = L.circle(userLocation, {
    color: redHexCode,
    fillColor: redHexCode,
    fillOpacity: 1.00,
    radius: 50
}).addTo(map);

userCircle.bindPopup("You are here");
moreCircle.bindPopup("You are here");

userCircle.on("mouseover", onMarkerHover);
moreCircle.on("mouseover", onMarkerHover);

// creates location marker 
// var marker = L.marker([-33.891579, 151.200532]).addTo(map);
// creates popup for that marker
// marker.bindPopup("<b>Wilkinson Building</b><br>Darlinghurst, NSW");

// Local Repair Services Coordinates
coordsTemmuni = [-33.8805, 151.21096];
coordsFabricM = [-33.88808, 151.19686];
coordsSoSpecial = [-33.86984, 151.21013];

// Temmuni Fabric Location Marker
var markerTemmuni = L.marker(coordsTemmuni).addTo(map);
markerTemmuni.bindPopup("<b>Temmuni Fabrics</b><br>⭐ ⭐ ⭐ ⭐ ⭑<br>110 Commonwealth St, Surry Hills 2010<br>0.6 km away<br>Tel.: 02 998 299 762");
// Fabric Moose Location Marker
var markerFabricM = L.marker(coordsFabricM).addTo(map);
markerFabricM.bindPopup("<b>Fabric Moose</b><br>⭐ ⭐ ⭐ ⭑ ⭑<br>92-120 Cleveland St, Chippendale 2008<br>1.8 km away<br>Tel.: 02 388 029 938");
// So Special Location Marker
var markerSoSpecial = L.marker(coordsSoSpecial).addTo(map);
markerSoSpecial.bindPopup("<b>So Special</b><br>⭐ ⭐ ⭐ ⭐ ⭐<br>111 Elizabeth St, Sydney 2000<br>1.9 km away<br>Tel.: 02 808 429 954");

// applying colour change filter through .css class
markerTemmuni._icon.classList.add("markerHueChange");
markerFabricM._icon.classList.add("markerHueChange");
markerSoSpecial._icon.classList.add("markerHueChange");

// Click event on map example
var clickPopupExample = L.popup();
map.on('click', onMapClick);

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
    // .openOn(map);
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
    // console.log(e.target.id);

    // if (e.target.closest(".classCardTemmuni")) {
    //     console.log(e.target.id + "closest");
    //     var thumbnail = document.getElementById("thumbnailTemmuni");
    //     thumbnail.style.display = "block";
    //     markerTemmuni.openPopup();
    // } else if (e.target.closest(".classCardFabricMoose")) {
    //     console.log(e.target.id + "closest");
    //     var thumbnail = document.getElementById("thumbnailFabricMoose");
    //     thumbnail.style.display = "block";
    //     markerFabricM.openPopup();
    // } else if (e.target.closest(".classCardSoSpecial")) {
    //     console.log(e.target.id + "closest");
    //     var thumbnail = document.getElementById("thumbnailSoSpecial");
    //     thumbnail.style.display = "block";
    //     markerSoSpecial.openPopup();
    // } else {
    //     document.getElementById("thumbnailTemmuni").style.display = "none";
    //     document.getElementById("thumbnailFabricMoose").style.display = "none";
    //     document.getElementById("thumbnailSoSpecial").style.display = "none";
    // }

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