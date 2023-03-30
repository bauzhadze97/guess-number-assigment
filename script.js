const inputNumber = document.querySelector('.guess');
const Checkbutton = document.querySelector('.check');
const randomNumber = Math.floor(Math.random() * 100) + 1;
const AgainButton = document.querySelector('.again');

Checkbutton.addEventListener('click', function () {
    const GuessNumber = Number(inputNumber.value);
    let score = 0;
    let highscore = 0;
   if (!GuessNumber) {
        document.querySelector('.message').textContent = "⛔ No number!";
    }
  else if (GuessNumber === randomNumber) {
    score ++;
    highscore ++;
    document.body.style.backgroundColor = '#60b347';    
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.message').textContent = "🎉 Correct number!";
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
  } else if (GuessNumber > randomNumber) {
    document.querySelector('.message').textContent = "📈 Too high!";
  } else if (GuessNumber < randomNumber) {
    document.querySelector('.message').textContent = "📉 Too low!";
  }
});

AgainButton.addEventListener('click', function () {
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.highscore').textContent = 0;
    inputNumber.value = '';
});