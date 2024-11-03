// TODO: fix these imports - they fail with 'Browser scripts cannot have imports or exports.'
// import instructionZipper from './images/imgs/instruction_zipper.jpeg';
// import instructionHem from './images/imgs/instruction_hem.jpeg';
// import instructionRip from './images/imgs/instruction_rip.jpg';
// import instructionButton from './images/imgs/instruction_button.jpeg';

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
    const recommendedColour = null;

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

            if (damageType === "Broken Zipper" || damageType === "Rip/Tear/Hole"){
                localStorage.setItem("recommendedType", "Black");
            }
            else if (damageType === "Fallen Hem" || damageType === "Replacing Button"){
                localStorage.setItem("recommendedType", "Purple")
            }
            else {
                localStorage.setItem("recommendedType", null)
            }
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
    var recommendedColour = localStorage.getItem("recommendedType");
    const storedResult = localStorage.getItem("repairResult");
    const recommendedBlack = document.getElementById("recommendedBlack")
    const recommendedPurple = document.getElementById("recommendedPurple")
    const damageType = localStorage.getItem("damageType")
    const instructionImage = document.getElementById("repairImage")

    if(damageType && instructionImage) {
        // set icons for each repair type for additional user feedback 
        if(damageType === "Broken Zipper") {
            instructionImage.src = instructionZipper;
            instructionImage.alt = "Icon of Replacing a Zipper";
        }
        else if (damageType === "Rip/Tear/Hole") {
            instructionImage.src = instructionRip;
            instructionImage.alt = "Icon of Repairing Rip or Tear";
        }
        else if (damageType === "Replacing Button") {
            instructionImage.src = instructionButton;
            instructionImage.alt = "Icon of Replacing a Button";
        }
        else if (damageType === "Fallen Hem") {
            instructionImage.src = instructionHem;
            instructionImage.alt = "Icon of Repairing a Fallen Hem";
        }
    }

    if (storedResult && repairResult) {
        // update with the stored result
        repairResult.textContent = storedResult;
    }
    // change visibility of recommended tag based on damage type
    if (recommendedColour) {
        if (recommendedColour === "Purple" && recommendedPurple) {
            recommendedPurple.style.display = "block"
        }
        else if (recommendedColour === "Black" && recommendedBlack) {
            recommendedBlack.style.display = "block"
        }
    }
});

const backButton = document.getElementById("editRepairButton")

if (backButton){
    backButton.addEventListener("click", () => {
        history.back();
    });
}

const newResult = document.getElementById("newResult")

if (newResult){
    newResult.addEventListener("click", () => {
        window.location.href = "repair.html"
    });
}



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
SECONDHAND.HTML - Opening The Select Form & Handling Which Form Opens Next
--------------------------------------------------------------------------
*/


//background for secondhand hub modal 

function showDialog() {
    document.querySelector('.background-overlay').classList.add('active');
    selectPage = document.getElementById("selectPage");
    selectPage.showModal();
}

function closeDialog() {
    document.querySelector('.background-overlay').classList.remove('active');
    document.getElementById("selectPage").close();
}

// opening the secondhand hub modal 

const openSecondhandForm = document.getElementById("openSecondhandForm");

if (openSecondhandForm) {
    openSecondhandForm.addEventListener("click", () => {
        document.querySelector('.background-overlay').classList.add('active');
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
                selectPage.style.display = "none";
                requestMaterial.style.display = "block";
                requestMaterial.showModal();
            } else {
                console.log("Something went wrong");
            }
        });
    });
});

