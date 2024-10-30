# DECO3200 Repair & Rewear
This is for the DECO3200 Interactive Design Product Studio. Our project addresses SDG 12 and aims to target reducing textiles waste. This implements a web-app and browser extension solution.

## Table of Contents:
1. [Set-up and deployment procedures](#setupAndDeploy)
2. [Testing Specifications](#specifications)
3. [References](#references)

## How to set up and deploy on a local machine <a id="setupAndDeploy"></a>
1. Install [Node.js](https://nodejs.org/en)
2. In your preferred code editor, use the terminal and type `git clone https://github.com/vawklee/DECO3200_Sustainability.git` to clone the [GitHub Repository](https://github.com/vawklee/DECO3200_Sustainability.git)
3. Use the terminal and type `npm install` to install all package dependencies

### Viewing the website (Repair & Rewear | index.html)
1. Using the terminal, type `npm run dev` to start the web server displaying the website
2. View on a web browser at http://localhost:1234/ (port number may vary, refer to the terminal for any differences)
3. If you have viewed the browser extension beforehand, press Shift + F5 to refresh the webpage without cache
4. Using the terminal, press `Control + C` to stop the web server at any time

### Viewing the browser extension (Sustainable Shopping Assistant | extension.html)
1. Using the terminal, type `npm run extension` to start the web server displaying the browser extension prototype
2. View on a web browser at http://localhost:1234/ (port number may vary, refer to the terminal for any differences)
3. If you have viewed the website beforehand, press Shift + F5 to refresh the webpage without cache
4. Using the terminal, press `Control + C` to stop the web server at any time

### Troubleshooting
If at any time there are issues with parts of the website or browser extension not loading or presenting expected results, try the following steps. This is not a definitive list of troubleshooting steps, but can provide some guidance towards fixing issues: <br>
1. Press Shift + F5 to refresh the webpage without cache
2. Close the webpage and re-visit the link http://localhost:1234/ (port number may vary, refer to the terminal for any differences)
3. Using the terminal, press `Control + C` to stop the web server
4. Delete the file folder named `.parcel-cache` and type `npm run <command>` to start the web server again

## Testing Specifications <a id="specifications"></a>
### Web Browser
This prototype was developed and tested using Google Chrome as the main web browser of choice. This project can also be viewed on Firefox, Microsoft Edge, etc.
### Viewing Resolution
The optimal viewing resolution for this prototype at the current stage of development is 2256px x 1504px on a laptop or desktop monitor. Similar screen sizes will produce the same results, however, the current prototype is not responsive for screen sizes smaller than 1546px wide.

## Source Code References <a id="references"></a>
https://codepen.io/sosuke/pen/Pjoqqp <br>

https://medium.com/@chilakaemmanuel/changing-svg-image-color-loaded-through-img-tag-with-css-3-filters-c8e912f52dd3 <br>

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items <br>

https://charlesfreeborn.medium.com/how-to-build-a-responsive-nav-using-css-flexbox-3511cd936af9 <br>

https://webcode.tools/css-generator/drop-shadow <br>

https://uiverse.io/ArturCodeCraft/afraid-fish-22 <br>

https://www.freecodecamp.org/news/how-to-submit-a-form-with-javascript/ <br>

https://stackoverflow.com/questions/15759020/window-location-href-doesnt-redirect <br>

https://stackoverflow.com/questions/74212470/how-do-i-make-an-element-disappear-after-a-set-amount-of-time <br>

https://stackoverflow.com/questions/52430565/how-do-i-style-form-results-posted-to-a-page <br>

https://developer.mozilla.org/en-US/docs/Web/API/FileReader <br>