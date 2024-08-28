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
const currentLevelElement = document.getElementById("current-level");
const levelSelect = document.createElement("select");
levelSelect.id = "level-select";
const gameTimeInput = document.getElementById("game-time");

// Add level options
const levels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
levels.forEach((level, index) => {
  const option = document.createElement("option");
  option.value = index + 1;
  option.textContent = level;
  levelSelect.appendChild(option);
});

// Insert level select before the current level span
currentLevelElement.parentNode.insertBefore(levelSelect, currentLevelElement);
currentLevelElement.style.display = "none"; // Hide the static level text

// Load saved level and game time from localStorage
var selectedLevel = parseInt(localStorage.getItem("selectedLevel")) || 1;
var gameTime = parseInt(localStorage.getItem("gameTime")) || 120;
let timeLeft = gameTime;

// Set initial values
levelSelect.value = selectedLevel;
gameTimeInput.value = gameTime;

startGameButton.addEventListener("click", startGame);
userInput.addEventListener("input", checkInput);
levelSelect.addEventListener("change", function () {
  selectedLevel = parseInt(this.value);
  localStorage.setItem("selectedLevel", selectedLevel);
  currentLevelElement.textContent = levels[selectedLevel - 1];
});

gameTimeInput.addEventListener("change", function () {
  gameTime = parseInt(this.value);
  localStorage.setItem("gameTime", gameTime);
});

function startGame() {
  gameArea.style.display = "block";
  startGameButton.style.display = "none";
  currentScore = 0;
  timeLeft = gameTime;
  userInput.value = "";
  userInput.focus();
  updateScore();
  nextSentence();
  startTimer();
  gameArea.classList.add("visible");
}

function nextSentence() {
  let randomIndex = Math.floor(
    Math.random() * sentencesFile["level" + selectedLevel].length
  );
  currentSentence = sentencesFile["level" + selectedLevel][randomIndex];
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
  alert(`המשחק נגמר! הניקוד שלך: ${currentScore}`);
}

function speakText(text) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("Your browser does not support text-to-speech.");
  }
}

// Load high score from local storage
highScore = parseInt(localStorage.getItem("highScore")) || 0;
bestScoreElement.textContent = highScore;

// Set initial level text
currentLevelElement.textContent = levels[selectedLevel - 1];
