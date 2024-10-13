
// Select the navigation toggle button and the links container
const navToggle = document.querySelector(".nav-toggle"); // Get the toggle button
const links = document.querySelector(".links"); // Get the links container

// Add a click event listener to the toggle button
navToggle.addEventListener('click', function() {
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links")
    // }
    // else {
    //     links.classList.add("show-links")
    // }
    // Toggle the 'show-links' class on the links container
    links.classList.toggle("show-links"); // If 'show-links' class exists, remove it; if not, add it
});
