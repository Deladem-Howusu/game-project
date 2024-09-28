// Final Project

const welcomeMessage = function () {
  alert("Welcome to the game 😃");
};

let questionArray = [
  {
    question: "What is the largest country?",
    optionArr: ["A: Ghana", "B: Nigeria", "C: Russia", "D: England"],
    Answer: "Russia",
  },
  {
    question: "Which African country has the highest population ?",
    optionArr: ["A: Ghana", "B: Nigeria", "C: Russia", "D: England"],
    Answer: "Nigeria",
  },
  {
    question: "Which country has the corrupt government?",
    optionArr: ["A: Ghana", "B: Nigeria", "C: Russia", "D: England"],
    Answer: "Ghana",
  },
  {
    question: "Which country is not an English speaking country?",
    optionArr: ["A: Ghana", "B: Nigeria", "C: Russia", "D: England"],
    Answer: "Russia",
  },
];

let score = 0;

const displayQuestion = function (n) {
  console.log(questionArray[n].question);
  console.log(questionArray[n].optionArr);
};

const getUserAnswer = function () {
  let answer = prompt("Enter your answer");
  return answer.toLowerCase;
};

const checkAnswer = function (ans) {
  if (getUserAnswer() == questionArray[ans].Answer.toLowerCase) {
    score++;
    return true;
  } else {
    return false;
  }
};
const playGame = function () {
  for (let i = 0; i < questionArray.length; i++) {
    displayQuestion(i);
    //getUserAnswer();
    console.log(checkAnswer(i));
  }
};
welcomeMessage();
playGame();
alert(`Your score is ${score}`);
