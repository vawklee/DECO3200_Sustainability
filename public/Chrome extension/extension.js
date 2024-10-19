// const targetPages = [
//     "https://www.zara.com/au/en/trousers-with-side-taping-p05030505.html?v1=380022605",
//     "https://www.zara.com/au/en/zw-collection-leather-trousers-with-seam-detail-p05479042.html?v1=379874391",
//     "https://www.zara.com/au/en/zw-collection-rhinestone-trousers-p04877259.html?v1=406889827", 
//     "https://www.zara.com/au/en/zw-collection-linen-trousers-p02731906.html?v1=364840885",
//     "https://www.zara.com/au/en/zw-collection-embroidered-trousers-p04786081.html?v1=364190990"
//     // Add your predetermined product URLs
// ];
// Create the modal display element for sustainability information
// var sustainabilityModal = document.createElement('div');
// sustainabilityModal.className = '_sustainability_modal';
// sustainabilityModal.style.display = 'none'; // Initially hidden
// sustainabilityModal.innerHTML = '<h1>Sustainability Info</h1><p>Details about sustainability for this product</p>';
// sustainabilityModal.style.cssText = 'height:300px;width:300px;border-radius:3px;border:1px solid;background:white;color:green;cursor:pointer;position:fixed;top:90px;right:5px;z-index:9999999999;overflow:hidden;';
// document.body.appendChild(sustainabilityModal);
//console.log("Sustainability icon added!");
console.log(chrome.runtime.getURL('images/extension_icon.png'));
// Create the sustainability icon button element
var sustainabilityButton = document.createElement('img');
sustainabilityButton.src = chrome.runtime.getURL('images/extension_icon.png'); 
sustainabilityButton.style.cssText = 'height:10%;width:10%;cursor:pointer;position:fixed;top:5px;right:5px;z-index:9999999999;';

// Add the icon for sustainability (replacing the emoji with the sustainability icon)
// var iconImg = document.createElement('img');
// iconImg.src = chrome.runtime.getURL('images/extension_icon.png');  
// iconImg.style.width = '100%';
// iconImg.style.height = '100%';
// sustainabilityButton.appendChild(iconImg);

// Append the button (icon) to the body
document.body.appendChild(sustainabilityButton);

// Function to create and display the sustainability modal
var showModal = function() {
    var sustainabilityModal = document.createElement('div');
    sustainabilityModal.className = '_sustainability_modal';
    sustainabilityModal.innerHTML = '<h1>Sustainability Info</h1><p>This product has a low carbon footprint and uses 50% less water than comparable items.</p>';
    sustainabilityModal.style.cssText = 'height:300px;width:300px;border-radius:3px;border:1px solid;background:white;color:green;cursor:pointer;position:fixed;top:90px;right:5px;z-index:9999999999;overflow:hidden;';
    
    document.body.appendChild(sustainabilityModal);
};
// Event listener to toggle the modal when the icon is clicked
sustainabilityButton.addEventListener('click', function() {
    var modalExists = document.querySelector('._sustainability_modal');
    if (modalExists) {
        modalExists.remove(); // Remove modal if it exists (to toggle visibility)
    } else {
        showModal(); // Show modal if it doesn't exist
    }
});

// //function to show the extension
// function showModal() {
//     fetch(chrome.runtime.getURL('extension.html')) // Load modal HTML
//         .then(response => response.text())
//         .then(html => {
//             const modal = document.createElement('div');
//             modal.id = 'slide-out-modal';
//             modal.innerHTML = html; // Inject fetched HTML content
//             document.body.appendChild(modal);
//             modal.classList.add('show');
//         });
// }

// // // Check if current page matches one of the product pages
// // const currentPage = window.location.href;
// // if (productPages.some(page => currentPage.includes(page))) {
// //     showModal(); // Show modal on matching pages
// // }
// // Create an image element
// const icon = document.createElement('img');
// icon.src = chrome.runtime.getURL("images/extension icon.png");  // Ensure the file path is correct
// icon.id = 'icon'; // Add a unique ID for styling

// // Append the icon to the body (not inside the modal)
// document.body.appendChild(icon);

// // Optional: Add click functionality (if you want to trigger a modal or action)
// icon.addEventListener('click', () => {
//     alert('Icon clicked!');
//     showModal();
//     // Add any action you want to trigger here
// });