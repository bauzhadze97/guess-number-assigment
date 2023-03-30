const inputNumber = document.querySelector('.guess');
const Checkbutton = document.querySelector('.check');
const randomNumber = Math.floor(Math.random() * 100) + 1;
const AgainButton = document.querySelector('.again');
let score = 0;
let highscore = 0;

Checkbutton.addEventListener('click', function () {
    const GuessNumber = Number(inputNumber.value);
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
    score ++;
    highscore ++;
    document.querySelector('.score').textContent = score;
  } else if (GuessNumber < randomNumber) {
    document.querySelector('.message').textContent = "📉 Too low!";
    score ++;
    highscore ++;
    document.querySelector('.score').textContent = score;
  }
});


AgainButton.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
    score = 0;
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 0;
    inputNumber.value = '';
});


