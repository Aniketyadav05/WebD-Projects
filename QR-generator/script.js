const container = document.querySelector(".qr-container"); // Select the container where the QR code will be displayed
const QRtext = document.querySelector(".qr-text"); // Select the input field where the user enters the text for QR code

const generate = document.querySelector(".generate"); // Select the button that triggers the QR code generation

const errorMessage = document.querySelector(".error-message"); // Select the element where error messages are displayed

// Add an event listener to the 'Generate' button that triggers the validation and QR code generation process
generate.addEventListener('click', () => {
    validateInputField();  // Call the function to validate the input field when the button is clicked
});

// Function to validate if the input field has any text
function validateInputField() {
    if (QRtext.value.trim().length > 0) { // Check if the input is not empty or just whitespace
        generateQRCode(); // Call the function to generate the QR code
    } else {
        errorMessage.textContent = "ENTER SOME TEXT TO GENERATE THE QR CODE"; // Display an error message if the input is empty
    }
}

// Function to generate the QR code
function generateQRCode() {
    container.innerHTML = ""; // Clear any previously generated QR code from the container
    
    // Create a new QR code using the QRCode library, specifying the text, dimensions, and colors
    new QRCode(container, {
        text: QRtext.value,  // The text entered by the user
        height: 400,         // Set the height of the QR code
        width: 400,          // Set the width of the QR code
        colorLight: '#fff',  // Background color of the QR code
        colorDark: '#000'    // Foreground color of the QR code
    });

    QRtext.value = '';  // Clear the input field after generating the QR code
    errorMessage.textContent = '';  // Clear any error message displayed
}
