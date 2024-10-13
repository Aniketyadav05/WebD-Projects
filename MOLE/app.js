// Pseudocode:
// 1. Initialize variables:
//    - `currentMoleTile`: to keep track of the current tile with the mole.
//    - `currentPlantTile`: to keep track of the current tile with the plant.
//    - `score`: to store the player's score, starting at 0.
//    - `gameOver`: to indicate whether the game has ended, starting as false.
// 2. Define `gameend` function:
//    - Display the final score in the game over modal and show the modal.
// 3. Define `closeModal` function:
//    - Hide the game over modal, reset `gameOver` and `score`, and update the score display.
// 4. On window load, call `setGame` to initialize the game.
// 5. Define `setGame` function:
//    - Create 9 tiles and add click event listeners to them.
//    - Set intervals to call `setMole` every 2 seconds and `setPlant` every 1 second.
// 6. Define `getRandomTile` function:
//    - Return a random tile ID (0-8).
// 7. Define `setMole` function:
//    - Remove the mole from the previous tile, if it exists.
//    - Create a new mole image and assign it to a random tile.
//    - Ensure the mole does not appear on the same tile as the plant.
// 8. Define `setPlant` function:
//    - If the game is over, call `gameend` with the current score.
//    - Remove the plant from the previous tile, if it exists.
//    - Create a new plant image and assign it to a random tile.
//    - Ensure the plant does not appear on the same tile as the mole.
// 9. Define `selectTile` function:
//    - Check if the game is over; if so, do nothing.
//    - If the selected tile contains the mole, increase the score and update the score display.
//    - If the selected tile contains the plant, set the game to over and display "GAME-OVER" with the score.

let currentMoleTile;  // Holds the current tile with the mole
let currentPlantTile; // Holds the current tile with the plant
let score = 0;       // Player's score, initialized to 0
let gameOver = false; // Indicates whether the game is over

// Function to handle game over state
function gameend(score) {
    // Display the final score in the game over modal
    document.getElementById("finalScore").innerText = score;
    document.getElementById("gameOverModal").style.display = "block"; // Show modal
}

// Function to close the modal and reset the game
function closeModal() {
    document.getElementById("gameOverModal").style.display = "none"; // Hide modal
    gameOver = false; // Reset game over state
    score = 0; // Reset score
    document.getElementById('score').innerText = score.toString(); // Update score display
}

// When the window loads, initialize the game
window.onload = function() {
    setGame(); // Start the game
}

// Function to set up the game
function setGame() {
    // Create 9 tiles and append them to the board
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement('div'); // Create a tile
        tile.id = i.toString(); // Set tile ID
        tile.addEventListener('click', selectTile); // Add click event listener
        document.getElementById('board').appendChild(tile); // Append tile to the board
    }
    // Set intervals to create moles and plants
    setInterval(setMole, 2000); // Call setMole every 2 seconds
    setInterval(setPlant, 1000); // Call setPlant every 1 second
}

// Function to get a random tile ID
function getRandomTile() {
    let num = Math.floor(Math.random() * 9); // Generate a random number between 0 and 8
    return num.toString(); // Return it as a string
}

// Function to set the mole on a random tile
function setMole() {
    if (gameOver) {
        return; // If the game is over, do nothing
    }
    
    // Remove the mole from the previous tile, if it exists
    if (currentMoleTile) {
        currentMoleTile.innerHTML = ""; // Clear the tile
    }

    let mole = document.createElement('img'); // Create a new mole image
    mole.src = 'mole.png'; // Set the image source

    let num = getRandomTile(); // Get a random tile ID
    // Ensure the mole does not appear on the same tile as the plant
    if (currentPlantTile && currentPlantTile.id == num) {
        return; // If true, exit the function
    }
    currentMoleTile = document.getElementById(num); // Set the current mole tile
    currentMoleTile.appendChild(mole); // Append the mole image to the tile
}

// Function to set the plant on a random tile
function setPlant() {
    if (gameOver) {
        gameend(score); // If the game is over, display the game over modal
        return; // Exit the function
    }
    // Remove the plant from the previous tile, if it exists
    if (currentPlantTile) {
        currentPlantTile.innerHTML = ""; // Clear the tile
    }
    let plant = document.createElement('img'); // Create a new plant image
    plant.src = "plant.png"; // Set the image source
    let num = getRandomTile(); // Get a random tile ID
    // Ensure the plant does not appear on the same tile as the mole
    if (currentMoleTile && currentMoleTile.id == num) {
        return; // If true, exit the function
    }
    currentPlantTile = document.getElementById(num); // Set the current plant tile
    currentPlantTile.appendChild(plant); // Append the plant image to the tile
}

// Function to handle tile selection
function selectTile() {
    if (gameOver) {
        return; // If the game is over, do nothing
    }
    // If the selected tile contains the mole
    if (this == currentMoleTile) {
        score += 10; // Increase the score
        document.getElementById('score').innerText = score.toString(); // Update the score display
    }
    // If the selected tile contains the plant
    else if (this == currentPlantTile) {
        document.getElementById('score').innerText = "GAME-OVER " + score.toString(); // Display game over message with score
        gameOver = true; // Set game over state
    }
}
