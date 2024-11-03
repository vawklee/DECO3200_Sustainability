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
import secondhandImage1 from './images/secondhand-alternative_1.webp';
import secondhandImage2 from './images/secondhand-alternative_2.png';
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
        image: secondhandImage1,
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
      description: "Polyster is water and carbon-intensive.",
      color: "#ffcccb",
      image: productImage4
    },
    dropdownContent: {
      fabric: "Polyester 99%, Elastane 1%",
      reason: "Current Fabric",
      details: [
        {
          icon: "waves",
          title: "Water Usage",
          description: "Polyester production uses less water compared to natural fibers like cotton, but is heavily reliant on non-renewable resources."
        },
        {
          icon: "cloud",
          title: "Carbon Footprint",
          description: "Polyester has a high carbon footprint due to its petroleum-based production, which emits significant greenhouse gases."
        },
      ]
    },
    productCards: [
      {
        title: "SATIN SKIRT",
        price: "$59.99",
        size: "S",
        material: "Polyester 98%, Elastane 2%",
        description: "Light khaki green",
        image: productImage5,
        label: "Alternative",
        logo: hmLogo,
        background: backgroundImage5
      },
      {
        title: "LINEN SKIRT",
        price: "$59.99",
        size: "S",
        material: "Viscose 70%, Linen 30%",
        description: "Green/Floral",
        image: productImage6,
        label: "Alternative",
        logo: hmLogo,
        background: backgroundImage6
      },
      {
        title: "MIDI SKIRT",
        price: "$19.50",
        size: "L",
        material: "Linen, Viscose",
        description: "Khaki",
        image: secondhandImage2,
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
//Apply the randomly selected use case on extension load
window.onload = function() {
  const selectedUseCase = getRandomUseCase();
  applyUseCase(selectedUseCase);
};


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
    updateProductCards(config.productCards, config);
  }
// Update content based on selected product card
function updateContentForAlternative(card) {
  updateSustainabilityBanner("Sustainable Alternative", "Consider secondhand items to reduce waste.", card.image, "#e8f5e9");
  const sustainableDropdownContent = {
    fabric: "Linen Fabric:",  // Example for a linen alternative
    reason: "Sustainable Alternative",
    details: [
      {
        icon: "waves",
        title: "Water Usage",
        description: "Linen requires significantly less water compared to cotton, making it a more sustainable choice."
      },
      {
        icon: "cloud",
        title: "Carbon Footprint",
        description: "Linen has a smaller carbon footprint due to fewer pesticides and lower energy requirements."
      },
    ]
  };
  updateDropdownContent(sustainableDropdownContent);
  // Show only the secondhand product card
  document.querySelectorAll('.card').forEach((el, index) => {
    el.style.display = index === 2 ? 'block' : 'none';
  });

  // Hide pagination and center the card
  document.querySelector('.pagination-dots').style.display = 'none';
  document.querySelector('.scrolling-wrapper').classList.add('centered-card');
}
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
  function updateProductCards(cards, config) {
    const cardElements = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      if (cardElements[index]) {
        const imageContainer = cardElements[index].querySelector('.card-image-container');
        
        if (imageContainer) {
          // Remove the existing image container and create a new one
          imageContainer.innerHTML = '';  // Clear the container
          const newImageElement = document.createElement('img');
          newImageElement.src = card.image;
          newImageElement.alt = `Product image for ${card.title}`;
          
          // Append the new image to the container
          imageContainer.appendChild(newImageElement);
          console.log(`Replaced image for card ${index + 1} with: ${card.image}`);
        } else {
          console.warn(`Image container not found for card ${index + 1}`);
        }
  
        // Update other card details
        cardElements[index].querySelector('.product-title').innerText = card.title;
        cardElements[index].querySelector('.product-price').innerText = card.price;
        cardElements[index].querySelector('.product-details h4:nth-child(1)').innerHTML = `<strong>Size:</strong> ${card.size}`;
        cardElements[index].querySelector('.product-details h4:nth-child(2)').innerHTML = `<strong>Material:</strong> ${card.material}`;
        cardElements[index].querySelector('.product-details h4:nth-child(3)').innerHTML = `<strong>Description:</strong> ${card.description}`;
        
        const logoElement = cardElements[index].querySelector('.label img');
        if (logoElement) {
          logoElement.src = card.logo;
          console.log(`Set logo for card ${index + 1} to: ${card.logo}`);
        } else {
          console.warn(`Logo element not found for card ${index + 1}`);
        }
  
        // Add "Buy Now" button functionality
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
        } else {
          console.warn(`Buy Now button not found for card ${index + 1}`);
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