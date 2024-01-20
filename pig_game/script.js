"use strict"

const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
const score0El = document.getElementById("score--0")
const score1El = document.getElementById("score--1")
const current0El = document.getElementById("current--0")
const current1El = document.getElementById("current--1")

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add("hidden")

let currentScore = 0
let activePlayer = 0
let activeCurrentEl = current0El

btnRoll.addEventListener("click", () => {
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
    activePlayer = activePlayer === 0 ? 1 : 0
  }
})

function rollDice() {
  return Math.floor(Math.random() * 6) + 1
}

function holdTurn() {}

rollDice()
