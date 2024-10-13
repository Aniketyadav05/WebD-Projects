// Pseudo Code:
// 1. Initialize quiz data with questions, options, and correct answers.
// 2. Define variables for quiz elements, current question, and score.
// 3. Load Quiz Function: 
//    - Display the current question and options.
//    - Uncheck all options when loading a new question.
// 4. Get Selected Option Function: 
//    - Loop through the radio buttons to check which option is selected.
// 5. Submit Button Logic: 
//    - When the "Submit" button is clicked, check if an option is selected.
//    - If correct, increment the score.
//    - Load the next question or display the final result if it's the last question.
// 6. Final Score Display: 
//    - Show the final score and a "Try Again" button to reload the quiz.


// Quiz data - Contains the questions, options, and the correct answers
const quizData = [
    {
        question: "What does HTML stand for?", // Question 1
        options: [
            "Hypertext Markup Language",
            "Hypertex Marup language",
            "Hypertext Markp language",
            "Hypertext Markup langue",
        ],
        correct: 0, // Correct answer is the first option (index 0)
    },
    {
        question: "What is the full form of CSS?", // Question 2
        options: [
            "Cascading Style Sheets",
            "Cascading Style Syntax",
            "Computer Style Sheets",
            "Coded Style Sheets",
        ],
        correct: 0, // Correct answer is the first option (index 0)
    },
    // Other questions omitted for brevity...
];

// Select quiz elements from the DOM
const quizSection = document.querySelector(".quiz-section"); // Main quiz container
const quiz = document.querySelector("#quiz"); // The quiz box
const answer = document.querySelectorAll(".answer"); // All radio button options
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll(
    '#question,#option_1,#option_2,#option_3,#option_4'
); // Select question and option labels
const submitBtn = document.querySelector('#submit'); // Submit button

let currentQuiz = 0; // Tracks the current quiz question
let score = 0; // Tracks the user's score

// Function to load the quiz question and options
const loadQuiz = () => {
    // Destructure current question and options from quiz data
    const { question, options } = quizData[currentQuiz]; 
    
    // Set the question text in the DOM
    questionElm.innerText = question; 
    
    // Set the text for each option
    options.forEach((curOption, index) => window[`option_${index + 1}`].innerText = curOption);
    
    // Uncheck all the options when loading a new question
    answer.forEach(option => option.checked = false);
}

// Function to get the selected option index
const getSelectedOption = () => {
    let ans_index;
    // Loop through all options and check which one is selected
    answer.forEach((curOption, index) => {
        if (curOption.checked) { // If an option is checked, store its index
            ans_index = index;
        }
    });
    return ans_index; // Return the selected index
}

// Add event listener to the submit button
submitBtn.addEventListener("click", function () {
    const selectedOption = getSelectedOption(); // Get the selected option

    if (selectedOption !== undefined) { // If an option is selected
        const correctOption = quizData[currentQuiz].correct; // Get the correct answer index for the current question
        if (selectedOption === correctOption) { // Check if the selected option is correct
            score++; // Increment score if correct
        }

        // Move to the next question
        currentQuiz++;

        // If not the last question, load the next question
        if (currentQuiz !== quizData.length) {
            loadQuiz(); // Load the next question
        } else { 
            // If it was the last question, display the final result
            quizSection.innerHTML = `
                <div class="result">
                    <h2> 🏆🏆 Your score was: ${score}/${quizData.length} Correct Answers </h2>
                    <p>CONGRATULATIONS ON COMPLETING THE QUIZ!! 🥳🎉🎊 </p>
                    <button class="btn"  onclick="location.reload()">Try Again</button>
                </div>
            `;
        }
    } else {
        // If no option was selected, alert the user
        alert("Please select an answer before submitting!");
    }
});

// Initial function call to load the first quiz question
loadQuiz();
