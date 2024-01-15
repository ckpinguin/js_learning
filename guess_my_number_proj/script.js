"use strict"

const secretNumber = 12
const checkBtn = document.querySelector(".check")
const message = document.querySelector(".message")
checkBtn.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value)
  if (!guess) {
    alert("No number guessed!")
  } else if (guess === secretNumber) {
    message.textContent = "🏆🏆🏆 Correct!"
  } else {
    message.textContent = "👎 Nope"
  }
})
