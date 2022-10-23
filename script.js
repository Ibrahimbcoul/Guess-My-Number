'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  let score = Number(document.querySelector('.score').textContent);

  if (!guess) {
    displayMessage(`🚫No number is typed!`);
  }
  // When guess is right
  else if (guess === secretNumber) {
    displayMessage(`✔Correct number!`);
    document.querySelector('body').style.backgroundColor = '#028A0F';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // When Score is above 0
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      // When Score reaches 0
      displayMessage(`❌Game Over! You have lost!❌`);
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#B90E0A';
    }
  }
});

// Restart the game by pressing the Again button

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //   document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
