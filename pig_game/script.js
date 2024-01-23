"use strict"

const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
const score0El = document.getElementById("score--0")
const score1El = document.getElementById("score--1")
const current0El = document.getElementById("current--0")
const current1El = document.getElementById("current--1")
const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")

let scores
let currentScore
let activePlayer
let activeCurrentEl
let playing

init()

btnRoll.addEventListener("click", () => {
  if (playing) {
    activeCurrentEl = activePlayer === 0 ? current0El : current1El
    const dice = rollDice()
    console.log(dice)
    diceEl.classList.remove("hidden")
    diceEl.src = `dice-${dice}.png`

    if (dice !== 1) {
      currentScore += dice
      activeCurrentEl.textContent = currentScore
    } else {
      currentScore = 0
      activeCurrentEl.textContent = currentScore
      switchPlayer()
    }
  }
})

btnHold.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner")
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active")
      playing = false
      diceEl.classList.add("hidden")
    } else {
      switchPlayer()
    }
  }
})

btnNew.addEventListener("click", () => {
  if (!playing) {
    init()
  }
})

function init() {
  score0El.textContent = 0
  score1El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0
  diceEl.classList.add("hidden")

  scores = [0, 0]
  currentScore = 0
  activePlayer = 0
  activeCurrentEl = current0El
  playing = true

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner")
  player0El.classList.add("player--active")
  player1El.classList.remove("player--active")
  activePlayer = 0
  playing = true
}

function switchPlayer() {
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  current0El.textContent = 0
  current1El.textContent = 0
  player0El.classList.toggle("player--active")
  player1El.classList.toggle("player--active")
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1
}
