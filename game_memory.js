const punteggio = document.getElementById("out1");
const buttons = [];
for (let i = 1; i <= 16; i++) {
  buttons.push(document.getElementById(`button${i}`));
}

let count = 1;
let illuminated_buttons = [];
let userGuesses = [];
let gameOver = false;
let isGuessingAllowed = false;
let guessIndex = 0;

function resetButtons() {
  for (let btn of buttons) {
    btn.style.backgroundColor = "";
  }
}

function illuminate_button(index) {
  const button = buttons[index];
  resetButtons();
  button.style.backgroundColor = "lightblue";
}

function createSequence(callback) {
  illuminated_buttons = [];
  guessIndex = 0;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const random_index = Math.floor(Math.random() * buttons.length);
      illuminated_buttons.push(random_index);
      illuminate_button(random_index);
    }, 1000 * i);
  }

  setTimeout(() => {
    resetButtons();
    isGuessingAllowed = true;
    callback();
  }, 1000 * count);
}

function guessSequence() {
  for (let btn of buttons) {
    btn.removeEventListener("click", handleUserClick);
    btn.addEventListener("click", handleUserClick);
  }
}

function handleUserClick(event) {
  if (gameOver || !isGuessingAllowed) return;

  const btn = event.target;
  btn.style.backgroundColor = "lightblue";
  userGuesses.push(btn);

  if (btn !== buttons[illuminated_buttons[guessIndex]]) {
    gameOver = true;
    alert("Hai sbagliato! Il gioco è finito.");
    resetButtons();
    return;
  }
  
  if (guessIndex === 10) {
    punteggio.innerHTML = "HAI VINTO";
    return;
  }

  guessIndex++;

  if (guessIndex === illuminated_buttons.length) {
    userGuesses = [];
    isGuessingAllowed = false;
    count++;
    punteggio.innerHTML = `Punteggio: ${count - 1}`;
    setTimeout(() => createSequence(guessSequence), 1000);
  }
}

function startGame() {
  punteggio.innerHTML = '';
  gameOver = false;
  isGuessingAllowed = false;
  userGuesses = [];
  count = 1;
  createSequence(guessSequence);
}
