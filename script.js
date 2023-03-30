const inputNumber = document.querySelector('.guess').value;
const Checkbutton = document.querySelector('.check');
const randomNumber = Math.floor(Math.random() * 100) + 1;
const score = document.querySelector('.score');
console.log(randomNumber);


Checkbutton.addEventListener('click', () => {
    if (inputNumber === randomNumber) {
        score.textContent = 'You Win!';
    } else if (inputNumber > randomNumber) {
        score.textContent = 'You Lose!';
    } else if (inputNumber < randomNumber) {
        score.textContent = 'You lose!';
    }
});

