const input = require('readline-sync');

// 1. Ask the candidate (user) to enter their name
let candidateName = input.question("Enter your name: ");
console.log(`Candidate Name: ${candidateName}`);

// Define the questions and correct answers
let questions = [
    "Who was the first American woman in space? ",
    "What year was the first moon landing? ",
    "What is the capital of France? ",
    "What is the largest planet in our solar system? ",
    "What is the chemical symbol for water? "
];

let correctAnswers = [
    "Sally Ride",
    "1969",
    "Paris",
    "Jupiter",
    "H2O"
];

let candidateAnswers = [];  // Ensure candidateAnswers is declared and initialized

// Set individual variables for the first question and its answer
let question = questions[0];
let correctAnswer = correctAnswers[0];
let candidateAnswer = "";

// 3. Collect the candidate's answers
for (let i = 0; i < questions.length; i++) {
    let userAnswer = input.question((i + 1) + ") " + questions[i]);
    candidateAnswers.push(userAnswer);
    if (i === 0) {
        candidateAnswer = userAnswer;  // Store the first answer in candidateAnswer for testing
    }
}

// Debugging output to ensure correct values
console.log(`First Question: ${question}`);
console.log(`Correct Answer for First Question: ${correctAnswer}`);
console.log(`Candidate's Answer for First Question: ${candidateAnswer}`);

// 4. Check those answers for accuracy (case insensitive equality check)
let correctCount = 0;
for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].trim().toLowerCase() === correctAnswers[i].toLowerCase()) {
        correctCount++;
    }
}

// 5. Calculate the candidate’s overall percentage
let percentage = (correctCount / questions.length) * 100;

// 6. Determine if the candidate did well enough to enter our program (need >= 80% to pass)
// 7. Display the results
console.log(`\nCandidate Name: ${candidateName}`);
for (let i = 0; i < questions.length; i++) {
    console.log(`${i + 1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
}

console.log(`>>> Overall Grade: ${percentage.toFixed(2)}% (${correctCount} of ${questions.length} responses correct) <<<`);
let status = percentage >= 80 ? "PASSED" : "FAILED";
console.log(`>>> Status: ${status} <<<`);

// Export the necessary variables for the testing framework
module.exports = {
    candidateName: candidateName,
    question: question,
    correctAnswer: correctAnswer,
    candidateAnswer: candidateAnswer,
    questions: questions,
    correctAnswers: correctAnswers,
    candidateAnswers: candidateAnswers,
    correctCount: correctCount,
    percentage: percentage,
    status: status
};
