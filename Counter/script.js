/* 
Pseudocode:
1. Initialize a count variable to 0.

2. Select the value element that displays the count.
3. Select all button elements with the class 'btn'.

4. For each button:
    a. Add a click event listener.
    b. Get the class list of the clicked button.
    c. If the button has the 'decrease' class, decrement the count.
    d. If the button has the 'increase' class, increment the count.
    e. If the button has the 'reset' class, reset the count to 0.
    
    f. Change the color of the value based on the count:
        - If count > 0, set the text color to green.
        - If count < 0, set the text color to red.
        - If count = 0, set the text color to black.

    g. Update the text content of the value element with the current count.
*/

let count = 0; // Initialize a count variable to 0

// Select the value element that displays the count
const value = document.querySelector("#value");
// Select all button elements with the class 'btn'
const btns = document.querySelectorAll(".btn");

// For each button, add a click event listener
btns.forEach(function (item) {
    item.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList; // Get the class list of the clicked button

        // Check the class of the button and update the count accordingly
        if(styles.contains('decrease')) {
            count--; // Decrement the count if 'decrease' class is present
        } else if(styles.contains('increase')) {
            count++; // Increment the count if 'increase' class is present
        } else if(styles.contains('reset')) {
            count = 0; // Reset the count if 'reset' class is present
        }

        // Change the color of the value based on the count
        if(count > 0) {
            value.style.color = "green"; // Set text color to green if count > 0
        } else if(count < 0) {
            value.style.color = "red"; // Set text color to red if count < 0
        } else {
            value.style.color = "black"; // Set text color to black if count = 0
        }

        // Update the text content of the value element with the current count
        value.textContent = count; 
    });
});
