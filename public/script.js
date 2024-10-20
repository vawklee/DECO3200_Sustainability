// ---- PROFILE PAGE SCRIPTING ----
var profileSelector = document.getElementById("profileSelector");
var materialSelector = document.getElementById("materialSelector");
var resourceSelector = document.getElementById("resourceSelector");

profileSelector.addEventListener("click", (e) => {this.onSelectorClick(e)});
materialSelector.addEventListener("click", (e) => {this.onSelectorClick(e)});
resourceSelector.addEventListener("click", (e) => {this.onSelectorClick(e)});

function onSelectorClick(e) {
    // console.log("Selector has been clicked");
    // console.log("target id " + e.target.id);
    // console.log("target class " + e.target.className);
    // console.log(profileSelector.className);
    // console.log(materialSelector.className);
    // console.log(resourceSelector.className);

    if (e.target.id === "profileSelector") {
        profileSelector.className = "caption pActive";
        materialSelector.className = "caption";
        resourceSelector.className = "caption";
    } else if (e.target.id === "materialSelector") {
        profileSelector.className = "caption";
        materialSelector.className = "caption  pActive";
        resourceSelector.className = "caption";
    } else if (e.target.id === "resourceSelector") {
        profileSelector.className = "caption";
        materialSelector.className = "caption";
        resourceSelector.className = "caption pActive";
    }
}