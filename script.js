// Generar un número aleatorio entre 1 y 20
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 0;
let highscore = 0;

const numberDisplay = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const scoreDisplay = document.querySelector(".score");
const highscoreDisplay = document.querySelector(".highscore");
const messageDisplay = document.querySelector(".message");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");

function displayMessage(message) {
  messageDisplay.textContent = message;
}

function updateScore(newScore) {
  score = newScore;
  scoreDisplay.textContent = score;
}

function updateHighscore(newHighscore) {
  highscore = newHighscore;
  highscoreDisplay.textContent = highscore;
}

// Evento al presionar el botón de "Check"
checkButton.addEventListener("click", function () {
  // Obtener el número ingresado por el usuario
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 20) {
    displayMessage("⛔️ Ingrese un número válido!");
  } else {
    if (guess === secretNumber) {
      displayMessage("🎉 ¡Correcto! Has adivinado el número.");
      updateScore(score + 1);
      if (score > highscore) {
        updateHighscore(score);
      }
      numberDisplay.textContent = secretNumber;
    } else {
      displayMessage(guess > secretNumber ? "📈 Muy alto!" : "📉 Muy bajo!");
    }
  }
});

// Evento al presionar el botón "De Nuevo"
againButton.addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  guessInput.value = "";
  numberDisplay.textContent = "?";
  displayMessage("Adivina...");
});
