/*
--------------------------------------------------------------------------
VERONICA'S NAV BAR
--------------------------------------------------------------------------
*/
function minimiseNavBar() {
    var x = document.getElementById("navBarContainer");
    if (x.className === "navBarContainer") {
        x.className += " responsive";
    } else {
        x.className = "navBarContainer";
    }
    console.log("minimise clicked");
}

/*
--------------------------------------------------------------------------
 REPAIR.HTML & UPDATING RESULTS.HTML
--------------------------------------------------------------------------
*/


// repair assistant submission and results 
// https://www.freecodecamp.org/news/how-to-submit-a-form-with-javascript/

document.addEventListener("DOMContentLoaded", () => {
    const repairAssistantForm = document.getElementById("repairAssistantForm");
    const repairResult = document.getElementById("repairResult");

    if (repairAssistantForm) {
        repairAssistantForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let materialType = document.getElementById("materialType").value;
            let clothingType = document.getElementById("clothingType").value;
            let damageType = document.getElementById("damageType").value;

            // Store individual values in localStorage
            localStorage.setItem("materialType", materialType);
            localStorage.setItem("clothingType", clothingType);
            localStorage.setItem("damageType", damageType);

            // use backticks for template literals
            localStorage.setItem("repairResult", `Your results for: ${materialType} ${clothingType} with ${damageType}`);

            console.log("Redirecting to results.html");
            window.location.href = "results.html";
            // https://stackoverflow.com/questions/15759020/window-location-href-doesnt-redirect
            return false; 
        });
    } 
});

// update the page content of results.html 
document.addEventListener("DOMContentLoaded", () => {
    const repairResult = document.getElementById("repairResult");
    
    // retrieve the repair result from localStorage
    const storedResult = localStorage.getItem("repairResult");

    if (storedResult && repairResult) {
        // update with the stored result
        repairResult.textContent = storedResult;
    }
});

// change which instructions are displayed 
document.addEventListener("DOMContentLoaded", () => {
    const diyButton = document.getElementById("diyButton");
    if (diyButton) {
        diyButton.addEventListener("click", function (event) {
            event.preventDefault();

            // Retrieve stored input values from repair form
            let damageType = localStorage.getItem("damageType");
            console.log("damageType = ", damageType)
        
            const repairAssistantResults = document.getElementById("repairAssistantResults")
            const brokenZipperArticle = document.getElementById("brokenZipperArticle");
            const fallenHemArticle = document.getElementById("fallenHemArticle");
            const replacingButtonArticle = document.getElementById("replacingButtonArticle");
            const holeRipTearArticle = document.getElementById("holeRipTearArticle");

            // Display the appropriate article based on damageType
            if (damageType === "Broken Zipper") {
                brokenZipperArticle.style.display = "block";
                repairAssistantResults.style.display = "none"
            } else if (damageType === "Fallen Hem") {
                fallenHemArticle.style.display = "block";
                repairAssistantResults.style.display = "none"
            } else if (damageType === "Replacing Button") {
                replacingButtonArticle.style.display = "block";
                repairAssistantResults.style.display = "none"
            } else if (damageType === "Rip/Tear/Hole") {
                holeRipTearArticle.style.display = "block";
                repairAssistantResults.style.display = "none"
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const localButton = document.getElementById("localButton");
{
    if(localButton){
        localButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "map.html";
            // https://stackoverflow.com/questions/15759020/window-location-href-doesnt-redirect
            return false; 
        });
        } 
    }
});




/*
--------------------------------------------------------------------------
SECONDHAND.HTML 
--------------------------------------------------------------------------
*/


//background for secondhand hub modal 

function showDialog() {
    document.body.classList.add('secondhand-hub-background');
    document.getElementById("selectPage").showModal();
}
function closeDialog() {
    document.body.classList.remove('secondhand-hub-background'); // Remove background when dialog is closed
    document.getElementById("selectPage").close();
}

// opening the secondhand hub modal 

const openSecondhandForm = document.getElementById("openSecondhandForm");
const selectPage = document.getElementById("selectPage");

if (openSecondhandForm) {
    openSecondhandForm.addEventListener("click", () => {
        selectPage.style.display = "block";
        document.body.classList.add('secondhand-hub-background');
        selectPage.showModal();
    });
}

// closing the secondhand hub modal 

const selectCancel = document.getElementById("selectCancel");
if (selectCancel) {
    selectCancel.addEventListener("click", () => {
        window.location.href = "secondhand.html";
    });
}

// cancel buttons - planning to update these to go back a page but that's pending 

const giveAwayItemCancel = document.getElementById("giveAwayItemCancel");
if (giveAwayItemCancel) {
    giveAwayItemCancel.addEventListener("click", () => {
        window.location.href = "secondhand.html";
    });
}

const requestItemCancel = document.getElementById("requestItemCancel");
if (requestItemCancel) {
    requestItemCancel.addEventListener("click", () => {
        window.location.href = "secondhand.html";
    });
}

const giveAwayMaterialCancel = document.getElementById("giveAwayMaterialCancel");
if (giveAwayMaterialCancel) {
    giveAwayMaterialCancel.addEventListener("click", () => {
        window.location.href = "secondhand.html";
    });
}

const requestMaterialCancel = document.getElementById("requestMaterialCancel");
if (requestMaterialCancel) {
    requestMaterialCancel.addEventListener("click", () => {
        window.location.href = "secondhand.html";
    });
}


// store selected options so they can be 

// set up empty values so they can be updated 
let selection = { giveAwayRequest: null, itemMaterial: null };

document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', function() {
        const question = this.getAttribute('data-question');
        const value = this.getAttribute('data-value');
        // Update selection based on the data-question attribute
        if (question === '1') {
            selection.giveAwayRequest = value;
        } else if (question === '2') {
            selection.itemMaterial = value;
        }

        // Highlight the selected button and reset other options for the same question
        document.querySelectorAll(`.option[data-question="${question}"]`).forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');

        // on submit - open the correct form 
        document.getElementById('typeSubmit').addEventListener('click', function() {
            const selectPage = document.getElementById("selectPage");
            let giveAwayItem =  document.getElementById("giveAwayItemForm");
            let requestItem = document.getElementById("requestItemForm");
            let giveAwayMaterial = document.getElementById("giveAwayMaterialForm")
            let requestMaterial = document.getElementById("requestMaterialForm")
            
            if (selection.giveAwayRequest === 'giveAway' && selection.itemMaterial === 'item') {
                console.log("Give Away Item selected");
                selectPage.style.display = "none";
                giveAwayItem.style.display = "block";
                giveAwayItem.showModal();
            } else if (selection.giveAwayRequest === 'giveAway' && selection.itemMaterial === 'material') {
                console.log("Give Away Material selected");
                selectPage.style.display = "none";
                giveAwayMaterial.style.display = "block";
                giveAwayMaterial.showModal();
            } else if (selection.giveAwayRequest === 'request' && selection.itemMaterial === 'item') {
                console.log("Request Item selected");
                selectPage.style.display = "none";
                requestItem.style.display = "block";
                requestItem.showModal();
            } else if (selection.giveAwayRequest === 'request' && selection.itemMaterial === 'material') {
                console.log("Request Material selected");
                selectPage.style.display = "none";
                requestMaterial.style.display = "block";
                requestMaterial.showModal();
            } else {
                console.log("Something went wrong");
            }
        });
    });
});

// combo of my advanced web and help from this 
// https://stackoverflow.com/questions/52430565/how-do-i-style-form-results-posted-to-a-page

document.addEventListener("DOMContentLoaded", () => {
    const giveAwayMaterialForm = document.getElementById("giveAwayMaterialForm");
    const giveAwayMaterialSubmit = document.getElementById("giveAwayMaterialSubmit");

    // https://stackoverflow.com/questions/74212470/how-do-i-make-an-element-disappear-after-a-set-amount-of-time
    


    // check they exist on this page so it doesn't error
    if (giveAwayMaterialForm && giveAwayMaterialSubmit){
        giveAwayMaterialSubmit.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("step1")
            // get the input data
            const giveAwayMaterialName = document.getElementById("giveAwayMaterialName").value;
            const giveAwayMaterialDescription = document.getElementById("giveAwayMaterialDescription").value;
            const giveAwayMaterialColour = document.getElementById("giveAwayMaterialColour").value;
            const giveAwayMaterialSize = document.getElementById("giveAwayMaterialSize").value;
            const giveAwayMaterialImage = document.getElementById("giveAwayMaterialImage").files[0];
            console.log("name", giveAwayMaterialName)

            const newType = document.getElementById("newType");
            const newColour = document.getElementById("newColour");
            const newSize = document.getElementById("newSize");
            const newDescription = document.getElementById("newDescription");
            
            if (newType) newType.innerHTML = "Give Away Material";
            if (newColour) newColour.innerHTML = giveAwayMaterialColour;
            if (newSize) newSize.innerHTML = giveAwayMaterialSize;
            if (newDescription) newDescription.innerHTML = giveAwayMaterialDescription;
            // store the values in localStorage
            localStorage.setItem("giveAwayMaterialName", giveAwayMaterialName);
            localStorage.setItem("giveAwayMaterialDescription", giveAwayMaterialDescription);
            localStorage.setItem("giveAwayMaterialColour", giveAwayMaterialColour);
            localStorage.setItem("giveAwayMaterialSize", giveAwayMaterialSize);

            giveAwayMaterialForm.style.display = "none";
            document.getElementById("newPopUp").style.display = "block"
            // https://stackoverflow.com/questions/74212470/how-do-i-make-an-element-disappear-after-a-set-amount-of-time
            setTimeout(() => {
                newPopUp.style.display = "none";
            }, 5000);

            // if the user uploads an image
            if (giveAwayMaterialImage) {
                // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
                const reader = new FileReader();
                reader.onload = function () {
                    localStorage.setItem("giveAwayMaterialImage", reader.result); // Store the image as a base64 string


                    document.getElementById("newType").innerHTML = "Give Away Material"
                    document.getElementById("newColour").innerHTML = giveAwayMaterialColour
                    document.getElementById("newSize").innerHTML = giveAwayMaterialSize
                    document.getElementById("newDescription").innerHTML = giveAwayMaterialDescription 




                    // window.location.href = "test.html";
                    // from veronica's script file
                    // var profileContainer = document.getElementById("profileContainer");
                    // var materialContainer = document.getElementById("materialContainer");
                    // var resourcesContainer = document.getElementById("resourcesContainer");
                    // var profileSelector = document.getElementById("profileSelector");
                    // var materialSelector = document.getElementById("materialSelector");
                    // var resourceSelector = document.getElementById("resourceSelector");
                    // profileSelector.className = "caption";
                    // materialSelector.className = "caption  pActive";
                    // resourceSelector.className = "caption";
                    // profileContainer.style.display = "none";
                    // materialContainer.style.display = "block";
                    // resourcesContainer.style.display = "none";
                }; 
                reader.readAsDataURL(giveAwayMaterialImage);
            } else {

                const newType = document.getElementById("newType");
                const newColour = document.getElementById("newColour");
                const newSize = document.getElementById("newSize");
                const newDescription = document.getElementById("newDescription");
                
                if (newType) newType.innerHTML = "Give Away Material";
                if (newColour) newColour.innerHTML = giveAwayMaterialColour;
                if (newSize) newSize.innerHTML = giveAwayMaterialSize;
                if (newDescription) newDescription.innerHTML = giveAwayMaterialDescription;
                // If no image is uploaded, just redirect to the new page
                // window.location.href = "test.html";
                // from veronica's script file
                // var profileContainer = document.getElementById("profileContainer");
                // var materialContainer = document.getElementById("materialContainer");
                // var resourcesContainer = document.getElementById("resourcesContainer");
                // var profileSelector = document.getElementById("profileSelector");
                // var materialSelector = document.getElementById("materialSelector");
                // var resourceSelector = document.getElementById("resourceSelector");
                // profileSelector.className = "caption";
                // materialSelector.className = "caption  pActive";
                // resourceSelector.className = "caption";
                // profileContainer.style.display = "none";
                // materialContainer.style.display = "block";
                // resourcesContainer.style.display = "none";

            }
            
            // <p id="newType" class="caption"><span class="dotAvailable"></span></p>
            // <p id="newColour" class="caption"><img src="images/icons/location.svg"></p>
            // <p id="newSize" class="caption"><img src="images/icons/ruler.svg"></p>
            // <p id="newDescription" class="caption"><img src="images/icons/speechBubble.svg"></p>
        }); 
    } 
});

// display the stored data in a card format
// document.addEventListener("DOMContentLoaded", () => {
//     const giveAwayMaterialName = localStorage.getItem("giveAwayMaterialName");
//     const giveAwayMaterialDescription = localStorage.getItem("giveAwayMaterialDescription");
//     const giveAwayMaterialColour = localStorage.getItem("giveAwayMaterialColour");
//     const giveAwayMaterialSize = localStorage.getItem("giveAwayMaterialSize");
//     const giveAwayMaterialImage = localStorage.getItem("giveAwayMaterialImage");
  
//     // Create a card to display the material information
//     const materialCard = document.getElementById("newPopUp");
//     if (materialCard) {
//         // const newCard = document.createElement("div");
//         // newCard.className = "material-card";



//         materialCard.classList.add("materialCardNew")
    
//         // materialCard.innerHTML = `
//         //     <h2>${giveAwayMaterialName}</h2>
//         //     <p>Description: ${giveAwayMaterialDescription}</p>
//         //     <p>Colour: ${giveAwayMaterialColour}</p>
//         //     <p>Size: ${giveAwayMaterialSize}</p>
//         //     ${giveAwayMaterialImage ? `<img src="${giveAwayMaterialImage}" 
//         //         alt="${giveAwayMaterialName}" style="max-width: 200px;">` : ""}`;

//             // materialCard.appendChild(newCard);
//     } else {
//         console.error("The element with ID 'material card was not found")
//     }
// });



// giveAwayItemSubmit
// requestItemSubmit
// giveAwayMaterialSubmit
// requestMaterialSubmit