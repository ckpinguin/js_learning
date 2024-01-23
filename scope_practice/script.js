"use strict" // enables block-scopes

function calcAge(year) {
  const age = 2024 - year
  console.log(firstName)

  function printAge() {
    let output = `age of ${firstName} is ${age} with year ${year}`
    console.log(output)

    if (year >= 1975 && year <= 1996) {
      var millenial = false // var is function-scoped
      const firstName = "Joe" // overwrites higher scoped variable
      const str = `Not old and not young you are, ${firstName}`
      console.log(str)

      function add(a, b) {
        return a + b
      }
      // Creating new variable with same name as outer scopes
      // variable is valid code
      const output = "NEW OUTPUT"
    }
    //console.log(str)
    //add(4, 5)
    console.log(millenial)
    console.log(output)
  }
  printAge()

  return age
}

const firstName = "Test"
console.log(calcAge(1979))

// Hoisting practice:
console.log(me) // Hoisted, so OK
// console.log(job) // Still in TDZ
// console.log(year) // Still in TDZ
var me = "Chris"
let job = "Learner"
const year = 1975

// Function hoisting
console.log(addDecl(2, 3)) // OK
// console.log(addExpr(2, 3)) // NOK
// console.log(addArrow(2, 3)) // NOK

function addDecl(a, b) {
  return a + b
}

const addExpr = function (a, b) {
  return a + b
}

var addArrow = (a, b) => a + b

// Example (don't do this!)
if (!numProducts) {
  deleteShoppingCart()
}

var numProducts = 10

function deleteShoppingCart() {
  console.log(this) // undefined (no bind to a context)
  console.log("All products deleted!")
}

var x = 1
let y = 2
const z = 3

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)

console.log(this) // window object

const arrowFunction = () => {
  console.log(this) // calling object = window
}
arrowFunction()

function callingFunction() {
  arrowFunction()
}
callingFunction()

const joe = {
  name: "Joe",
  year: 1995,
  calcAge: function () {
    const a = 1
    console.log(this) // object that's calling the function => 'joe' object
    return 2037 - this.year
  },
  arrow: () => {
    const b = 0
    console.log(this) // lexical this (this of surrounding function = window, when called toplevel)
  },
}

const jim = {
  joe: joe,
  callJoe: function () {
    joe.arrow()
  },
}
console.log(joe.calcAge())
joe.arrow()
jim.callJoe() // This still = window (called on top level, even though through 2 objects)
