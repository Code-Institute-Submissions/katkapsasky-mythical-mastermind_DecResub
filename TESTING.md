# Testing

Click to return back to the [README.md](README.md) file. 

Manual testing has been carried out which includes:
- All internal links open in the same page
- Navbar links work correctly
- Play button redirects correctly
- Quiz questions loop through correctly
- Progress counter for quiz questions works correctly
- Score counter and result text work correctly
- Buttons have relevant aria labels
- Image is showing correctly and alt attribute has been added
- Text and images are visible on desktop, tablet and mobile screens

## Browser Compatibility 

The website has been tested on Google Chrome, Safari and Edge. The screenshots below show sections of the site on each browser.
![Google Chrome](documentation/responsiveness/tablet-google-chrome.png)
![Safari](documentation/responsiveness/mobile-safari.png)
![Edge](documentation/responsiveness/desktop-edge.png)

## Code Validation

HTML Validation:
![HTML Homepage Validation](documentation/codevalidation/index-html-validation.png)
![HTML Play page Validation](documentation/codevalidation/play-html-validation.png)

CSS Validation:
![CSS Homepage Validation](documentation/codevalidation/index-css-validation.png)
![CSS Homepage Validation](documentation/codevalidation/play-css-validation.png)

JS Validation:
![JS script.js Validation](documentation/codevalidation/script-js-validation.png)
![JS questions.js Validation](documentation/codevalidation/questions-js-validation.png)

## Responsiveness

| Page | Screensize | Responsiveness |
| --- | --- | --- |
| Home Page | Mobile | ![mobile](documentation/responsiveness/mobile-homepage.png) |
| Home Page | Tablet | ![tablet](documentation/responsiveness/tablet-homepage.png) |
| Home Page | Desktop | ![desktop](documentation/responsiveness/desktop-homepage.png) |
| Start | Mobile | ![mobile](documentation/responsiveness/mobile-start-quiz-page.png) |
| Start | Tablet | ![tablet](documentation/responsiveness/tablet-start-quiz-page.png) |
| Start | Desktop | ![desktop](documentation/responsiveness/desktop-start-quiz-page.png) |
| Play Page | Mobile | ![mobile](documentation/responsiveness/mobile-quiz-page.png) |
| Play Page | Tablet | ![tablet](documentation/responsiveness/tablet-quiz-page.png) |
| Play Page | Desktop | ![desktop](documentation/responsiveness/desktop-quiz-page.png) |
| Result | Mobile | ![mobile](documentation/responsiveness/mobile-result-page.png) |
| Result | Tablet | ![tablet](documentation/responsiveness/tablet-result-page.png) |
| Result | Desktop | ![desktop](documentation/responsiveness/desktop-result-page.png) |


## Accessibility

The homepage and play page have been audited with Google Lighthouse and received a score of 100.

### Home page

![homepage accessibility score](documentation/accessibility/index-lighthouse.png)

### Play page

![gallerypage accessibility score](documentation/accessibility/play-lighthouse.png)

## Bugs

### Fixed Bugs

- When I first coded the hamburger menu it wasn't showing up on the play page, I realised this was because I hadn't inserted the Font Awesome script on play.html and once I did the menu was visible across the site.

- The footer was stuck to the quiz box area on the play page. By adding a page container with a minimum height and creating a content wrap with a padding bottom for the content above the footer I was able to fix this so the footer is no longer attached to any other elements and sticks to the bottom of the page.

### Unfixed Bugs

There are no remaining bugs that I am aware of.

---