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
// console.log(job) // Nope, still in TDZ
// console.log(year) // Nope, still in TDZ
var me = "Chris"
let job = "Learner"
const year = 1975

// Function hoisting
console.log(addDecl(2, 3)) // OK
// console.log(addExpr(2, 3)) // NOK, because it's a variable with a function
// console.log(addArrow(2, 3)) // NOK, same

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

var x = 1 // in global (window object) context
let y = 2
const z = 3

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)

// „This“ always needs an owner! That's why we use it for object methods
console.log(this) // window object

const arrowFunction = () => {
  console.log(this) // calling object = window, only works in function expressions
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
    console.log(this) // object that's calling/owning the function => 'joe' object
    return 2037 - this.year
  },
  arrow: () => {
    const b = 0
    console.log(this) // lexical this (this of calling scope = window, when called toplevel)
  },
}

const jim = {
  joe: joe,
  callJoe: function () {
    joe.arrow()
  },
}
console.log(joe.calcAge())
joe.arrow() // window
jim.callJoe() // This still is window (called on top level, even though through 2 objects)

function regularFunc() {
  console.log(this) // „undefined“ in strict mode
}
regularFunc()

const arrowFun = () => {
  console.log(this) // Lexical this of parent scope (here window)
}
arrowFun()

const nestedFuncObj = {
  year: 1993,
  firstName: "Jeff",
  calcAge: function () {
    console.log(2023 - this.year)
    // Solution (pre ES6) to preserve „this“ via self:
    /*const self = this
     const isMillenial = function () {
      console.log(self)
      console.log(self.year >= 1995)
    } */
    // Solution 2 (modern):
    const isMillenial = () => {
      // arrow funcs get „this“ automatically from parent scope
      console.log(this)
      console.log(this.year >= 1995)
    }
    isMillenial()
  },
}
nestedFuncObj.calcAge()

let xyz = 1
function f() {
  //console.log(xyz) // Nope, no access to outside scope's xyz because declared in this scope with same name (yet that is still in TDZ)
  let xyz = 2
}
f()
