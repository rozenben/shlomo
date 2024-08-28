import {
  sentenceQueue,
  fetchSentencesFromAPI,
  fetchSentencesFromFile,
} from "./sentenceQueue.js";

import { sentencesFile } from "./sentences.js";

let currentSentence;
let currentScore = 0;
let highScore = 0;
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
const englishLevel = document.getElementById("english-level");
const gameTimeElement = document.getElementById("game-time");
var selectedLevel = 4;
var gameTime = (highScore = localStorage.getItem("gameTime") || 120);
gameTimeElement.setAttribute("value", gameTime);
let timeLeft = gameTime;
startGameButton.addEventListener("click", startGame);
userInput.addEventListener("input", checkInput);

document.getElementById("start-game").addEventListener("click", function () {
  document.getElementById("game-area").classList.add("visible");
});

function startGame() {
  selectedLevel = englishLevel.value;
  gameTime = gameTimeElement.value;
  localStorage.setItem("gameTime", gameTime);
  startGameButton.style.display = "none";
  gameArea.style.display = "block";
  currentScore = 0;
  timeLeft = gameTime;
  userInput.focus();
  updateScore();
  //   fetchSentencesFromAPI().then(() => {
  //     nextSentence();
  //     startTimer();
  //   });
  nextSentence();
  startTimer();
}

function nextSentence() {
  // sentenceQueue.checkAndRefill();
  // currentSentence = sentenceQueue.dequeue();
  // console.log(
  //   'sentencesFile["level" + selectedLevel].length: ' +
  //     sentencesFile["level" + selectedLevel].length
  // );

  let randonIndex = Math.floor(
    Math.random() * sentencesFile["level" + selectedLevel].length
  );
  console.log("randonIndex: " + randonIndex);
  currentSentence = sentencesFile["level" + selectedLevel][randonIndex];
  if (currentSentence) {
    englishSentence.textContent = currentSentence.english;
    hebrewTranslation.textContent = currentSentence.hebrew;
    speakText(currentSentence.english);
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

    if (input[i].toUpperCase() === target[i].toUpperCase()) {
      span.style.color = "green";
    } else {
      span.style.color = "red";
    }

    feedback.appendChild(span);
  }

  if (input.toUpperCase() === target.toUpperCase()) {
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
  // alert(`המשחק נגמר! הניקוד שלך: ${currentScore}`);
}

function speakText(text) {
  // Check if the browser supports Web Speech API
  if ("speechSynthesis" in window) {
    // Create a new speech object
    const utterance = new SpeechSynthesisUtterance(text);

    // Set the language to English
    utterance.lang = "en-US";

    // Speak the text
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("Your browser does not support text-to-speech.");
  }
}

// טעינת השיא מהאחסון המקומי
highScore = localStorage.getItem("highScore") || 0;
bestScoreElement.textContent = highScore;
