const container = document.querySelector(".qr-container")
const QRtext = document.querySelector(".qr-text")

const generate = document.querySelector(".generate")

const errorMessage = document.querySelector(".error-message")

generate.addEventListener('click', () => {

    validateInputField()
})

function validateInputField() {
    if (QRtext.value.trim().length > 0) {
        generateQRCode();
    }
    else {
        errorMessage.textContent = "ENTER SOME TEXT TO GENERATE THE QR CODE"
    }
}

function generateQRCode() {
    container.innerHTML = ""
    new QRCode(container, {
        text: QRtext.value,
        height: 400,
        width: 400,
        colorLight: '#fff',
        colorDark: '#000'
    })

    QRtext.value = ''
    errorMessage.textContent = ' '
}