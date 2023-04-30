'use strict';
let rollDice = document.querySelector('.btn--roll');
let hold = document.querySelector('.btn--hold');

const btnNew = document.querySelector('.btn--new');
const player1 = document.querySelector('#name--0');
const player2 = document.querySelector('#name--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let playing = true;
const scores = [0, 0];

let activePlayer = 0;

let currentScore = 0;
let totalScore = currentScore;
diceEl.classList.add('hidden');

rollDice.addEventListener('click', function () {
  const dice1 = Math.trunc(Math.random() * 6) + 1;
  //   displaydice
  diceEl.src = `dice-${dice1}.png`;
  diceEl.classList.remove('hidden');
  //   check for rolled 1

  if (dice1 !== 1) {
    currentScore += dice1;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
hold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  console.log(scores[0], scores[1]);
  currentScore = 0;

  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--winner');
    rollDice.classList.add('hidden');
    hold.classList.add('hidden');
    diceEl.classList.add('hidden');

    console.log(document.querySelector(`#name--${activePlayer}`).textContent);
    console.log(
      document.querySelector(`#name--${activePlayer}`).textContent +
        ' is the Winner'
    );
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
btnNew.addEventListener('click', function () {
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  diceEl.classList.add('hidden');
  let activePlayer = 0;
  rollDice.classList.remove('hidden');
  hold.classList.remove('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
});
