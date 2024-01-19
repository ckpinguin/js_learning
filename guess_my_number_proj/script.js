"use strict"

const checkBtn = document.querySelector(".check")

const againBtn = document.querySelector(".again")
const guessNum = document.querySelector(".guess")
const num = document.querySelector(".number")
const body = document.querySelector("body")
const hiScoreEl = document.querySelector(".highscore")

let score = 20
let secretNumber = 0
let hiScore = 0
againBtn.disabled = true
resetGame()

function resetGame() {
  score = 20
  updateScoreDisplay(score)
  secretNumber = Math.trunc(Math.random() * 20) + 1
  displayMessage("Start guessing...")
  guessNum.value = null
  num.textContent = "?"
  num.style.background = "#eee"
  document.querySelector("body").style.backgroundColor = "#222"
  againBtn.disabled = true
}

function updateScoreDisplay(score) {
  const scoreEl = document.querySelector(".score")
  scoreEl.textContent = score
}

function displayMessage(content) {
  const message = document.querySelector(".message")
  message.textContent = content
}

againBtn.addEventListener("click", () => {
  resetGame()
})

checkBtn.addEventListener("click", () => {
  const guess = Number(guessNum.value)
  if (!guess) {
    displayMessage("⛔️ No number!")
  } else if (guess === secretNumber) {
    displayMessage("🏆🏆🏆 Correct!")
    body.style.backgroundColor = "#60b347"
    guessNum.style.width = "30rem"
    if (score > hiScore) {
      hiScore = score
      hiScoreEl.textContent = hiScore
    }
    againBtn.disabled = false
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!")
      score--
      console.log(score)
    } else {
      displayMessage("👎 You lose!")
      num.textContent = secretNumber
      num.style.backgroundColor = "red"
      againBtn.addEventListener("click", () => {
        resetGame()
      })
      againBtn.disabled = false
    }
  }
  updateScoreDisplay(score)
})
