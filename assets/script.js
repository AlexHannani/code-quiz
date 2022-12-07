var startButton = document.getElementById("starting-button");
var timeEl = document.getElementById("time-count");
var nextButton = document.getElementById("next-button");
var randomQ, currentQ;
var answerEL = document.getElementById("answers");
var scoreBoard = document.getElementById("submit-form");
var userScore = JSON.parse(localStorage.getItem("scores")) || [];
var scoreLink = document.getElementById("hs-link");
var restartButton = document.getElementById("restart-button");
var timeLeft = 90;
var startingBlock = document.getElementById("starting-block");
var timeClock;
var qContainer = document.getElementById("question-block");
var questionEl = document.getElementById("question");
var verifyEl = document.getElementById("verify");
var scoreCont = document.getElementById("score-container");
var count = 0;
var submitBtn = document.getElementById("submit-button");
var resetScore = document.getElementById("clear-score");

var questions = [
  {
    question: "What is the capital of Italy?",
    answers: [
      {text: "1. <Venice>", result: false },
      {text: "2. <Florence>", result: false },
      {text: "3. <Rome>", result: true },
      {text: "4. <Naples>", result: false },
    ],
  },
  {
    question: "Which river flows through London?",
    answers: [
      {text: "1. <River Severn>", result: false },
      {text: "2. <River Trent>", result: false },
      {text: "3. <River Thames>", result: true },
      {text: "4. <River Great Ouse>", result: false },
    ],
  },
  {
    question: "On which continent is the Sahara Desert Located?",
    answers: [
      {text: "1. <Asia>", result: false },
      {text: "2. <South America>", result: false },
      {text: "3. <Africa>", result: true },
      {text: "4. <Europe>", result: false },
    ],
  },
  {
    question: "How tall is Mount Everest?",
    answers: [
      {text: "1. <6,849 m>", result: false },
      {text: "2. <7,849 m>", result: false },
      {text: "3. <8,849 m>", result: true },
      {text: "4. <9,849 m>", result: false },
    ],
  },
  {
    question: "In which US state can you find the city of Chicago?",
    answers: [
      {text: "1. <Mississippi>", result: false },
      {text: "2. <Missouri>", result: false },
      {text: "3. <Illinois>", result: true },
      {text: "4. <Arizona>", result: false },
    ],
  },
  {
    question: "What is the capital of the United Arab Emirates?",
    answers: [
      {text: "1. <Dubai>", result: false },
      {text: "2. <Abu Dhabi>", result: true },
      {text: "3. <Sharjah>", result: false },
      {text: "4. <Ajman>", result: false },
    ],
  },
  {
    question: "What is the smallest country in the world?",
    answers: [
      {text: "1. <Andorra>", result: false },
      {text: "2. <Luxembourg>", result: false },
      {text: "3. <Vatican City>", result: true },
      {text: "4. <Belgium>", result: false },
    ],
  },
  {
    question: "How many countries are there in the world?",
    answers: [
      {text: "1. <105>", result: false },
      {text: "2. <145>", result: false },
      {text: "3. <195>", result: true },
      {text: "4. <245>", result: false },
    ],
  }
]

startButton.addEventListener("click", gameStart);
nextButton.addEventListener("click", () => {
  currentQ++;
  nextQuestion();
})

// Game Timer
function time() {
  timeLeft--;
  timeEl.textContent = "Time: " + timeLeft;
  if (timeLeft === 1) {
    scoreSaved();
  }
}

