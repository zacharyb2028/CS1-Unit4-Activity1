// Boolean variable to track mode
let darkMode = false;

/* NEW FUNCTION: document.querySelector lets you select any HTML element using its tag, class, or id */

/* const (intead of let) because we are storing a REFRENCE to part of the HTML page */
const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");

// Now we can change styles & attributes for those elements
heading.style.color = "navy"; //JS wrote CSS code...
heading.textContent = "Light Mode & Dark Mode Website" ;