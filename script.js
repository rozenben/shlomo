import { sentenceQueue, fetchSentencesFromAPI } from "./sentenceQueue.js";

let currentSentence;
let currentScore = 0;
let highScore = 0;
let timeLeft = 60;
let timerInterval;

const startGameButton = document.getElementById("start-game");
const gameArea = document.getElementById("game-area");
const englishSentence = document.getElementById("english-sentence");
const hebrewTranslation = document.getElementById("hebrew-translation");
const userInput = document.getElementById("user-input");
const feedback = document.getElementById("feedback");
const currentScoreElement = document.getElementById("current-score");
const bestScoreElement = document.getElementById("best-score");
const timeLeftElement = document.getElementById("time-left");

startGameButton.addEventListener("click", startGame);
userInput.addEventListener("input", checkInput);

function startGame() {
  startGameButton.style.display = "none";
  gameArea.style.display = "block";
  currentScore = 0;
  timeLeft = 60;
  updateScore();
  //   fetchSentencesFromAPI().then(() => {
  //     nextSentence();
  //     startTimer();
  //   });
  nextSentence();
  startTimer();
}

function nextSentence() {
  sentenceQueue.checkAndRefill();
  currentSentence = sentenceQueue.dequeue();
  if (currentSentence) {
    englishSentence.textContent = currentSentence.english;
    hebrewTranslation.textContent = currentSentence.hebrew;
    userInput.value = "";
    feedback.innerHTML = "";
  } else {
    endGame();
  }
}

function checkInput() {
  const input = userInput.value;
  const target = currentSentence.english;
  feedback.innerHTML = "";

  for (let i = 0; i < input.length; i++) {
    const span = document.createElement("span");
    span.textContent = target[i] || " ";

    if (input[i] === target[i]) {
      span.style.color = "green";
    } else {
      span.style.color = "red";
    }

    feedback.appendChild(span);
  }

  if (input === target) {
    currentScore += target.length;
    updateScore();
    nextSentence();
  }
}

function updateScore() {
  currentScoreElement.textContent = currentScore;
  if (currentScore > highScore) {
    highScore = currentScore;
    bestScoreElement.textContent = highScore;
    localStorage.setItem("highScore", highScore);
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timeLeftElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  gameArea.style.display = "none";
  startGameButton.style.display = "block";
  alert(`המשחק נגמר! הניקוד שלך: ${currentScore}`);
}

// טעינת השיא מהאחסון המקומי
highScore = localStorage.getItem("highScore") || 0;
bestScoreElement.textContent = highScore;
