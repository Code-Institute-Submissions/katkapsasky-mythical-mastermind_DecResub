# Testing

Click to return back to the [README.md](README.md) file. 

## Manual Testing

Manual testing has been carried out which includes:
- All internal links open in the same page
- Navbar links work correctly
- Play button redirects correctly
- Quiz questions loop through correctly
- Progress counter and bar for quiz questions works correctly
- Countdown timer starts after start button is clicked and counts down correctly
- Countdown timer shows "out of time" alert after running out and gives option to restart quiz
- Score counter and result text work correctly
- Usernames and scores are correctly being saved to local storage
- High scores update correctly and show in order
- Buttons have relevant aria labels
- Image is showing correctly and alt attribute has been added
- Text and images are visible on desktop, tablet and mobile screens
- No errors in the console on any page

---

## Browser Compatibility 

The website has been tested on Google Chrome, Safari and Edge. The screenshots below show sections of the site on each browser, also with different screen sizes.

![Google Chrome](documentation/responsiveness/tablet-quiz-page.png)
![Safari](documentation/responsiveness/mobile-homepage.png)
![Edge](documentation/responsiveness/desktop-edge.png)

---

## Code Validation

HTML Validation:
![HTML Homepage Validation](documentation/codevalidation/index-html-validation.png)
![HTML Play page Validation](documentation/codevalidation/play-html-validation.png)
![HTML Save Score page Validation](documentation/codevalidation/end-html-validation.png)
![HTML High Scores page Validation](documentation/codevalidation/highscores-html-validation.png)

CSS Validation:
![Style.css Validation](documentation/codevalidation/style-css-validation.png)

JS Validation:
![Script.js Validation](documentation/codevalidation/script-jshint-validation.png)
![Questions.js Validation](documentation/codevalidation/questions-jshint-validation.png)
![Navbar.js Validation](documentation/codevalidation/navbar-jshint-validation.png)
![Highscores.js Validation](documentation/codevalidation/highscores-jshint-validation.png)
![End.js Validation](documentation/codevalidation/end-jshint-validation.png)

---

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
| Save Score | Mobile | ![mobile](documentation/responsiveness/mobile-save-score.png) |
| Save Score | Tablet | ![tablet](documentation/responsiveness/tablet-save-score.png) |
| Save Score | Desktop | ![desktop](documentation/responsiveness/desktop-save-score.png) |
| High Scores | Mobile | ![mobile](documentation/responsiveness/mobile-highscores-page.png) |
| High Scores | Tablet | ![tablet](documentation/responsiveness/tablet-highscores-page.png) |
| High Scores | Desktop | ![desktop](documentation/responsiveness/desktop-highscores-page.png) |

---

## Accessibility

The homepage, play page and high scores page have been audited with Google Lighthouse.

### Home page

![homepage accessibility score](documentation/accessibility/index-lighthouse.png)

### Play page

![play page accessibility score](documentation/accessibility/play-lighthouse.png)

### High Scores page

![high scores page accessibility score](documentation/accessibility/highscores-lighthouse.png)

---

## Bugs

### Fixed Bugs

- When I first coded the hamburger menu it wasn't showing up on the play page, I realised this was because I hadn't inserted the Font Awesome script on play.html and once I did the menu was visible across the site.

- The footer was stuck to the quiz box area on the play page. By adding a page container with a minimum height and creating a content wrap with a padding bottom for the content above the footer I was able to fix this so the footer is no longer attached to any other elements and sticks to the bottom of the page.

- When validating the code for the end.html file I also found the following errors:
![code validation bugs screenshot](documentation/bugs/code-validation-bugs.png)

I changed the empty heading to a div so that it could remain empty without causing any errors as the content for this comes from the end.js file. 

I also removed the trailing slash and located the unclosed div and closed it.

### Unfixed Bugs

There are no remaining bugs that I am aware of.

---