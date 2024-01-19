"use strict"

const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
const score0El = document.getElementById("score--0")
const score1El = document.getElementById("score--1")

score0El.textContent = 0
score1El.textContent = 1
diceEl.classList.add("hidden")

btnRoll.addEventListener("click", () => {
  const dice = rollDice()
  console.log(dice)
  diceEl.classList.remove("hidden")
  diceEl.src = `dice-${dice}.png`
})

function rollDice() {
  return Math.floor(Math.random() * 6) + 1
}

rollDice()
