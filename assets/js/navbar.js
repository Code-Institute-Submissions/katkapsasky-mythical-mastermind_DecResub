/* jshint esversion: 11 */

// toggles hamburger menu display when clicked
function myFunction() {
    let navbar = document.getElementById("myLinks");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}