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

//REVIEW
// 1. Select the new element on the page (by id name)
const hackerBtn = document.querySelector("#hacker");
// 2. Attatch click event listener to the button
hackerBtn.addEventListener("click", setHacker);
// 3. Define the function that triggers when clicked
function setHacker() {
    console.log("setting hacker theme...");
    body.style.background = "linear-gradient(to right, rgb(52, 232, 158), rgb(15, 52, 67))";
    body.style.color = "rgb(255, 8, 0)";
    heading.style.color = "rgb(255, 8, 0)";
    body.style.fontFamily = "Papyrus";
    description.textContent = "YOU HAVE BEEN HACKED!";
}