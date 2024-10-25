// -------- SECONDHAND MAP SCRIPTING --------
// Derived from leafletMap.js
var userLocation = [-33.880466, 151.206894];
var attributionText = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var sechandMap = L.map('secondhandMap').setView(userLocation, 15); // references id="secondhandMap"
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: attributionText}).addTo(sechandMap);

var blueHexCode = "#40a9e6";
var redHexCode = "#e34d42";
var blackHexCode = "#4a4a4a";
var sechandMapUserLoc = L.circle(userLocation, {
    color: redHexCode,
    fillColor: redHexCode,
    fillOpacity: 0.35,
    weight: 1,
    radius: 100
}).addTo(sechandMap);
var sechandMapUserRadius = L.circle(userLocation, {
    color: redHexCode,
    fillColor: redHexCode,
    fillOpacity: 1.00,
    radius: 50
}).addTo(sechandMap);

sechandMapUserLoc.bindPopup("You are here");
sechandMapUserRadius.bindPopup("You are here");

sechandMapUserLoc.on("mouseover", onMarkerHover);
sechandMapUserRadius.on("mouseover", onMarkerHover);

// Secondhand Materials Coordinates
coordsDress = [-33.8826528, 151.2024924];
popupDress = "<b>White Dress</b><br>Item available<br>Haymarket 2000<br>0.1 km away<br>Tel.: 04 364 981 662";
coordsDenim = [-33.8806001, 151.2106128];
popupDenim = "<b>Denim Material</b><br>Material requested<br>Surry Hills 2010<br>0.5 km away<br>Tel.: 04 698 239 702";
coordsPants = [-33.8818452, 151.1989386];
popupPants = "<b>Corduroy Pants</b><br>Item available<br>Ultimo 2007<br>1.2 km away<br>Tel.: 04 221 368 806";

// Adding each location marker to the map using the coordinates and popup content
var markerDress = L.marker(coordsDress).addTo(sechandMap);
markerDress.bindPopup(popupDress);

var markerDenim = L.marker(coordsDenim).addTo(sechandMap);
markerDenim.bindPopup(popupDenim);

var markerPants = L.marker(coordsPants).addTo(sechandMap);
markerPants.bindPopup(popupPants);

// applying colour change filter through .css class
markerDress._icon.classList.add("sechandMarkerHueChangeReq");
markerDenim._icon.classList.add("sechandMarkerHueChangeAvail");
markerPants._icon.classList.add("sechandMarkerHueChangeReq");

markerDress.on('click', onMapClick);
markerDenim.on('click', onMapClick);
markerPants.on('click', onMapClick);
markerDress.on('mouseover', onMarkerHover);
markerDenim.on('mouseover', onMarkerHover);
markerPants.on('mouseover', onMarkerHover);

function onMapClick(e) {
    e.target.openPopup();
}

// Shows the preset pop-up when cursor hover's over the marker
function onMarkerHover(e) {
    e.target.openPopup();
}

// Opens popup when user clicks on the available info cards on the right
function onMapCardClick(e) {
    console.log(e.target.className);

    if (e.target.className.includes("classCardTemmuni")) {
        markerTemmuni.openPopup();
    } else if (e.target.className.includes("classCardFabricMoose")) {
        markerFabricM.openPopup();
    } else if (e.target.className.includes("classCardSoSpecial")) {
        markerSoSpecial.openPopup();
    }
}