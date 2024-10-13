// Pseudocode:
// 1. Define an array `reviews` containing objects with details (id, name, job, img, text).
// 2. Select HTML elements to display review details (image, name, job, text).
// 3. Define a variable `currentItem` to track the current review index, starting at 0.
// 4. Listen for the `DOMContentLoaded` event to display the initial review once the page loads.
// 5. Create a function `showData` that:
//    - Receives an index.
//    - Displays the review corresponding to that index.
// 6. Add functionality for the next button:
//    - On click, increase `currentItem` by 1.
//    - If `currentItem` exceeds the length of the array, reset it to 0.
//    - Call `showData` to display the new review.
// 7. Add functionality for the previous button:
//    - On click, decrease `currentItem` by 1.
//    - If `currentItem` is less than 0, set it to the last review index.
//    - Call `showData` to display the new review.
// 8. Add functionality for the random button:
//    - On click, generate a random index and display the corresponding review.

const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'person1.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'person2.jpg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'person3.jpg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'person4.jpg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    },
];

// Grabbing the HTML elements where the data will be displayed
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

// Grabbing the buttons for next, previous, and random functionality
const prevBtn = document.querySelector(".prev-btn") 
const nextBtn = document.querySelector(".next-btn") 
const randomBtn = document.querySelector(".random-btn") 

// This variable keeps track of the current review item being displayed
let currentItem = 0;

// When the page loads, the `DOMContentLoaded` event ensures that we show the first review
window.addEventListener("DOMContentLoaded", function(){
    // Display the first review initially
    showData(currentItem)
})

// Function to display the data for a specific review item
function showData(person) {
    // Get the review object from the `reviews` array based on the index
    const item = reviews[person]
    
    // Set the image, author name, job, and review text dynamically in the HTML
    img.src = item.img
    author.textContent = item.name;
    job.textContent = item.job
    info.textContent = item.text;
}

// Adding an event listener for the 'next' button
nextBtn.addEventListener('click', function() {
    // Increment the currentItem to go to the next review
    currentItem++;
    // If the currentItem exceeds the array length, reset it back to 0 (loop back to the first review)
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    // Display the updated review
    showData(currentItem);
})

// Adding an event listener for the 'previous' button
prevBtn.addEventListener('click', function() {
    // Decrement the currentItem to go to the previous review
    currentItem--;
    // If the currentItem is less than 0, set it to the last review (loop back to the last review)
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    // Display the updated review
    showData(currentItem);
})

// Adding an event listener for the 'random' button
randomBtn.addEventListener('click', function() {
    // Generate a random index to display a random review
    currentItem = Math.floor(Math.random() * reviews.length);
    // Display the randomly selected review
    showData(currentItem);
})
