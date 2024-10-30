// ---- Handling secondhand.html and profile.html ----
// Requirements: secondhand.html form on submit saves to local storage and displays on profile.html/my materials tab
// the following code is derived from my Advanced Web Media Tracker code (author: Veronica)

// assigning the icon sources through imports from the image folder
import rulerIconSrc from './images/icons/ruler.svg';
import speechBubbleIconSrc from './images/icons/speechBubble.svg';

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

            // console.log(giveAwayMaterialName,
            //     giveAwayMaterialDescription,
            //     giveAwayMaterialColour,
            //     giveAwayMaterialSize,
            //     giveAwayMaterialImage);

            addGiveAway(
                giveAwayMaterialName,
                giveAwayMaterialDescription,
                giveAwayMaterialColour,
                giveAwayMaterialSize,
                giveAwayMaterialImage
            )

            giveAwayMaterialForm.style.display = "none";
            console.log(`Logging local storage: ${localStorage}`);

            console.log("redirecting to the profile page");
            window.location.href = "profileMaterials.html";

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
document.addEventListener("DOMContentLoaded", () => {
    const giveAwayItemForm = document.getElementById("giveAwayItemForm");
    const giveAwayItemSubmit = document.getElementById("giveAwayItemSubmit");
    const newPopUp = document.getElementById("newPopUp");

    if (giveAwayItemForm && giveAwayItemSubmit && newPopUp) {
        giveAwayItemSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            // prevents page from refreshing

            // get the input data
            const giveAwayItemName = document.getElementById("giveAwayItemName").value;
            const giveAwayItemDescription = document.getElementById("giveAwayItemDescription").value;
            const giveAwayItemColour = document.getElementById("giveAwayItemColour").value;
            const giveAwayItemSize = document.getElementById("giveAwayItemSize").value;
            const giveAwayItemImage = document.getElementById("giveAwayItemImage").files[0];

            addGiveAway(
                giveAwayItemName,
                giveAwayItemDescription,
                giveAwayItemColour,
                giveAwayItemSize,
                giveAwayItemImage
            )

            giveAwayItemForm.style.display = "none";
            console.log(`Logging local storage: ${localStorage}`);

            console.log("redirecting to the profile page");
            window.location.href = "profileMaterials.html";

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







// ---- USED FOR FORM SUBMISSION OPTIONS: REQUEST + MATERIALS ----

document.addEventListener("DOMContentLoaded", () => {
    const requestMaterialForm = document.getElementById("requestMaterialForm");
    const requestMaterialSubmit = document.getElementById("requestMaterialSubmit");
    const newPopUp = document.getElementById("newPopUp");

    if (requestMaterialForm && requestMaterialSubmit && newPopUp) {
        requestMaterialSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("submit button clicked")
            // prevents page from refreshing

            // get the input data
            const requestMaterialName = document.getElementById("requestMaterialName").value;
            const requestMaterialDescription = document.getElementById("requestMaterialDescription").value;
            const requestMaterialColour = document.getElementById("requestMaterialColour").value;
            const requestMaterialSize = document.getElementById("requestMaterialSize").value;
            const requestMaterialDate = document.getElementById("requestMaterialDate").value;

            console.log(requestMaterialName,
                requestMaterialDescription,
                requestMaterialColour,
                requestMaterialSize,
                requestMaterialDate);

            addRequest(
                requestMaterialName,
                requestMaterialDescription,
                requestMaterialColour,
                requestMaterialSize,
                requestMaterialDate
            )

            requestMaterialForm.style.display = "none";
            console.log(`Logging local storage: ${localStorage}`);

            console.log("redirecting to the profile page");
            window.location.href = "profileMaterials.html";

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

// ---- USED FOR FORM SUBMISSION OPTIONS: REQUEST + ITEM ----

document.addEventListener("DOMContentLoaded", () => {
    const requestItemForm = document.getElementById("requestItemForm");
    const requestItemSubmit = document.getElementById("requestItemSubmit");
    const newPopUp = document.getElementById("newPopUp");
    console.log("request item form", requestItemForm)
    console.log("request item submit", requestItemSubmit)
    console.log("new pop up", newPopUp)

    if (requestItemForm && requestItemSubmit && newPopUp) {
        requestItemSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("submit button clicked")
            // prevents page from refreshing

            // get the input data
            const requestItemName = document.getElementById("requestItemName").value;
            const requestItemDescription = document.getElementById("requestItemDescription").value;
            const requestItemColour = document.getElementById("requestItemColour").value;
            const requestItemSize = document.getElementById("requestItemSize").value;
            const requestItemDate = document.getElementById("requestItemDate").value;

            addRequest(
                requestItemName,
                requestItemDescription,
                requestItemColour,
                requestItemSize,
                requestItemDate
            )

            requestItemForm.style.display = "none";
            console.log(`Logging local storage: ${localStorage}`);

            console.log("redirecting to the profile page");
            window.location.href = "profileMaterials.html";

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



// when edit button on My Materials Page is clicked
// used for deleting items from local storage
// var materialDeleteButton = document.getElementById("materialEditButton");

// function to add material to local storage & create date and id for the item added






// -------------------------------------------------------------------------
// - 
// - FUNCTIONS FOR REQUESTS 
// - 
// -------------------------------------------------------------------------


function addRequest(name, description, colour, size, dateNeeded) {
    let request = {
        name,
        description,
        colour,
        size,
        dateNeeded,
        date: new Date().toDateString(),
        id: Date.now()
    }
    saveRequestToLocalStorage(request);
}

function saveRequestToLocalStorage(request) {
    let localRequests = JSON.parse(localStorage.getItem("requests"));

    if (localRequests == null) {
        localRequests = [request];
    } else {
        if (localRequests.find(element => element.id === request.id)) {
            console.log("Material ID already exists");
        } else {
            localRequests.push(request);
            console.log(`Request has been added to local storage: ${request}`);
            console.log(request);
        }
    }

    localStorage.setItem("requests", JSON.stringify(localRequests));
    displayRequests();
}


function displayRequests() {
    let localRequests = JSON.parse(localStorage.getItem('requests'));

    // displaying each material added, if they exist
    if (localRequests !== null) {
        localRequests.forEach(function(request) {

            // create item in list
            let item = document.createElement('div');
            item.setAttribute('data-id', request.id);
            item.className = "materialCardNew";
            // item.style.height = "300px";

            // let information = document.createElement('p');
            // information.innerHTML = `<p class="body">${material.name}<br>Description: ${material.description}<br>Colour: ${material.colour}<br>Size: ${material.size}</p>`;
            let thumbnail = document.createElement('div');
            thumbnail.className = "matPicContainer";
            thumbnail.innerHTML = '<img src="" class="matPic">';

            let information = document.createElement('div');
            information.className = "matInfoContainer";

            information.innerHTML = `<p class="matName bold">${request.name}</p>
                                        <div class="matInfo">
                                            <p class="matType caption"><span class="dotRequest"></span>Requested</p>
                                            <p class="matSize caption"><img src="${rulerIconSrc}" class="rulerIcon">${request.size}</p>
                                            <p class="matDescription caption"><img src="${speechBubbleIconSrc}" class="speechIcon">${request.description}</p>
                                        </div>`;

            item.appendChild(thumbnail);
            item.appendChild(information);
            if (materialDisplay) {
                materialDisplay.appendChild(item);
            }
        })
    } else {
        console.log("Requests in local storage is empty");
        // document.getElementById('recentlyAddedContainer').style.display = 'none';
    }
}








// -------------------------------------------------------------------------
// - 
// - FUNCTIONS FOR GIVE AWAYS
// - 
// -------------------------------------------------------------------------

function addGiveAway(name, description, colour, size, image) {
    let material = {
        name,
        description,
        colour,
        size,
        image: null,
        date: new Date().toDateString(),
        id: Date.now()
    }

    // If an image is uploaded, convert it to Base64
    if (image) {
        const reader = new FileReader();
        reader.onloadend = function () {
            material.image = reader.result; // Store the Base64 string
            saveMaterialToLocalStorage(material); // Save the material after image conversion
        };
        reader.readAsDataURL(image); // Convert the image to Base64
    } else {
        // If no image is uploaded, save the material directly
        saveMaterialToLocalStorage(material);
    }
}

function saveMaterialToLocalStorage(material) {
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
    displayGiveAways();
}

// display the materials saved in local storage on profile.html
function displayGiveAways() {
    let localMaterials = JSON.parse(localStorage.getItem('materials'));

    // displaying each material added, if they exist
    if (localMaterials !== null) {
        localMaterials.forEach(function(material) {

            // create item in list
            let item = document.createElement('div');
            item.setAttribute('data-id', material.id);
            item.className = "materialCardNew";
            // item.style.height = "300px";

            // let information = document.createElement('p');
            // information.innerHTML = `<p class="body">${material.name}<br>Description: ${material.description}<br>Colour: ${material.colour}<br>Size: ${material.size}</p>`;
            let thumbnail = document.createElement('div');
            thumbnail.className = "matPicContainer";
            // thumbnail.innerHTML = '<img src="${material.image}" class="matPic">';
                // Check if the image is a valid Base64 string
                if (material.image) {
                    console.log("Displaying image: ", material.image); // Debugging line
                    thumbnail.innerHTML = `<img src="${material.image}" class="matPic">`; // Use Base64 image
                } else {
                    thumbnail.innerHTML = '<img src="images/imgs/material_whiteDress.png" class="matPic">'; // Default image
                }
            // let thumbnailImg = new Image(320);
            // thumbnailImg.src = images['material_denim'];
            // thumbnailImg.alt = "thumbnail of material";
            // placeholder thumbnail image for now
            // thumbnail.appendChild(thumbnailImg);

            let information = document.createElement('div');
            information.className = "matInfoContainer";

            information.innerHTML = `<p class="matName bold">${material.name}</p>
                                        <div class="matInfo">
                                            <p class="matType caption"><span class="dotAvailable"></span>Available</p>
                                            <p class="matSize caption"><img src="${rulerIconSrc}" class="rulerIcon">${material.size}</p>
                                            <p class="matDescription caption"><img src="${speechBubbleIconSrc}" class="speechIcon">${material.description}</p>
                                        </div>`;

            item.appendChild(thumbnail);
            item.appendChild(information);
            materialDisplay.appendChild(item);
        })
    } else {
        console.log("Materials in local storage is empty");
        // document.getElementById('recentlyAddedContainer').style.display = 'none';
    }
}

displayGiveAways();
displayRequests();

// THE FORBIDDEN BUTTON (profileMaterials.html)
// THIS BUTTON IS USED ONLY TO CLEAR LOCAL STORAGE FOR DEBUGGING PURPOSES
// Not meant to be visible to the user at any given time
var clearLocalStorageButton = document.getElementById("forbiddenButton");
if (clearLocalStorageButton) {
    clearLocalStorageButton.onclick = function() { 
        localStorage.removeItem('materials');
        location.reload(true);
    }
}
// CHECKING LOCAL STORAGE: IF EMPTY GET RID OF PROFILEMATERIALS PAGE CONTAINER SAYING RECENTLY ADDED
let localMaterials = JSON.parse(localStorage.getItem('materials'));
let localRequests = JSON.parse(localStorage.getItem('requests'));
var recentlyAddedContainer = document.getElementById('recentlyAddedContainer')
if (recentlyAddedContainer) {
    if (localMaterials == null && localRequests == null) {
        console.log("all local storage is empty");
        recentlyAddedContainer.style.display = 'none';
    } else {
        recentlyAddedContainer.style.display = 'block';
    }
}