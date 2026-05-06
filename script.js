// Boolean variable to track mode
let darkMode = false;

/* NEW FUNCTION: document.querySelector lets you select any HTML element using its tag, class, or id */

/* const (instead of let) because we are storing a REFRENCE to part of the HTML page */
const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");

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
        body.style.background = "black";
        heading.style.color = "lightgrey";
        description.style.color = "white"
        description.textContent = "Welcome to the dark side"
        toggleBtn.textContent = "Switch to Light"
    }
    else {
        console.log("apply light mode styles");
        body.style.background = "white";
        heading.style.color = "navy";
        description.style.color = "black";
        description.textContent = "Welcome to the light side";
        toggleBtn.textContent = "Switch to dark";
    }
}
// Attatch the function to the button
toggleBtn.addEventListener("click", toggleMode);