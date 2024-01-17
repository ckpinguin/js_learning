"use strict"

const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
document.querySelector(".number").textContent = secretNumber

const scoreEl = document.querySelector(".score")
const checkBtn = document.querySelector(".check")
const message = document.querySelector(".message")
checkBtn.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value)
  if (!guess) {
    message.textContent = "⛔️ No number!"
  } else if (guess === secretNumber) {
    message.textContent = "🏆🏆🏆 Correct!"
  } else if (guess > secretNumber) {
    message.textContent = "📈 Too high!"
    score--
    scoreEl.textContent = score
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low!"
    score--
    scoreEl.textContent = score
  }
})
