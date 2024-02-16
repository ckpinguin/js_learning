"use strict"

const bookings = []

function createBooking(
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  }
  console.log(booking)
  bookings.push(booking)
}

// createBooking("LH123")
// createBooking("LH123", undefined, 800)

const flight = "LH234"
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
}
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999"
  passenger.name = "Mr. " + passenger.name

  if (passenger.passport === 24739479284) {
    console.log("Checked in")
  } else {
    console.log("Wrong passport!")
  }
}
checkIn(flight, jonas)
console.log(flight)
console.log(jonas)

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase()
}

const first = function (str) {
  const [first, ...others] = str.split(" ")
  return [first.toUpperCase(), ...others].join(" ")
}

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`)
  console.log(`Transformed string: ${fn(str)}`)
  console.log(`Transformed by: ${fn.name}`)
}
transformer("JavaScript is the best!", oneWord)
transformer("JavaScript is the best!", first)

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`)
  }
}

const greeterHey = greet("hey")
greeterHey("Jonas")
greet("Hello")("Jonas")

// using arrow functions
const greet2 = (greeting) => (name) => {
  console.log(`${greeting} ${name}`)
}
greet2("Hi")("Jonas")

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    )
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
  },
}

lufthansa.book(239, "Jonas Schmedtmann")
lufthansa.book(635, "John Smith")

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
}
const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
}
const book = lufthansa.book // now a function, not a method anymore
// book(23, "Sarah Williams") // does not work
// 3 ways to work around that:
book.call(lufthansa, 23, "Sarah Williams")
book.apply(eurowings, [23, "Sarah Williams"]) // deprecated
book.bind(swiss, 23, "Sarah Williams")() // bind returns a new function that can be called immediately or...
// ...later by storing it in a variable:
const bookSwiss = book.bind(swiss)
bookSwiss(23, "Mary Cooper")

const flightData = [583, "George Cooper"]
book.call(lufthansa, ...flightData) // spread operator can be used conveniently with call
console.log(lufthansa.bookings)
console.log(eurowings.bookings)
console.log(swiss.bookings)

// partial application
const bookSwiss583 = book.bind(swiss, 583)
bookSwiss583("John Example")

lufthansa.planes = 300
lufthansa.buyPlane = function () {
  console.log(this)
  this.planes++
  console.log(this.planes)
}
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa))

const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(100))

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate
  }
}
const addVAT2 = addTax2(0.23)
console.log(addVAT2(100))

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    )
    if (typeof answer === "number" && answer < this.answers.length) {
      this.answers[answer]++
    }
    this.displayResults()
    this.displayResults("string")
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers)
    } else if (type === "string") {
      console.log("Poll results are " + this.answers.join(", "))
    }
  },
}

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll))

poll.displayResults.call({ answers: [5, 2, 3] }, "string")
poll.displayResults.call({ answers: [5, 2, 3] }, "array")
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string")
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "array")

// IIFE
const runOnce = function () {
  console.log("This will never run again")
}
runOnce()
;(function () {
  console.log("This will ALSO never run again")
})()
;(() => console.log("This will ALSO never run again"))()

// Closures
function secureBooking() {
  let passengerCount = 0
  // This closes over the passengerCount variable:
  return function () {
    passengerCount++
    console.log(`${passengerCount} passengers`)
  }
}
const booker = secureBooking()
booker()
booker()
booker()

console.dir(booker)
