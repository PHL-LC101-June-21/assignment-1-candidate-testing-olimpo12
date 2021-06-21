const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName="Jeff";

////added value to candidateName

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space?";
let correctAnswer="Sally Ride";
let candidateAnswer="Toby";
let questions;
let correctAnswers;
let candidateAnswers;

////defined variables

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName= input.question("What is your name?");

  ////created question and updated variable candidateName value
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
let candidateAnswer=input.question("Who was the first American woman in space?");
info=candidateAnswer
}

////prompted user for answer and added variable to organize value

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

let candidateAnswer=true

if(!candidateAnswer){console.log("False!");
}
else{console.log("True!");
  }

  ////responded to user's question with if, else statement
}
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Greetings "+candidateName+"!");
askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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
