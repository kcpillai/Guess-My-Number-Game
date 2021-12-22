'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// The Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //  When no number is entered
  if (!guess) {
    displayMessage('⛔No Number!⛔');

    // When Player Wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!🎉');
    document.querySelector('.number').textContent = secretNumber;

    // Changing the background to green when game is won
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Changing the width of the number class when the game is won
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is differnt than secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      //   Player loses
    } else {
      displayMessage('💥 You lost the game!');
    }
    document.querySelector('.score').textContent = score;
  }
});
