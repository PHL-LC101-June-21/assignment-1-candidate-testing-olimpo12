const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName="Jeff";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space?";
let correctAnswer="Sally Ride";
let candidateAnswer="Jonah";
let questions= ["Who was the first American Woman in space?","What color is the moon?","What is the color of the sun?","Who was the first astronaut on the moon?", "Who was the 2nd astronaut on the moon?"];
let correctAnswers= ["Sally Ride","White","Yellow","Neil Armstrong", "Buzz Aldrin"];
let candidateAnswers=["Sally Ride", "Blue", "Yellow", "Neil Armstrong","Buzz Lightyear"];
let dash= "-----------------------------";


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName= input.question("What is your name?");
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


candidateAnswers[1]= input.question(questions[1]);
console.log("Your answer was: "+candidateAnswers[1]);

if(candidateAnswers[1]==correctAnswers[1]){console.log("True!");
}
else{console.log("False!\nThe correct answer is: "+ correctAnswers[1]);
}

console.log(dash);

candidateAnswers[2]= input.question(questions[2]);
if(candidateAnswers[2]==correctAnswers[2]){console.log("True!");
}
else{console.log("False!\nThe correct answer is: "+ correctAnswers[2]);
}
console.log(dash);

candidateAnswers[3]= input.question(questions[3]);
if(candidateAnswers[3]==correctAnswers[3]){console.log("True!");
}
else{console.log("False!\nThe correct answer is: "+ correctAnswers[3]);
}
console.log(dash);

candidateAnswers[4]= input.question(questions[4]);
if(candidateAnswers[4]==correctAnswers[4]){console.log("True!");
}
else{console.log("False!\nThe correct answer is: "+ correctAnswers[4]);
}
console.log(dash);

candidateAnswers[0]=input.question("What is the name of the first Woman in space?");
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

if(candidateAnswers[0]==correctAnswer){console.log("True!");
}
else{console.log("False!\nThe correct answer is: "+ correctAnswer);
}

}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Greetings "+candidateName+"!");
  console.log(dash);
askQuestion();


  gradeQuiz(this.candidateAnswers);


let correctResponses= Number(0);

if (candidateAnswers[1] === correctAnswers[1])
{correctResponses = correctResponses +1;
}
if (candidateAnswers[2] === correctAnswers[2])
{correctResponses = correctResponses +1;
}
if (candidateAnswers[3] === correctAnswers[3])
{correctResponses = correctResponses +1;
}
if (candidateAnswers[4] === correctAnswers[4])
{correctResponses = correctResponses +1;
}
if (candidateAnswers[5] === correctAnswers[5])
{correctResponses = correctResponses +1;
}

let percentage = correctResponses/questions.length*100;

{console.log("Final Grade: "+ (percentage));
}

if (percentage > 70) {
console.log("You pass!")
} 
else {
console.log("Failing Grade.")
}
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
