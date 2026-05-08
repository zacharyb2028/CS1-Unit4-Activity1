// Boolean variable to track mode
let darkMode = false;

/* NEW FUNCTION: document.querySelector lets you select any HTML element using its tag, class, or id */

/* const (instead of let) because we are storing a REFRENCE to part of the HTML page */
const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
const image = document.querySelector("#image");

// Now we can change styles & attributes for those elements
heading.style.color = "navy"; //JS wrote CSS code...
heading.textContent = "Light Mode & Dark Mode Website" ;

// Define what happens when button is ckicked
function toggleMode() {
    console.log("function triggered");
    // 1. Flip the boolean value
    darkMode = !darkMode;
    console.log(darkMode);

    // 2. Conditionally apply styles based on mode
    if (darkMode == true) {
        console.log("apply dark mode styles");
        body.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
        heading.style.color = "lightgrey";
        description.style.color = "white";
        description.textContent = "Welcome to the dark side";
        toggleBtn.textContent = "Switch to Light";
        image.src = "DarkIMG.webp"
        body.style.fontFamily = "comic sans";
    }
    else {
        console.log("apply light mode styles");
        body.style.background = "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
        heading.style.color = "navy";
        description.style.color = "black";
        description.textContent = "Welcome to the light side";
        toggleBtn.textContent = "Switch to dark";
        image.src = "LightIMG.jpeg";
        body.style.fontFamily = "comic sans";
    }
}
// Attatch the function to the button
toggleBtn.addEventListener("click", toggleMode);