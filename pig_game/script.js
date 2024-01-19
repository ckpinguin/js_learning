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
score1El.textContent = 1
diceEl.classList.add("hidden")

let currentScore = 0

btnRoll.addEventListener("click", () => {
  const dice = rollDice()
  console.log(dice)
  diceEl.classList.remove("hidden")
  diceEl.src = `dice-${dice}.png`

  if (dice !== 1) {
    currentScore += dice
    current0El.textContent = currentScore
  } else {
    currentScore = 0
    current0El.textContent = currentScore
  }
})

function rollDice() {
  return Math.floor(Math.random() * 6) + 1
}

rollDice()
