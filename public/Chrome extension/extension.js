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
  

