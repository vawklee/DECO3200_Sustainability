const targetPages = [
    "https://www.zara.com/au/en/trousers-with-side-taping-p05030505.html?v1=380022605",
    "https://www.zara.com/au/en/zw-collection-leather-trousers-with-seam-detail-p05479042.html?v1=379874391",
    "https://www.zara.com/au/en/zw-collection-rhinestone-trousers-p04877259.html?v1=406889827", 
    "https://www.zara.com/au/en/zw-collection-linen-trousers-p02731906.html?v1=364840885",
    "https://www.zara.com/au/en/zw-collection-embroidered-trousers-p04786081.html?v1=364190990"
    // Add your predetermined product URLs
];
//function to show the extension
function showModal() {
    fetch(chrome.runtime.getURL('modal.html')) // Load modal HTML
        .then(response => response.text())
        .then(html => {
            const modal = document.createElement('div');
            modal.id = 'slide-out-modal';
            modal.innerHTML = html; // Inject fetched HTML content
            document.body.appendChild(modal);
            
            // Close button functionality
            document.querySelector('.close-btn').addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
}

// Check if current page matches one of the product pages
const currentPage = window.location.href;
if (productPages.some(page => currentPage.includes(page))) {
    showModal(); // Show modal on matching pages
}
// Create an image element
const icon = document.createElement('img');
icon.src = chrome.runtime.getURL("images/extension icon.png");  // Ensure the file path is correct
icon.id = 'icon';

// Append the image to the body
document.body.appendChild(icon);

// Optional: Add click functionality (if you want to trigger a modal or action)
icon.addEventListener('click', () => {
    alert('Icon clicked!');
    // Add any action you want to trigger here
});