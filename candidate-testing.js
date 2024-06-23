
const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
const readlineSync = require( 'readline-sync' );

// TODO 1.1a: Define candidateName // 
<<<<<<< HEAD
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions;
let correctAnswers = "Sally Ride";
let candidateAnswers;
=======
let candidateName = input.question("Enter your name: ");
console.log(`Candidate Name: ${candidateName}`);

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
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

let candidateAnswers = [];  // Ensure candidateAnswers is declared

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



//TODO: Variables for Part 2
>>>>>>> f03ea76 (graded assignment 1)


"Who was the first American woman in space? ",
"What year was the first moon landing? ",
"What is the capital of France? ",
"What is the largest planet in our solar system? "
"what is the chemical symbol for water? "

let correctAnswer = "Sally Ride"

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  function askQuestion() {
<<<<<<< HEAD
    const readlineSync = require( 'readline-sync');
=======
>>>>>>> f03ea76 (graded assignment 1)
    candidateName = readlineSync.question("Please enter your name: ");
  }

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  function askQuestion() {
<<<<<<< HEAD
    const readlineSync = require('readline-sync');
=======
>>>>>>> f03ea76 (graded assignment 1)
    candidateAnswer = readlineSync.question(question);
  }
for (let i =0; i < questions.length; i++) {
  candidateAnswer =
  readlineSync.question(question[i]);
    candidateAnswer.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  function gradedQuiz(candidateAnswer) {
    if (candidateAnswer.toLowerCase() ===
    correctAnswer.toLowerCase()) {
      console.log("Correct!");
    } else {
      console.log('Incorrect. The correct answer is. ');
    }
  }

  function gradedQuiz(candidateAnswer) {
    let grade = 0;
    for (let i = 0; i < correctAnswer.length; i++) {
      if (candidateAnswer[i].toLowerCase() ===
  correctAnswer[i].toLowerCase()) {
    grade += 20;
    }
  }
   //Return the grade
   return grade;
}

//Function to run the entire program
function runProgram() {
  askForName();
  askQuestion();
  let grade = gradeQuiz(candidateAnswer);
  console.log('You scored 90 out if 100.');
}

// Run the program
runProgram();



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
r

  return grade;
  return candidateAnswer.toLowerCase() ===
  correctAnswer.toLowerCase() ? 1 : 0;
  }

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
console.log('Hell0, !');
<<<<<<< HEAD
=======

>>>>>>> f03ea76 (graded assignment 1)
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

<<<<<<< HEAD
=======




>>>>>>> f03ea76 (graded assignment 1)
