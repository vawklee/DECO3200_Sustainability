// veronica's nav bar function 

function minimiseNavBar() {
    var x = document.getElementById("navBarContainer");
    if (x.className === "navBarContainer") {
        x.className += " responsive";
    } else {
        x.className = "navBarContainer";
    }
    console.log("minimise clicked");
}

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
const cancel1 = document.getElementById("cancel1");
if (cancel1) {
    cancel1.addEventListener("click", () => {
        window.location.href = "secondhand.html";
    });
}

const cancel2 = document.getElementById("cancel2");
if (cancel2) {
    cancel2.addEventListener("click", () => {
        window.location.href = "secondhand.html";
    });
}

const cancel3 = document.getElementById("cancel3");
if (cancel3) {
    cancel3.addEventListener("click", () => {
        window.location.href = "secondhand.html";
    });
}

const cancel4 = document.getElementById("cancel4");
if (cancel4) {
    cancel4.addEventListener("click", () => {
        window.location.href = "secondhand.html";
    });
}

const cancel5 = document.getElementById("cancel5");
if (cancel5) {
    cancel5.addEventListener("click", () => {
        window.location.href = "secondhand.html";
    });
}


// results ?? 
// function showResults(id) {
//     document.getElementById(id).showModal();
// }
// function closeResults() {
//     document.getElementById(id).close();
// }


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

            // Use backticks for template literals
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
    
    // Retrieve the repair result from localStorage
    const storedResult = localStorage.getItem("repairResult");

    if (storedResult && repairResult) {
        // Update the <p> tag with the stored result
        repairResult.textContent = storedResult;
    }
});

// diy page - display the one from the form on the repair assitant page 
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
    localButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "map.html";
        // https://stackoverflow.com/questions/15759020/window-location-href-doesnt-redirect
        return false; 
    });
    } 
});






// https://stackoverflow.com/questions/52430565/how-do-i-style-form-results-posted-to-a-page

// form submission adapted from my advanced web project 
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     formModal.close();

//     addRequestedItem(
//         form.elements.requestItemName.value,
//         form.elements.requestItemDescription.value,
//         form.elements.requestItemColour.value,
//         form.elements.requestItemSize.value
//         form.elements.requestItemDate.value

//     );
//     addGiveAwayItem(
//         form.elements.giveAwayItemName.value,
//         form.elements.giveAwayItemDescription.value,
//         form.elements.giveAwayItemColour.value,
//         form.elements.giveAwayItemSize.value,
//         form.elements.giveAwayItemImage.value
//     );
//     addRequestedMaterial(
//         form.elements.requestMaterialName.value,
//         form.elements.requestMaterialDescription.value,
//         form.elements.requestMaterialColour.value,
//         form.elements.requestMaterialSize.value,
//         form.elements.requestMaterialDate.value

//     );
//     addGiveAwayMaterial(
//         form.elements.giveAwayMaterialName.value,
//         form.elements.giveAwayMaterialDescription.value,
//         form.elements.giveAwayMaterialColour.value,
//         form.elements.giveAwayMaterialSize.value,
//         form.elements.giveAwayMaterialImage.value
//     );
// });


// Store selected options
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

        // updated to be based on submit event listener becasue i'm silly
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



