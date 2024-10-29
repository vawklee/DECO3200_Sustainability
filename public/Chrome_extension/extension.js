import backgroundImage1 from './images/background_image-1.png'
import backgroundImage2 from './images/background_image-2.png'
import sustainabilityIconNeutral from './images/icon_neutral.png'

// const targetPages = [
//     "https://www.zara.com/au/en/trousers-with-side-taping-p05030505.html?v1=380022605",
//     "https://www.zara.com/au/en/zw-collection-leather-trousers-with-seam-detail-p05479042.html?v1=379874391",
//     "https://www.zara.com/au/en/zw-collection-rhinestone-trousers-p04877259.html?v1=406889827", 
//     "https://www.zara.com/au/en/zw-collection-linen-trousers-p02731906.html?v1=364840885",
//     "https://www.zara.com/au/en/zw-collection-embroidered-trousers-p04786081.html?v1=364190990"
//     // Add your predetermined product URLs
// ];
// Handle panel toggle with both the image and button click
document.querySelector(".side-panel-toggle").addEventListener("click", function() {
    document.querySelector(".toggle-container").classList.toggle("panel-open");
  });
  // Function to change the background image dynamically
// function setBackgroundImage(imageUrl) {
//   document.body.style.backgroundImage = `url('${imageUrl}')`;
//   document.body.style.backgroundSize = 'cover'; 
//   // Ensures the image covers the whole page
//   document.body.style.backgroundRepeat = 'no-repeat'; 
//   // Prevents the image from repeating
//   document.body.style.backgroundPosition = 'center'; 
//   // Centers the image
// }

// on immediate loading of extension.html
function setBackgroundImageImportOne() {
  document.body.style.backgroundImage = `url(${backgroundImage1})`;
}

function setBackgroundImageImportTwo() {
  document.body.style.backgroundImage = `url(${backgroundImage2})`;
}

// setBackgroundImage('images/background_image-1.png'); 
window.onload = setBackgroundImageImportOne();
// image path to starting product
// Function to close the modal
// Function to close the modal by removing the 'panel-open' class
function closeModal() {
  const toggleContainer = document.querySelector('.toggle-container');
  if (toggleContainer && toggleContainer.classList.contains('panel-open')) {
    toggleContainer.classList.remove('panel-open');
  }
}
function changeSustainabilityIcon() {
  // const sustainabilityIcon = document.getElementById('sustainabilityButton');
  // if (sustainabilityIcon.src.includes('images/sustainability_icon.png')) {
  //   // sustainabilityIcon.src = 'images/icon_neutral.png'; 
  //   // Change to the happy face image path
  // }
  // let sustainabilityIcon = document.getElementById('neutralContainer');
  // let sustainabilityIconImage = new Image(320);
  // sustainabilityIconImage.src = sustainabilityIconNeutral;
  // sustainabilityIcon.appendChild(sustainabilityIconImage);
  let sustainabilityIcon = document.getElementById('sustainabilityButton');
  sustainabilityIcon.src = sustainabilityIconNeutral;
}
document.getElementById('buyNowButton').addEventListener('click', function(){
  //change the image when button is clicked
  // setBackgroundImage('images/background_image-2.png');
  console.log("buy button clicked");
  setBackgroundImageImportTwo();
  closeModal(); // Close the modal
  changeSustainabilityIcon(); // Call the function to change the image
});
//   const bannerData = {
//     "https://www.zara.com/au/en/zw-collection-rhinestone-trousers-p04877259.html?v1=406889827/*": {
//       imageUrl: "images/product_1.webp", // Relative path to the local image
//       title: "Low sustainability rating",
//       description: "Cotton uses more water than most.",
//       bannerColor: "#ffeae9", // Light red background
//       titleColor: "#d00000",  // Red for the title
//       iconColor: "#d00000"    // Red for the icon (arrow)
//     }
// }   
// function updateBanner() {
//     const currentUrl = window.location.href;
  
//     // Check if the current URL matches one of the product pages
//     if (bannerData[currentUrl]) {
//       const product = bannerData[currentUrl];
  
//       // Update the banner content with the product details
//       document.getElementById('bannerImage').src = product.imageUrl; // Set the local image path
//       document.getElementById('bannerTitle').innerText = product.title;
//       document.getElementById('bannerDescription').innerText = product.description;
  
//       // Dynamically set banner styles (e.g., color based on sustainability rating)
//       document.getElementById('sustainabilityBanner').style.backgroundColor = product.bannerColor;
//       document.getElementById('bannerTitle').style.color = product.titleColor;
//       document.getElementById('bannerArrow').style.color = product.iconColor;
//     } else {
//       console.error("No banner data found for this URL.");
//     }
//   }
  
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