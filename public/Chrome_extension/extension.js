// Import all images at the top
import backgroundImage1 from './images/background_image-1.png';
import backgroundImage2 from './images/background_image-2.png';
import backgroundImage3 from './images/background_image-3.png';
import sustainabilityIconNeutral from './images/icon_neutral.png';
import bannerImage1 from './images/product_1_card.webp';
import bannerImage2 from './images/product_2.jpg';
import bannerImage3 from './images/product_3.jpg';

// Immediately set the initial background image and content
setBackgroundImage(backgroundImage1);
updateBannerImage(bannerImage1);
updateContentForDefault();
//setDefaultDropdownContent(); // Load default dropdown content
// Utility Functions
function setBackgroundImage(image) {
  document.body.style.backgroundImage = `url(${image})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
}
function updateBannerImage(image) {
  document.getElementById('bannerImage').src = image;
}
// Handle panel toggle with both the image and button click
document.querySelector(".side-panel-toggle").addEventListener("click", function() {
    document.querySelector(".toggle-container").classList.toggle("panel-open");
    console.log("Side panel toggled.");
  });
  //handling the Modal visibilities
  function closeModal() {
    const toggleContainer = document.querySelector('.toggle-container');
    if (toggleContainer && toggleContainer.classList.contains('panel-open')) {
      toggleContainer.classList.remove('panel-open');
    }
  }
  // Change sustainability icon
  function changeSustainabilityIcon() {
    const sustainabilityIcon = document.getElementById('sustainabilityButton');
    if (sustainabilityIcon) {
      sustainabilityIcon.src = sustainabilityIconNeutral;
    }
  }
// Function to update the modal header
function updateModalHeader(newHeaderText) {
  const modalHeader = document.getElementById('modalHeader');
  if (modalHeader) {
    modalHeader.innerText = newHeaderText;
  }
}

// Function to set sustainable alternative 1 dropdown content
function setSustainableAlternativeDropdownContent() {
  document.querySelector('.panel-header h2').innerText = "Linen Fabric:";
  document.querySelector('.panel-header p').innerText = "Sustainable Alternative";
  
  const details = document.querySelector('.sustainability-details');
  details.innerHTML = `
    <div class="detail-item">
      <span class="material-icons water">waves</span>
      <p><strong>Water Usage:</strong></p>
    </div>
    <p>Linen requires significantly less water than cotton, making it a more sustainable choice.</p>
    <hr>
    <div class="detail-item">
      <span class="material-icons carbon-icon">cloud</span>
      <p><strong>Carbon Footprint:</strong></p>
    </div>
    <p>Linen has a lower carbon footprint due to fewer pesticide and fertilizer requirements.</p>
  `;
}
  // Function to update default content (initial view)
function updateContentForDefault() {
  // Reset banner content
  document.getElementById('bannerTitle').innerText = "Low sustainability rating";
  document.getElementById('bannerDescription').innerText = "Cotton uses more water than most.";
  document.getElementById('sustainabilityBanner').style.backgroundColor = "#ffeae9";

  // Show all product cards and pagination
  document.querySelectorAll('.card').forEach(card => card.style.display = 'block');
  document.querySelector('.pagination-dots').style.display = 'flex';
}
//Product Card 1
function updateContentForAlternative1() {
  document.getElementById('bannerTitle').innerText = "Sustainable Alternative";
  document.getElementById('bannerDescription').innerText = "Consider secondhand items to reduce waste.";
  document.getElementById('sustainabilityBanner').style.backgroundColor = "#e8f5e9";
  updateBannerImage(bannerImage2);

  // Show only the secondhand product card
  document.querySelectorAll('.card').forEach((card, index) => {
    card.style.display = index === 2 ? 'block' : 'none';
  });

  // Hide pagination and center the card
  document.querySelector('.pagination-dots').style.display = 'none';
  document.querySelector('.scrolling-wrapper').classList.add('centered-card');
}
//Product Card 2
function updateContentForAlternative2() {
  document.getElementById('bannerTitle').innerText = "Sustainable Alternative";
  document.getElementById('bannerDescription').innerText = "Consider secondhand items to reduce waste.";
  document.getElementById('sustainabilityBanner').style.backgroundColor = "#e8f5e9";
  updateBannerImage(bannerImage3);

  // Show only the secondhand product card
  document.querySelectorAll('.card').forEach((card, index) => {
    card.style.display = index === 2 ? 'block' : 'none';
  });

  // Hide pagination and center the card
  document.querySelector('.pagination-dots').style.display = 'none';
  document.querySelector('.scrolling-wrapper').classList.add('centered-card');
}
// Event Listeners for "Buy Now" Buttons
document.getElementById('buyNowButton1').addEventListener('click', function() {
  setBackgroundImage(backgroundImage2);
  setSustainableAlternativeDropdownContent();
  updateModalHeader("Linen Trousers");
  updateContentForAlternative1();
  closeModal();
  changeSustainabilityIcon();
});

document.getElementById('buyNowButton2').addEventListener('click', function() {
  setBackgroundImage(backgroundImage3);
  setSustainableAlternativeDropdownContent();
  updateModalHeader("Linen Trousers");
  updateContentForAlternative2();
  closeModal();
  changeSustainabilityIcon();
});
  // function setBannerImage(imageKey) {
  //   document.getElementById('bannerImage').src = bannerImages[imageKey];
  // }
  
// // on immediate loading of extension.html
// function setBackgroundImageImportOne() {
//   document.body.style.backgroundImage = `url(${backgroundImage1})`;
// }

// function setBackgroundImageImportTwo() {
//   document.body.style.backgroundImage = `url(${backgroundImage2})`;
// }
// function setBackgroundImageImportThree() {
//   document.body.style.backgroundImage = `url(${backgroundImage3})`;
// }

// setBackgroundImage('images/background_image-1.png'); 
//window.onload = setBackgroundImageImportOne();
// image path to starting product
// Function to close the modal
// Function to close the modal by removing the 'panel-open' class
// function closeModal() {
//   const toggleContainer = document.querySelector('.toggle-container');
//   if (toggleContainer && toggleContainer.classList.contains('panel-open')) {
//     toggleContainer.classList.remove('panel-open');
//   }
// }
// function changeSustainabilityIcon() {
//   const sustainabilityIcon = document.getElementById('sustainabilityButton');
//   if (sustainabilityIcon) {
//     sustainabilityIcon.src = sustainabilityIconNeutral;
//   }
// }
// // Function to update default content (initial view)
// function updateContentForDefault() {
//   // Reset banner content
//   document.getElementById('bannerTitle').innerText = "Low sustainability rating";
//   document.getElementById('bannerDescription').innerText = "Cotton uses more water than most.";
//   document.getElementById('sustainabilityBanner').style.backgroundColor = "#ffeae9";

//   // Show all product cards and pagination
//   document.querySelectorAll('.card').forEach(card => card.style.display = 'block');
//   document.querySelector('.pagination-dots').style.display = 'flex';
// }
// document.getElementById('buyNowButton1').addEventListener('click', function(){
//   //change the image when button is clicked
//   // setBackgroundImage('images/background_image-2.png');
//   console.log("buy button clicked");
//   setBackgroundImageImportTwo();
//   updateContentForSecondhand();
//   closeModal(); // Close the modal
//   changeSustainabilityIcon(); // Call the function to change the image
// });
// document.getElementById('buyNowButton2').addEventListener('click', function(){
//   //change the image when button is clicked
//   // setBackgroundImage('images/background_image-2.png');
//   console.log("buy button clicked");
//   setBackgroundImageImportThree();
//   closeModal(); // Close the modal
//   changeSustainabilityIcon(); // Call the function to change the image
// });
// Set the initial background image for bannerImage on window load
// window.onload = function() {
//   document.getElementById('bannerImage').src = bannerImage1;
// };
//   // Function to update content for the secondhand alternative view
// function updateContentForSecondhand() {
//   // Update the banner content for secondhand
//   document.getElementById('bannerTitle').innerText = "Sustainable Alternative";
//   document.getElementById('bannerDescription').innerText = "Consider secondhand items to reduce waste.";
//   document.getElementById('sustainabilityBanner').style.backgroundColor = "#e8f5e9";
// // Update the banner image
// const bannerImage = document.getElementById('bannerImage');
// bannerImage.src = 'images/product_2.jpg'; // Replace with the path to the new image
//   // Show only the secondhand product card
//   document.querySelectorAll('.card').forEach((card, index) => {
//     card.style.display = index === 2 ? 'block' : 'none'; // Show only the third card
//   });

//   // Hide pagination indicators
//   document.querySelector('.pagination-dots').style.display = 'none';
//   // Add the centering class to the container
//   document.querySelector('.scrolling-wrapper').classList.add('centered-card');
// }
//   // Call the function to update the banner on page load
//   updateBanner();
 document.getElementById("sustainabilityButton").addEventListener("click", function() {
    document.querySelector(".toggle-container").classList.toggle("panel-open");
   });
  
   const scrollingWrapper = document.querySelector('.scrolling-wrapper');
   const dots = document.querySelectorAll('.dot');
   
   // Add event listener to the scroll event
   scrollingWrapper.addEventListener('scroll', () => {
     // Calculate the index of the card in the viewport
     const cardWidth = scrollingWrapper.querySelector('.card').offsetWidth + 20; // Add margin/padding
     const scrollPosition = scrollingWrapper.scrollLeft;
     const cardIndex = Math.round(scrollPosition / cardWidth);
   
     // Update the active dot
     dots.forEach((dot, index) => {
       dot.classList.toggle('active', index === cardIndex);
     });
   });
   document.querySelector('#sustainabilityBanner').addEventListener('click', function() {
    const panel = document.querySelector('.panel-container');
    const chevronIcon =document.querySelector('.chevron-icon');
    panel.classList.toggle('expanded');
    chevronIcon.classList.toggle('rotate')
  });

  
function redirectToSecondhand() {
    console.log("Redirecting to secondhand.html");
    window.location.href = './secondhand.html'; // Redirects to the specified page
}

let redirectButton = document.getElementById('sechandRedirect');
redirectButton.addEventListener('click', redirectToSecondhand);