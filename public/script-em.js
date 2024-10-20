function minimiseNavBar() {
    var x = document.getElementById("navBarContainer");
    if (x.className === "navBarContainer") {
        x.className += " responsive";
    } else {
        x.className = "navBarContainer";
    }
    console.log("minimise clicked");
}

// // https://www.w3schools.com/howto/howto_js_form_steps.asp?

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}


function nextPrev(n) {
    // Get all the tab elements
    var tabs = document.getElementsByClassName("tab");
    // Find the current tab
    var currentTab = document.querySelector(".tab.active");
    var currentTabIndex = Array.from(tabs).indexOf(currentTab);

    // If navigating forward, check user choices and conditionally skip to the appropriate tab
    if (n === 1) {
        // Get user choices
        var itemType = document.querySelector('input[name="itemType"]:checked');
        var itemCategory = document.querySelector('input[name="itemCategory"]:checked');

        if (currentTabIndex === 0) {
            // If the first tab, determine the next tab based on selections
            if (itemType && itemCategory) {
                // Custom logic: for example, if "Request" and "Clothing", go to the second tab
                if (itemType.value === "Request" && itemCategory.value === "Clothing") {
                    showTab(1); // Go to "Birthday" tab
                } else if (itemType.value === "Giveaway" && itemCategory.value === "Material") {
                    showTab(2); // Skip to "Login Info" tab
                } else {
                    showTab(1); // Default behavior
                }
            } else {
                alert("Please select both Giveaway or Request and Clothing or Material.");
                return false;
            }
        } else {
            // Move to the next tab if already past the first tab
            showTab(currentTabIndex + n);
        }
    } else {
        // If navigating backward, move to the previous tab
        showTab(currentTabIndex + n);
    }
}

function showTab(n) {
    // Hide all the tabs
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    // Show the specified tab
    tabs[n].classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
    // Show the first tab
    showTab(0);
});


function showDialog() {
    document.body.classList.add('secondhand-hub-background'); // Add background when dialog is opened
    document.getElementById("secondhandHubDialog").showModal();
}
function closeDialog() {
    document.body.classList.remove('secondhand-hub-background'); // Remove background when dialog is closed
    document.getElementById("secondhandHubDialog").close();
}


// form submission adapted from my advanced web project 
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     formModal.close();
//     //getting correct value for the radio button - rating 
//     let rating = document.querySelector('input[name="bookRating"]:checked').value

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


// chattie helping with form determining 
function determineForm() {
    const itemType = document.querySelector('input[name="itemType"]:checked');
    const itemCategory = document.querySelector('input[name="itemCategory"]:checked');
    
    // Hide all form sections initially
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.style.display = 'none');
    
    // Show the appropriate form based on selections
    if (itemType && itemCategory) {
        if (itemType.value === 'Give Away' && itemCategory.value === 'Clothing') {
            document.getElementById('giveAwayItemForm').style.display = 'block';
        } else if (itemType.value === 'Give Away' && itemCategory.value === 'Material') {
            document.getElementById('giveAwayMaterialForm').style.display = 'block';
        } else if (itemType.value === 'Request' && itemCategory.value === 'Clothing') {
            document.getElementById('requestItemForm').style.display = 'block';
        } else if (itemType.value === 'Request' && itemCategory.value === 'Material') {
            document.getElementById('requestMaterialForm').style.display = 'block';
        }
    } else {
        // If selections are incomplete, show the first tab
        document.getElementById('selectPage').style.display = 'block';
    }
}

// Attach event listeners to the radio buttons
document.querySelectorAll('input[name="itemType"], input[name="itemCategory"]').forEach(input => {
    input.addEventListener('change', determineForm);
});

// Initial form setup
determineForm();

// "Next" button functionality
function nextPrev() {
    determineForm(); // Show the appropriate form when "Next" is clicked
}