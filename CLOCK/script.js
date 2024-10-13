// Function to set the clock hands based on the current time
function setClock() {
    let now = new Date(); // Get the current date and time
    const seconds = now.getSeconds(); // Get the current seconds
    const minutes = now.getMinutes(); // Get the current minutes
    const hours = now.getHours(); // Get the current hours

    // Calculate the degrees for each hand
    const secondDegrees = (seconds / 60) * 360 + 90; // Calculate degrees for the second hand
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90; // Calculate degrees for the minute hand
    const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90; // Calculate degrees for the hour hand

    // Rotate the hands to the calculated degrees
    document.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`; // Rotate second hand
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDegrees}deg)`; // Rotate minute hand
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`; // Rotate hour hand
}

// Update the clock every second
setInterval(setClock, 1000); // Call setClock every 1000 milliseconds (1 second)
setClock(); // Call setClock immediately to set initial positions
