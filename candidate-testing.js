const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";



//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? ",
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3",
];





function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question( 'Please enter your name:');
  console.log("\nCandidate's name is: " + candidateName);
}


let candidateAnswers =[];
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    for (let i = 0; i < questions.length; i++) {
      let candidateAnswer = input.question(`${i + 1}) ${questions[i]}`);
      candidateAnswers [i] = candidateAnswer;
    }
  }
    



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log(`\nCandidate Name: ${candidateName}\n`);
  
  let numCorrect = 0;

  for (let i = 0; i < questions.length; i++) {
    console.log(`${i + 1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);

    if (candidateAnswers[i] && candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numCorrect++;
    }
  }

  let grade = (numCorrect / questions.length) * 100;
  console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of ${questions.length} responses correct) <<<`);
  console.log(`>>> Status: ${grade >= 80 ? 'PASSED' : 'FAILED'} <<<`);



 
 //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello, ${candidateName} Welcome to the quiz!\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}



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