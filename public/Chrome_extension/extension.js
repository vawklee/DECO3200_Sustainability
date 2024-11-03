// Import all images at the top
import backgroundImage1 from './images/background_image-1.png';
import backgroundImage2 from './images/background_image-2.png';
import backgroundImage3 from './images/background_image-3.png';
import backgroundImage4 from './images/background_image-4.png';
import backgroundImage5 from './images/background_image-5.png';
import backgroundImage6 from './images/background_image-6.png';
import sustainabilityIconNeutral from './images/icon_neutral.png';
import productImage1 from './images/product_1_card.webp';
import productImage2 from './images/product_2.jpg';
import productImage3 from './images/product_3.jpg';
import productImage4 from './images/product_4.jpeg';
import productImage5 from './images/product_5.jpeg';
import productImage6 from './images/product_6.jpeg';
import hmLogo from './images/hm-logo.png';
import zaraLogo from './images/zara-logo.png';

const useCases = {
  zaraTrousers: {
    backgroundImage: backgroundImage1,
    modalHeader: "Cotton Trousers",
    banner: {
      title: "Low sustainability rating",
      description: "Cotton uses more water than most.",
      color: "#ffeae9",
      image: productImage1
    },
    dropdownContent:{
      fabric:"Denim Fabric:",
      reason: "Current Fabric",
      details: [
        {
          icon: "waves",
          title: "Water Usage",
          description: "Denim is a highly water-intensive crop, needing thousands of litres of water to produce a single item."
        },
        {
          icon: "cloud",
          title: "Carbon Footprint",
          description: "Cotton farming has a larger carbon footprint due to intensive farming practices, synthetic fertilizers, and water usage."
        }
      ]
    },
    productCards: [
      {
        title: "LINEN TROUSERS",
        price: "$105.00",
        size: "M",
        material: "100% Linen",
        description: "Black",
        image: productImage2,
        label: "Alternative",
        logo: zaraLogo,
        background: backgroundImage2
      },
      //Product card 2 
      {
        title: "LINEN TROUSERS",
        price: "$119.00",
        size: "M",
        material: "100% Linen",
        description: "Black",
        image: productImage3,
        label: "Alternative",
        logo: zaraLogo,
        background: backgroundImage3
      },
      //PRODUCT 3
      {
        title: "SLEEK PANTS",
        price: "$39.90",
        size: "10",
        material: "cotton,Elastane",
        description: "Lightly used",
        image: productImage2,
        label: " Secondhand Alternative",
        // logo: "./images/zara-logo.png"
      },
    ],
    secondhandRedirectUrl: "./secondhand.html",
    finalIcon: sustainabilityIconNeutral,
  },

  hmGreenSkirt: {
    backgroundImage: backgroundImage4,
    modalHeader: "Green Skirt",
    banner: {
      title: "Low sustainability rating",
      description: "Viscose is water and carbon-intensive.",
      color: "#ffcccb",
      image: productImage4
    },
    dropdownContent: {
      fabric: "Viscose Fabric:",
      reason: "Current Fabric",
      details: [
        {
          icon: "waves",
          title: "Water Usage",
          description: "Viscose production uses a large amount of water, which affects its sustainability rating."
        },
        {
          icon: "cloud",
          title: "Carbon Footprint",
          description: "The carbon footprint of viscose production is high due to energy-intensive processes."
        }
      ]
    },
    productCards: [
      {
        title: "BAMBOO SKIRT",
        price: "$89.99",
        size: "S",
        material: "100% Bamboo",
        description: "Light Green",
        image: productImage5,
        label: "Alternative",
        logo: hmLogo,
        background: backgroundImage5
      },
      {
        title: "BAMBOO SKIRT",
        price: "$89.99",
        size: "S",
        material: "100% Bamboo",
        description: "Light Green",
        image: productImage6,
        label: "Alternative",
        logo: hmLogo,
        background: backgroundImage6
      },
      {
        title: "BAMBOO SKIRT",
        price: "$89.99",
        size: "S",
        material: "100% Bamboo",
        description: "Light Green",
        image: productImage4,
        label: "Secondhand Alternative",
        //logo: hmLogo
      },
    ],
    secondhandRedirectUrl: "./secondhand_hub.html",
    finalIcon: './images/icon_neutral.png',
  }
};
// Randomly select a use case
function getRandomUseCase() {
  const useCaseKeys = Object.keys(useCases);
  const randomKey = useCaseKeys[Math.floor(Math.random() * useCaseKeys.length)];
  return randomKey;
}
// Apply the randomly selected use case on extension load
// window.onload = function() {
//   const selectedUseCase = getRandomUseCase();
//   applyUseCase(selectedUseCase);
// };
// Apply the randomly selected use case on extension load
document.addEventListener("DOMContentLoaded", () => {
  const selectedUseCase = getRandomUseCase();
  applyUseCase(selectedUseCase);
});

function applyUseCase(useCaseKey) {
  const config = useCases[useCaseKey];
    // Set background image
    setBackgroundImage(config.backgroundImage);

    // Update modal header
    updateModalHeader(config.modalHeader);
  
    // Update sustainability banner
    updateSustainabilityBanner(config.banner.title, config.banner.description, config.banner.image, config.banner.color);
  
    // Update dropdown content
    updateDropdownContent(config.dropdownContent);
  
    // Update product cards
    updateProductCards(config.productCards);
  // // Event listeners for "Buy Now" buttons with debug statements
  // const buyNowButton1 = document.getElementById('buyNowButton1');
  // const buyNowButton2 = document.getElementById('buyNowButton2');
  //   // Event listeners for "Buy Now" buttons
  //   if (buyNowButton1) {
  //     buyNowButton1.onclick = () => {
  //       console.log("Buy Now Button 1 clicked");
  //       setBackgroundImage(config.productCards[0].background || config.backgroundImage);
  //       updateModalHeader(config.productCards[0].title);
  //       updateContentForAlternative(config.productCards[0]);
  //       closeModal();
  //       changeSustainabilityIcon(config.finalIcon);
  //     };
  //   } else {
  //     console.warn("buyNowButton1 not found");
  //   }
  
  //   if (buyNowButton2) {
  //     buyNowButton2.onclick = () => {
  //       console.log("Buy Now Button 2 clicked");
  //       setBackgroundImage(config.productCards[1].background || config.backgroundImage);
  //       updateModalHeader(config.productCards[1].title);
  //       updateContentForAlternative(config.productCards[1]);
  //       closeModal();
  //       changeSustainabilityIcon(config.finalIcon);
  //     };
  //   } else {
  //     console.warn("buyNowButton2 not found");
  //   }
  }
// Update content based on selected product card
function updateContentForAlternative(card) {
  updateSustainabilityBanner("Sustainable Alternative", "Consider secondhand items to reduce waste.", card.image, "#e8f5e9");

  // Show only the secondhand product card
  document.querySelectorAll('.card').forEach((el, index) => {
    el.style.display = index === 2 ? 'block' : 'none';
  });

  // Hide pagination and center the card
  document.querySelector('.pagination-dots').style.display = 'none';
  document.querySelector('.scrolling-wrapper').classList.add('centered-card');
}

// // Immediately set the initial background image and content
// setBackgroundImage(backgroundImage1);
// updateBannerImage(productImage1);
// updateContentForDefault();
//setDefaultDropdownContent(); // Load default dropdown content
// Utility Functions
function setBackgroundImage(image) {
  document.body.style.backgroundImage = `url(${image})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
}
  // Function to update default content (initial view)
  function updateSustainabilityBanner(title, description, image, color) {
    document.getElementById('bannerTitle').innerText = title;
    document.getElementById('bannerDescription').innerText = description;
    document.getElementById('sustainabilityBanner').style.backgroundColor = color;
    document.getElementById('bannerImage').src = image;
  }
  function updateModalHeader(headerText) {
    document.getElementById('modalHeader').innerText = headerText;
  }
  function updateDropdownContent(content) {
    document.querySelector('.panel-header h2').innerText = content.fabric;
    document.querySelector('.panel-header p').innerText = content.reason;
    const details = document.querySelector('.sustainability-details');
    details.innerHTML = content.details.map(detail => `
      <div class="detail-item">
        <span class="material-icons">${detail.icon}</span>
        <p><strong>${detail.title}:</strong></p>
      </div>
      <p>${detail.description}</p>
      <hr>
    `).join('');
  }
  function updateProductCards(cards) {
    const cardElements = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      if (cardElements[index]) {
        cardElements[index].querySelector('.product-title').innerText = card.title;
        cardElements[index].querySelector('.product-price').innerText = card.price;
        cardElements[index].querySelector('.product-details h4:nth-child(1)').innerHTML = `<strong>Size:</strong> ${card.size}`;
        cardElements[index].querySelector('.product-details h4:nth-child(2)').innerHTML = `<strong>Material:</strong> ${card.material}`;
        cardElements[index].querySelector('.product-details h4:nth-child(3)').innerHTML = `<strong>Description:</strong> ${card.description}`;
        cardElements[index].querySelector('.card-image-container img').src = card.image;
        cardElements[index].querySelector('.label img').src = card.logo;
        cardElements[index].querySelector('.label span').innerText = card.label;
        cardElements[index].style.display = 'block';

          // Add event listener for Buy Now button within each card
      const buyNowButton = cardElements[index].querySelector('.card-footer-btn');
      if (buyNowButton) {
        buyNowButton.onclick = () => {
          console.log(`Buy Now Button ${index + 1} clicked`);
          setBackgroundImage(card.background || config.backgroundImage);
          updateModalHeader(card.title);
          updateContentForAlternative(card);
          closeModal();
          changeSustainabilityIcon(config.finalIcon);
        };
      }
      }
    });
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
// function updateModalHeader(newHeaderText) {
//   const modalHeader = document.getElementById('modalHeader');
//   modalHeader.innerText = newHeaderText;
// }

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
//   // Function to update default content (initial view)
// function updateSustainabilityBanner(title, description, image, color) {
//   document.getElementById('bannerTitle').innerText = title;
//   document.getElementById('bannerDescription').innerText = description;
//   document.getElementById('sustainabilityBanner').style.backgroundColor = color;
//   document.getElementById('bannerImage').src = image;
// }


function updateContentForDefault() {
  // Reset banner content
  // document.getElementById('bannerTitle').innerText = "Low sustainability rating";
  // document.getElementById('bannerDescription').innerText = "Cotton uses more water than most.";
  // document.getElementById('sustainabilityBanner').style.backgroundColor = "#ffeae9";
  updateSustainabilityBanner("Low sustainability rating", "Cotton uses more water than most.", productImage1, "#ffeae9")
  // Show all product cards and pagination
  document.querySelectorAll('.card').forEach(card => card.style.display = 'block');
  document.querySelector('.pagination-dots').style.display = 'flex';
}
//Product Card 1
function updateContentForAlternative1(title, des, bannerColor) {
  // document.getElementById('bannerTitle').innerText = "Sustainable Alternative";
  // document.getElementById('bannerDescription').innerText = "Consider secondhand items to reduce waste.";
  // document.getElementById('sustainabilityBanner').style.backgroundColor = "#e8f5e9";
  // updateBannerImage(productImage2);
  updateSustainabilityBanner("Sustainable Alternative", "Consider secondhand items to reduce waste.", productImage2, '#e8f5e9')


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
  updateBannerImage(productImage3);

  // Show only the secondhand product card
  document.querySelectorAll('.card').forEach((card, index) => {
    card.style.display = index === 2 ? 'block' : 'none';
  });

  // Hide pagination and center the card
  document.querySelector('.pagination-dots').style.display = 'none';
  document.querySelector('.scrolling-wrapper').classList.add('centered-card');
}
// // Event Listeners for "Buy Now" Buttons
// document.getElementById('buyNowButton1').addEventListener('click', function() {
//   setBackgroundImage(backgroundImage2);
//   setSustainableAlternativeDropdownContent();
//   updateModalHeader("Linen Trousers");
//   updateContentForAlternative1();
//   closeModal();
//   changeSustainabilityIcon();
// });


// document.getElementById('buyNowButton2').addEventListener('click', function() {
//   setBackgroundImage(backgroundImage3);
//   setSustainableAlternativeDropdownContent();
//   updateModalHeader("Linen Trousers");
//   updateContentForAlternative2();
//   closeModal();
//   changeSustainabilityIcon();
// });

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