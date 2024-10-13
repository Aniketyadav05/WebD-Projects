let isPlaying = false;
function conversion(tame) {
    let timeValue = parseInt(tame)
    let timeUnit = tame.slice(-1);


    if (timeUnit === 's') {
        return timeValue * 1000;
    } else if (timeUnit === 'm') {
        return timeValue * 60000;
    }
}
function playAudio(audioFile, startTime, duration) {
    var audio = new Audio(audioFile);
    var duration = conversion(duration);
    audio.currentTime = startTime;
    audio.play();
    document.querySelectorAll('.floating-image').forEach(img => img.classList.remove('hidden'));

    isPlaying =true;
    setTimeout(function () {
        audio.pause();
        audio.currentTime = 0;
        isPlaying =false;
        document.querySelectorAll('.floating-image').forEach(img => img.classList.add('hidden'));
    }, duration);
}
function createFloatingImages(img1, img2) {
    const numImages = 30; 
    const imageUrls = [img1,img2]; 
    const container = document.getElementById('image-container');

    for (let i = 0; i < numImages; i++) {
        let img = document.createElement('img');
        img.src = imageUrls[i % imageUrls.length];
        img.className = 'floating-image';
        img.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        img.style.top = `${Math.random() * 100}vh`; // Random vertical position
        img.style.animationDuration = `${Math.random() * 10 + 5}s`; // Randomize animation duration
        container.appendChild(img);
    }
}

let alphabet = document.addEventListener("keydown", (e) => {
    if(isPlaying){
        return;
    }
    let keypressed = e.key;
    let keyP = keypressed.toLocaleLowerCase();

    switch (keyP) {
        case "a": playAudio('audio.mp3', 14, '7s'); createFloatingImages('images/apple.jpg','images/ant.png'); break;
        case "b": playAudio('audio.mp3', 21, '7s'); break;
        case "c": playAudio('audio.mp3', 32, '7s'); break;
        case "d": playAudio('audio.mp3', 39, '6s'); break;
        case "e": playAudio('audio.mp3', 49, '6s'); break;
        case "f": playAudio('audio.mp3', 50, '12s'); break;
        case "g": playAudio('audio.mp3', 65, '8s'); break;
        case "h": playAudio('audio.mp3', 74, '6s'); break;
        case "i": playAudio('audio.mp3', 78, '12s'); break;
        case "j": playAudio('audio.mp3', 91, '6s'); break;
        case "k": playAudio('audio.mp3', 99, '6s'); break;
        case "l": playAudio('audio.mp3', 106, '7s'); break;
        case "m": playAudio('audio.mp3', 115, '6s'); break;
        case "n": playAudio('audio.mp3', 112, '7s'); break;
        case "o": playAudio('audio.mp3', 130, '6s'); break;
        case "p": playAudio('audio.mp3', 137, '8s'); break;
        case "q": playAudio('audio.mp3', 151, '6s'); break;
        case "r": playAudio('audio.mp3', 157, '7s'); break;
        case "s": playAudio('audio.mp3', 166, '7s'); break;
        case "t": playAudio('audio.mp3', 173, '7s'); break;
        case "u": playAudio('audio.mp3', 183, '7s'); break;
        case "v": playAudio('audio.mp3', 190, '7s'); break;
        case "w": playAudio('audio.mp3', 200, '5s'); break;
        case "x": playAudio('audio.mp3', 205, '7s'); break;
        case "y": playAudio('audio.mp3', 215, '7s'); break;
        case "z": playAudio('audio.mp3', 222, '10s'); break;

    }
})
