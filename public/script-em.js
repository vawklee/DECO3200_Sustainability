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

openSecondhandForm.addEventListener("click", () => {
    selectPage.style.display = "block";
    document.body.classList.add('secondhand-hub-background');
    selectPage.showModal();
});


const cancel1 = document.getElementById("cancel1")

cancel1.addEventListener("click", () => {
    // https://www.semrush.com/blog/javascript-redirect/
    window.location.href = "secondhand.html"
});

const cancel2 = document.getElementById("cancel2")

cancel2.addEventListener("click", () => {
    // https://www.semrush.com/blog/javascript-redirect/
    window.location.href = "secondhand.html"
});

const cancel3 = document.getElementById("cancel3")

cancel3.addEventListener("click", () => {
    // https://www.semrush.com/blog/javascript-redirect/
    window.location.href = "secondhand.html"
});

const cancel4 = document.getElementById("cancel4")

cancel4.addEventListener("click", () => {
    // https://www.semrush.com/blog/javascript-redirect/
    window.location.href = "secondhand.html"
});



// results ?? 
function showResults(id) {
    document.getElementById(id).showModal();
}
function closeResults() {
    document.getElementById(id).close();
}

// repair assistant submission and results 
// https://www.freecodecamp.org/news/how-to-submit-a-form-with-javascript/

// let repairAssistantForm = document.getElementById("repairAssistantForm");

// repairAssistantForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let materialType = document.getElementById("materialType").value;
//     let clothingType = document.getElementById("clothingType").value;
//     let damageType = document.getElementById("damageType").value;

//     // this is a simplified version for the purpose of the prototype 
//     // in the expanded version, all three components would be used to suggest solutions
    
//     if (damageType == "Broken Zipper") {
//         // showResults(brokenZipperResults)
//         console.log("broken zipper")
//     }
//     else if (damageType == "Fallen Hem") {
//         // showResults(fallenHemResults)
//         console.log("fallen hem")
//     }
//     else if (damageType == "Replacing Button") {
//         // showResults(replacingButtonResults)
//         console.log("replacing button")
//     }
//     else if (damageType == "Rip/Tear") {
//         // showResults(ripTearHoleResults)
//         console.log("rip")
//     }

//     // return({material}, {item}, "with", {damage})

// });
















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
        const selectPage = document.getElementById("selectPage");

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

        // Redirect based on selection if both questions are answered
        if (selection.giveAwayRequest && selection.itemMaterial) {
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
        }
    });
});




