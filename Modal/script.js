// Select the button that opens the modal
const btn = document.querySelector(".btn");

// Select the modal overlay that will be displayed
const modal = document.querySelector(".modal-overlay");

// Select the close button inside the modal
const Close = document.querySelector(".close-btn");

// Event listener for when the button is clicked
btn.addEventListener('click', function() {
    // Add the class 'open-modal' to the modal overlay to make it visible
    modal.classList.add("open-modal");
});

// Event listener for when the close button is clicked
Close.addEventListener('click', function() {
    // Remove the class 'open-modal' from the modal overlay to hide it
    modal.classList.remove("open-modal");
});
