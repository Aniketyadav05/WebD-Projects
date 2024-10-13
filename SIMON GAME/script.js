// Global Variables
let highest_score = 0; // Track the highest score
let gameseq = []; // Sequence of buttons for the game
let userseq = []; // User's sequence of button presses
let h2 = document.querySelector('h2'); // Reference to the element displaying the highest score
let btns = ["btn-1", "btn-2", "btn-3", "btn-4"]; // Array of button IDs
let gamestart = false; // Game status (started or not)
let level = 0; // Current level of the game
let h3 = document.querySelector("h3"); // Reference to the element displaying the current level

// Event listener to start the game when a key is pressed
document.addEventListener("keypress", function() {
    if (gamestart == false) {
        gamestart = true; // Set game as started
        levelUp(); // Start the first level
    }
});

// Function to flash the button during the game sequence
function btnflash(btn) {
    btn.classList.add("flash"); // Add flash class for effect
    setTimeout(function() {
        btn.classList.remove("flash"); // Remove flash class after 250ms
    }, 250);
}

// Function to flash the button when the user presses it
function userflash(btn) {
    btn.classList.add("userflash"); // Add userflash class for effect
    setTimeout(function() {
        btn.classList.remove("userflash"); // Remove userflash class after 250ms
    }, 250);
}

// Function to progress to the next level
function levelUp() {
    level++; // Increment the level
    userseq = []; // Reset the user's sequence
    h3.innerText = `LEVEL ${level}`; // Update the level display

    // Generate a random button index
    let index = Math.floor(Math.random() * 4); // Corrected to use Math.random() correctly
    let color = btns[index]; // Get the button ID based on the random index
    let randbtn = document.querySelector(`.${color}`); // Select the button element
    gameseq.push(color); // Add the button ID to the game sequence
    btnflash(randbtn); // Flash the button in the game sequence

    let score = level; // Calculate the score based on the level
    
    // Check if the current score is higher than the highest score
    if (score > highest_score) {
        highest_score = score; // Update the highest score
        h2.innerText = `HIGHEST SCORE: ${highest_score * 2}`; // Update highest score display
    } else {
        console.log(`highest score ${highest_score}`); // Log the highest score
        h2.innerText = `HIGHEST SCORE: ${highest_score * 2}`; // Update highest score display
    }
}

// Function to check if the user's input matches the game sequence
function checked(idx) {
    // Check if the user's current input matches the game's sequence
    if (userseq[idx] === gameseq[idx]) {
        // If user completed the sequence
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 500); // Proceed to the next level after 500ms
        }
    } else {
        // If the user makes an error
        h3.innerHTML = `GAME OVER! YOUR SCORE WAS <b>${level * 2}</b> <br> PRESS ANY KEY TO START AGAIN`;
        document.querySelector('body').style.backgroundColor = 'red'; // Change background color to red on game over
        setTimeout(function() {
            document.querySelector('body').style.backgroundColor = 'aqua'; // Change back after 100ms
        }, 100);
        reset(); // Reset the game state
    }
}

// Function to handle button press by the user
function pressed() {
    let btn = this; // Get the button that was pressed
    userflash(btn); // Flash the button for user feedback
    usercolor = btn.getAttribute("id"); // Get the ID of the pressed button
    userseq.push(usercolor); // Add the pressed button to the user's sequence
    console.log(userseq); // Log the user's sequence for debugging
    checked(userseq.length - 1); // Check the user's last input
}

// Add event listeners to each button for user interaction
let allbtn = document.querySelectorAll('.btn'); // Select all button elements
for (btn of allbtn) {
    btn.addEventListener("click", pressed); // Attach click event handler to each button
}

// Function to reset the game state
function reset() {
    gamestart = false; // Reset game status
    gameseq = []; // Clear game sequence
    userseq = []; // Clear user's sequence
    level = 0; // Reset level
}
