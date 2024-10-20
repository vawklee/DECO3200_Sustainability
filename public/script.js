// ---- PROFILE PAGE SCRIPTING ----
var profileSelector = document.getElementById("profileSelector");
var materialSelector = document.getElementById("materialSelector");
var resourceSelector = document.getElementById("resourceSelector");

profileSelector.addEventListener("click", (e) => {this.onProfileSelectorClick(e)});
materialSelector.addEventListener("click", (e) => {this.onProfileSelectorClick(e)});
resourceSelector.addEventListener("click", (e) => {this.onProfileSelectorClick(e)});

// Changes the profile page content based on the side bar tab clicked
function onProfileSelectorClick(e) {
    // console.log("Selector has been clicked");
    // console.log("target id " + e.target.id);
    // console.log("target class " + e.target.className);
    // console.log(profileSelector.className);
    // console.log(materialSelector.className);
    // console.log(resourceSelector.className);

    var profileContainer = document.getElementById("profileContainer");
    var materialContainer = document.getElementById("materialContainer");
    var resourcesContainer = document.getElementById("resourcesContainer");

    // When MY PROFILE is selected
    if (e.target.id === "profileSelector") {
        profileSelector.className = "caption pActive";
        materialSelector.className = "caption";
        resourceSelector.className = "caption";

        profileContainer.style.display = "block";
        materialContainer.style.display = "none";
        resourcesContainer.style.display = "none";
    } 
    // when MY CLOTHING & MATERIALS is selected
    else if (e.target.id === "materialSelector") {
        profileSelector.className = "caption";
        materialSelector.className = "caption  pActive";
        resourceSelector.className = "caption";

        profileContainer.style.display = "none";
        materialContainer.style.display = "block";
        resourcesContainer.style.display = "none";
    } 
    // when MY DIY RESOURCES is selected
    else if (e.target.id === "resourceSelector") {
        profileSelector.className = "caption";
        materialSelector.className = "caption";
        resourceSelector.className = "caption pActive";

        profileContainer.style.display = "none";
        materialContainer.style.display = "none";
        resourcesContainer.style.display = "block";
    }
}