'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const showScore = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    showMessage('NO NUMBER!');

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    showMessage('YOU GOT IT');
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      showMessage(guess > secretNumber ? 'TOO HIGH' : 'TOO LOW');

      score = score - 1;
      showScore(score);
    } else {
      showMessage('GAME OVER');
    }
  }
  //guess is too low
  /*
  else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = 'TOO LOW';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
    //guess is too high
  } else if (guess > secretNumber || guess > secretNumber2) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = 'TOO HIGH';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
  }*/
  // document.querySelector('.guess').value = '';
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  showMessage('Start guessing...');
  showScore(20);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  console.log(secretNumber);
  score = 20;
});
