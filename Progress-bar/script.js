const progress = document.querySelector(".progress"); // Select the progress bar element
const prevBtn = document.querySelector(".prev-btn"); // Select the 'Previous' button
const nextBtn = document.querySelector(".next-btn"); // Select the 'Next' button
const iconsWrapper = document.querySelectorAll(".icon-wrapper"); // Select all step icons

let currentSelectedStep = 1; // Initialize the current step to 1 (starting point)

// Event listener for the 'Next' button to move to the next step
nextBtn.addEventListener("click", () => {
  if (currentSelectedStep < iconsWrapper.length) { // Ensure the current step doesn't exceed the total number of steps
    currentSelectedStep++; // Increment the current step
  }

  handleUpdateStep(); // Update the progress bar and the step icons
});

// Event listener for the 'Previous' button to move to the previous step
prevBtn.addEventListener("click", () => {
  if (currentSelectedStep > 1) { // Ensure the current step doesn't go below 1
    currentSelectedStep--; // Decrement the current step
  }

  handleUpdateStep(); // Update the progress bar and the step icons
});

// Function to handle updating the step icons and progress bar
function handleUpdateStep() {
  // Loop through the step icons and add or remove the 'active' class based on the current step
  iconsWrapper.forEach((item, index) => {
    if (index < currentSelectedStep) { // If the step is less than the current step, mark it as active
      item.classList.add("active");
    } else {
      item.classList.remove("active"); // Otherwise, remove the active class
    }
  });

  // Update the width of the progress bar based on the current step
  progress.style.width =
    ((currentSelectedStep - 1) / (iconsWrapper.length - 1)) * 100 + "%";

  // Disable or enable the 'Previous' and 'Next' buttons based on the current step
  if (currentSelectedStep === 1) { // Disable 'Previous' button on the first step
    prevBtn.disabled = true;
  } else if (currentSelectedStep === iconsWrapper.length) { // Disable 'Next' button on the last step
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false; // Enable both buttons on intermediate steps
    nextBtn.disabled = false;
  }
}
