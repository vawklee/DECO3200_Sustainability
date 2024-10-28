// ---- Handling secondhand.html and profile.html ----
// Requirements: secondhand.html form on submit saves to local storage and displays on profile.html/my materials tab
// the following code is derived from my Advanced Web Media Tracker code (author: Veronica)

// import images from './images/imgs/*.png';

// <section> element container used to display all of the 'cards' of different materials saved through form input
var materialDisplay = document.getElementById("materialDisplay");

// when form is submitted, adds Material to the storage list 
// ---- USED FOR FORM SUBMISSION OPTIONS: GIVE AWAY + MATERIALS ----
document.addEventListener("DOMContentLoaded", () => {
    const giveAwayMaterialForm = document.getElementById("giveAwayMaterialForm");
    const giveAwayMaterialSubmit = document.getElementById("giveAwayMaterialSubmit");
    const newPopUp = document.getElementById("newPopUp");

    if (giveAwayMaterialForm && giveAwayMaterialSubmit && newPopUp) {
        giveAwayMaterialSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            // prevents page from refreshing

            // get the input data
            const giveAwayMaterialName = document.getElementById("giveAwayMaterialName").value;
            const giveAwayMaterialDescription = document.getElementById("giveAwayMaterialDescription").value;
            const giveAwayMaterialColour = document.getElementById("giveAwayMaterialColour").value;
            const giveAwayMaterialSize = document.getElementById("giveAwayMaterialSize").value;
            const giveAwayMaterialImage = document.getElementById("giveAwayMaterialImage").files[0];

            console.log(giveAwayMaterialName,
                giveAwayMaterialDescription,
                giveAwayMaterialColour,
                giveAwayMaterialSize,
                giveAwayMaterialImage);

            addMaterial(
                giveAwayMaterialName,
                giveAwayMaterialDescription,
                giveAwayMaterialColour,
                giveAwayMaterialSize,
                giveAwayMaterialImage
            )

            giveAwayMaterialForm.style.display = "none";
            console.log(`Logging local storage: ${localStorage}`);

            window.location.href = "profileMaterials.html";
            console.log("redirecting to the profile page");

            window.onload = function() {
                var profileContainer = document.getElementById("profileContainer");
                var materialContainer = document.getElementById("materialContainer");
                var resourcesContainer = document.getElementById("resourcesContainer");
                var profileSelector = document.getElementById("profileSelector");
                var materialSelector = document.getElementById("materialSelector");
                var resourceSelector = document.getElementById("resourceSelector");

                profileSelector.className = "caption";
                materialSelector.className = "caption pActive";
                resourceSelector.className = "caption";
                profileContainer.style.display = "none";
                materialContainer.style.display = "block";
                resourcesContainer.style.display = "none";
            }
        })
    }
})

// ---- USED FOR FORM SUBMISSION OPTIONS: GIVE AWAY + ITEM ----

// ---- USED FOR FORM SUBMISSION OPTIONS: REQUEST + MATERIALS ----

// ---- USED FOR FORM SUBMISSION OPTIONS: REQUEST + ITEM ----


// when edit button on My Materials Page is clicked
// used for deleting items from local storage
// var materialDeleteButton = document.getElementById("materialEditButton");

// function to add material to local storage & create date and id for the item added
function addMaterial(name, description, colour, size, image) {
    let material = {
        name,
        description,
        colour,
        size,
        image,
        date: new Date().toDateString(),
        id: Date.now()
    }

    let localMaterials = JSON.parse(localStorage.getItem("materials"));

    if (localMaterials == null) {
        localMaterials = [material];
    } else {
        if (localMaterials.find(element => element.id === material.id)) {
            console.log("Material ID already exists");
        } else {
            localMaterials.push(material);
            console.log(`Material has been added to local storage: ${material}`);
        }
    }

    localStorage.setItem("materials", JSON.stringify(localMaterials));
    displayMaterials();
}

// display the materials saved in local storage on profile.html
function displayMaterials() {
    materialDisplay.innerHTML = "";
    let localMaterials = JSON.parse(localStorage.getItem('materials'));

    // displaying each material added, if they exist
    if (localMaterials !== null) {
        localMaterials.forEach(function(material) {

            // create item in list
            let item = document.createElement('div');
            item.setAttribute('data-id', material.id);
            item.className = "materialCardNew";
            item.style.height = "fit-content";

            // let information = document.createElement('p');
            // information.innerHTML = `<p class="body">${material.name}<br>Description: ${material.description}<br>Colour: ${material.colour}<br>Size: ${material.size}</p>`;
            let thumbnail = document.createElement('div');
            thumbnail.className = "matPicContainer";
            thumbnail.innerHTML = '<img src=\"images/imgs/material_whiteDress.png\" class="matPic">';
            // let thumbnailImg = new Image(320);
            // thumbnailImg.src = images['material_denim'];
            // thumbnailImg.alt = "thumbnail of material";
            // placeholder thumbnail image for now
            // thumbnail.appendChild(thumbnailImg);

            let information = document.createElement('div');
            information.className = "matInfoContainer";

            information.innerHTML = `<p class="matName bold">${material.name}</p>
                                        <div class="matInfo">
                                            <p class="matType caption"><span class="dotAvailable"></span>Available material</p>
                                            <p class="matSize caption"><img src="images/icons/ruler.svg" class="rulerIcon">${material.size}</p>
                                            <p class="matDescription caption"><img src="images/icons/speechBubble.svg" class="speechIcon">${material.description}</p>
                                        </div>`;

            item.appendChild(thumbnail);
            item.appendChild(information);
            materialDisplay.appendChild(item);
        })
    } else {
        console.log("Materials in local storage is empty");
    }
}

displayMaterials();
document.getElementsByClassName("rulerIcon").src = "./images/icons/ruler.svg";
document.getElementsByClassName("speechIcon").src = "./images/icons/speechBubble.svg";

// THE FORBIDDEN BUTTON (profileMaterials.html)
// THIS BUTTON IS USED ONLY TO CLEAR LOCAL STORAGE FOR DEBUGGING PURPOSES
// Not meant to be visible to the user at any given time
var clearLocalStorageButton = document.getElementById("forbiddenButton");
clearLocalStorageButton.onclick = function() {
    localStorage.removeItem('materials');
    location.reload(true);
}