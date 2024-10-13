// Set up the event listener for window load
window.onload = function() {
    addColor(); // Call the function to add colors when the page loads
}

// Create 9 color boxes and append them to the container
for (let i = 0; i < 9; i++) {
    const box = document.createElement('div'); // Create a new div element for each box
    box.classList.add('box'); // Add the 'box' class to the div
    document.querySelector('.container').appendChild(box); // Append the box to the container
}

// Select the button and all the boxes
const btn = document.querySelector('.btn'); // Button to change colors
const boxes = document.querySelectorAll('.box'); // All the boxes created

// Function to generate a random hex color
function HexColor() {
    const chars = '1234567890abcdef'; // Characters used in hex color
    var colorLength = 6; // Length of the color string
    var color = ''; // Variable to hold the generated color

    // Generate a random hex color
    for (var i = 0; i < colorLength; i++) {
        var randomColor = Math.floor(Math.random() * chars.length); // Get a random index from the characters
        color += chars.substring(randomColor, randomColor + 1); // Build the color string
    }
    return '#' + color; // Return the color prefixed with '#'
}

// Function to add random colors to all boxes
function addColor() {
    boxes.forEach(e => {
        var newColor = HexColor(); // Generate a new random color
        e.style.backgroundColor = newColor; // Set the box's background color
        e.innerHTML = newColor; // Display the hex color code inside the box
    });
}

// Add an event listener to the button to change colors when clicked
btn.addEventListener('click', addColor); // Call addColor when the button is clicked
