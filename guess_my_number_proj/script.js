"use strict"

const scoreEl = document.querySelector(".score")
const checkBtn = document.querySelector(".check")
const message = document.querySelector(".message")
const againBtn = document.querySelector(".again")
const guessNum = document.querySelector(".guess")
const num = document.querySelector(".number")
const body = document.querySelector("body")
const hiScoreEl = document.querySelector(".highscore")

let score = 20
let secretNumber = 0
let hiScore = 0

resetGame()

checkBtn.addEventListener("click", () => {
  const guess = Number(guessNum.value)
  if (score > 0) {
    if (!guess) {
      message.textContent = "⛔️ No number!"
    } else if (guess === secretNumber) {
      message.textContent = "🏆🏆🏆 Correct!"
      body.style.backgroundColor = "#60b347"
      guessNum.style.width = "30rem"
      if (score > hiScore) {
        hiScore = score
        hiScoreEl.textContent = hiScore
      }
    } else if (guess > secretNumber) {
      message.textContent = "📈 Too high!"
      score--
      console.log(score)
      scoreEl.textContent = score
    } else if (guess < secretNumber) {
      message.textContent = "📉 Too low!"
      score--
      console.log(score)
      scoreEl.textContent = score
    }
  } else {
    message.textContent = "👎 You lose!"
    num.textContent = secretNumber
    num.style.backgroundColor = "red"
  }
})

function resetGame() {
  score = 20
  scoreEl.textContent = score
  secretNumber = Math.trunc(Math.random() * 20) + 1
  message.textContent = "Start guessing..."
  guessNum.value = null
  num.textContent = "?"
  num.style.background = "#eee"
  document.querySelector("body").style.backgroundColor = "#222"
}

againBtn.addEventListener("click", () => {
  resetGame()
})
