// Initial grade data
const gradeData = [
    { "A++": 10 },
    { "A+": 9.5 },
    { "A": 9 },
    { "B+": 8 },
    { "B": 7 },
    { "C+": 6 },
    { "C": 5 },
    { "D+": 4 },
    { "D": 3 },
    { "E+": 2 },
    { "E": 1 },
    { "F": 0 }
];

let totalGradesSum = 0; // Variable to hold the sum of grades
let totalSubjectsCount = 0; // Variable to count the number of grades

const answer = document.querySelector(".answer")
// Populate the select options with grades from gradeData
const gradeSelect = document.getElementById('grade');
gradeData.forEach(gradeObj => {
    for (const [grade, value] of Object.entries(gradeObj)) {
        const option = document.createElement('option');
        option.value = value; // Use the numeric value for the grade
        option.textContent = grade; // Use the grade text as display

    }
});

// Function to add grade to the table and update the sum and count
document.getElementById('add').addEventListener('click', function () {
    // Get the selected grade text and corresponding grade value
    const gradeText = gradeSelect.options[gradeSelect.selectedIndex].text;
    const gradeValue = gradeData.find(item => Object.keys(item)[0] === gradeText)[gradeText];


    // Check if a valid grade is selected
    if (gradeValue >= 0) {
        answer.style.visibility = "hidden";
        const percentageElem = document.getElementById('percentage');
        percentageElem.innerHTML = "Calculate"
        totalGradesSum += gradeValue; // Add the selected grade value to the sum
        totalSubjectsCount++; // Increment the subjects count

        // Create a new row for the grade in the table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${totalSubjectsCount}</td><td>${gradeSelect.options[gradeSelect.selectedIndex].text}</td>`;
        document.getElementById('tbody').appendChild(newRow);

        // Clear the selection
        gradeSelect.selectedIndex = 0; // Reset the select to the default option

        console.log(`Total Grades Sum: ${totalGradesSum}`); // Debug: Check the total grades sum
        console.log(`Total Subjects Count: ${totalSubjectsCount}`); // Debug: Check the subjects count
    } else {
        alert('Please select a valid grade');
    }
});



// Clear button functionality
document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('tbody').innerHTML = ''; // Clear the table body
    totalGradesSum = 0; // Reset the total grades sum
    totalSubjectsCount = 0; // Reset the subjects count
    answer.style.visibility = "hidden";
    const percentageElem = document.getElementById('percentage');
        percentageElem.innerHTML = "Calculate"
   
});
// Function to calculate CGPA
document.getElementById('calc-gp').addEventListener('click', function () {
    if (totalSubjectsCount > 0) {
        const cgpa = totalGradesSum / totalSubjectsCount; // Calculate CGPA

        // Determine the message based on CGPA
        let message = '';
        answer.style.visibility = "visible";
        const percent = document.getElementById('percent'); // Ensure you have this element

        if (cgpa >= 7) {
            message = `Congratulations 🎉🎉🏆 You Got ${cgpa.toFixed(2)}`;
            percent.innerHTML = "WANT TO KNOW YOUR PERCENTAGE?";
            const percentage = document.getElementById('percentage');
            // Store the CGPA for later use
            percentage.dataset.cgpa = cgpa;
        } else if (cgpa < 7 && cgpa >= 6) {
            message = `Your CGPA is ${cgpa.toFixed(2)}. You can do better 😊`;
            percent.innerHTML = "WANT TO KNOW YOUR PERCENTAGE?";
            percentage.dataset.cgpa = cgpa;
        } else {
            message = `Your CGPA is ${cgpa.toFixed(2)}. Don't Worry😟 A sheet of paper can't decide your future.`;
            percent.innerHTML = "WANT TO KNOW YOUR PERCENTAGE?";
            percentage.dataset.cgpa = cgpa;
        }

        // Update the result div with the message
        document.getElementById('result').innerHTML = message;
    } else {
        document.getElementById('result').innerHTML = 'No grades added to calculate CGPA';
    }
});
// Function to calculate percentage from CGPA
document.getElementById('percentage').addEventListener('click', function () {
    // Get the stored CGPA value from the percentage element
    const percentageElement = document.getElementById('percentage');
    const storedCgpa = parseFloat(percentageElement.dataset.cgpa); // Retrieve the stored CGPA
    
    if (!isNaN(storedCgpa)) {
        const percentage = storedCgpa * 9.5; // Calculate percentage from CGPA
        percentageElement.innerHTML = `Your Percentage is: ${percentage.toFixed(2)}%`; // Display the percentage
    } else {
        percentageElement.innerHTML = 'Please calculate CGPA first to get the percentage.'; // Alert if CGPA not calculated
    }
});
