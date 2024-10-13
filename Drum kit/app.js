/* 
Pseudocode:
1. Define function playSound that takes an event as a parameter:
   - Get the audio element corresponding to the key pressed using the data-key attribute.
   - Get the key element using the same data-key attribute.
   - If no audio element is found, exit the function.
   - Reset the audio playback to the start and play the sound.
   - Add a 'playing' class to the key element to visually indicate it's pressed.

2. Define function removeTransition that takes an event as a parameter:
   - If the event's property name is not 'transform', exit the function.
   - Remove the 'playing' class from the key element.

3. Select all key elements and add an event listener for transitionend on each key, linking to the removeTransition function.

4. Add an event listener to the window for the keydown event, linking to the playSound function.
*/

function playSound(e) {
    // Select the audio element corresponding to the key pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Select the key element corresponding to the key pressed
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // If no audio element is found, exit the function
    if (!audio) return;

    // Reset the audio playback to the start and play the sound
    audio.currentTime = 0;
    audio.play();
    
    // Add a 'playing' class to the key element to visually indicate it's pressed
    key.classList.add('playing');
}

function removeTransition(e) {
    // Only remove the class if the property name is 'transform'
    if (e.propertyName !== 'transform') return;

    // Remove the 'playing' class from the key element
    this.classList.remove('playing');
}

// Select all key elements
const keys = document.querySelectorAll('.key');

// Add an event listener for transitionend on each key, linking to the removeTransition function
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add an event listener to the window for the keydown event, linking to the playSound function
window.addEventListener('keydown', playSound);
