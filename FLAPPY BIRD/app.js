// Global Variables
let board; // Canvas element for the game
let boardwidth = 360; // Width of the game board
let boardheight = 640; // Height of the game board
let context; // 2D rendering context for the canvas

// Bird properties
let birdWidth = 34; // Width of the bird
let birdHeight = 24; // Height of the bird
let birdX = boardwidth / 8; // Initial X position of the bird
let birdY = boardheight / 2; // Initial Y position of the bird

let birdImg; // Image for the bird

// Bird object to track its properties
let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
};

// Pipes array to hold pipe objects
let pipes = [];
let pipeWidth = 64; // Width of the pipes
let pipeHeight = 512; // Height of the pipes
let pipeX = boardwidth; // Initial X position of the pipes
let pipeY = 0; // Initial Y position for pipe placement

let pipeTopImg; // Image for the top pipe
let pipeBottomImg; // Image for the bottom pipe

// Game physics
let velocityX = -2; // Horizontal velocity of the pipes
let velocityY = 0; // Vertical velocity of the bird
let gravity = 0.4; // Gravity affecting the bird

let gameOver = false; // Game over status

let score = 0; // Player score

// Initialize the game when the window loads
window.onload = function() {
    board = document.getElementById('board'); // Get the canvas element
    board.height = boardheight; // Set canvas height
    board.width = boardwidth; // Set canvas width
    context = board.getContext("2d"); // Get 2D rendering context

    // Load bird image
    birdImg = new Image();
    birdImg.src = 'flappybird.png'; // Path to the bird image
    birdImg.onload = function() {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height); // Draw bird on the canvas
    }

    // Load pipe images
    pipeTopImg = new Image();
    pipeTopImg.src = 'toppipe.png'; // Path to the top pipe image

    pipeBottomImg = new Image();
    pipeBottomImg.src = 'bottompipe.png'; // Path to the bottom pipe image

    requestAnimationFrame(Update); // Start the game loop
    setInterval(placePipes, 1500); // Place pipes every 1.5 seconds

    // Listen for keydown events to control the bird
    document.addEventListener("keydown", moveBird);
}

// Game loop to update the game state
function Update() {
    requestAnimationFrame(Update); // Request the next frame
    if (gameOver) {
        return; // Stop the update loop if the game is over
    }

    context.clearRect(0, 0, board.width, board.height); // Clear the canvas

    velocityY += gravity; // Apply gravity to the bird
    bird.y = Math.max(bird.y + velocityY, 0); // Update bird's position, prevent going above the canvas
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height); // Draw the bird

    // Check if the bird has fallen below the canvas
    if (bird.y > board.height) {
        gameOver = true; // End the game if the bird falls off the screen
    }

    // Loop through pipes and update their positions
    for (let i = 0; i < pipes.length; i++) {
        let pipe = pipes[i];
        pipe.x += velocityX; // Move pipe to the left
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height); // Draw the pipe

        // Check if the bird passed the pipe
        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 5; // Increase score
            pipe.passed = true; // Mark pipe as passed
        }

        // Check for collision between bird and pipe
        if (Colission(bird, pipe)) {
            gameOver = true; // End the game on collision
        }
    }

    // Remove pipes that have gone off-screen
    while (pipes.length > 0 && pipes[0].x < -pipeWidth) {
        pipes.shift(); // Remove the first pipe from the array
    }

    // Display the score
    context.fillStyle = "red";
    context.font = "45px Verdana";
    context.fillText(score, 5, 45); // Draw the score on the canvas

    // Display game over message if the game is over
    if (gameOver) {
        context.fillText("GAME OVER", 50, 250);
    }
}

// Function to place new pipes on the board
function placePipes() {
    if (gameOver) {
        return; // Prevent placing pipes if the game is over
    }

    // Calculate random position for the top pipe
    let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
    let openingSpace = board.height / 4; // Space for the bird to pass through

    // Create top pipe object
    let toppipe = {
        img: pipeTopImg,
        x: pipeX,
        y: randomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false // Flag to check if the pipe has been passed
    }
    pipes.push(toppipe); // Add top pipe to the pipes array

    // Create bottom pipe object
    let bottompipe = {
        img: pipeBottomImg,
        x: pipeX,
        y: randomPipeY + pipeHeight + openingSpace,
        width: pipeWidth,
        height: pipeHeight,
        passed: false // Flag to check if the pipe has been passed
    }
    pipes.push(bottompipe); // Add bottom pipe to the pipes array
}

// Function to move the bird when a key is pressed
function moveBird(e) {
    // Check for specific keys to make the bird jump
    if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
        velocityY = -6; // Apply upward velocity to the bird
    }

    // Reset the game if it's over
    if (gameOver) {
        bird.y = birdY; // Reset bird's position
        pipes = []; // Clear pipes
        score = 0; // Reset score
        gameOver = false; // Reset game over status
    }
}

// Function to check for collision between two objects
function Colission(a, b) {
    return a.x < b.x + b.width && // Check for horizontal overlap
           a.x + a.width > b.x && // Check for horizontal overlap
           a.y < b.y + b.height && // Check for vertical overlap
           a.y + a.height > b.y; // Check for vertical overlap
}
