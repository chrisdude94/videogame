const targetNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  attempts++;

  if (userGuess === targetNumber) {
    displayResult(`Congratulations! You guessed the number in ${attempts} attempts.`);
    disableInputAndButton();
  } else if (userGuess < targetNumber) {
    displayResult('Too low! Try again.');
  } else {
    displayResult('Too high! Try again.');
  }
}

function displayResult(message) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerText = message;
}

function disableInputAndButton() {
  const guessInput = document.getElementById('guessInput');
  const submitButton = document.querySelector('button');
  guessInput.disabled = true;
  submitButton.disabled = true;
}