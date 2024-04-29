"use strict" // enables block-scopes

function calcAge(year) {
  const age = 2024 - year
  console.log(firstName)
  console.log(this) // undefined in strict mode
  function printAge() {
    let output = `age of ${firstName} is ${age} with year ${year}`
    console.log(output)
    console.log(this) // undefined in strict mode

    if (year >= 1975 && year <= 1996) {
      var millenial = false // var is function-scoped
      const firstName = "Joe" // block-scoped, overwrites higher scoped variable
      const str = `Not old and not young you are, ${firstName}`
      console.log(str)
      console.log(this) // undefined in strict mode

      function add(a, b) {
        console.log(this) // undefined in strict mode
        return a + b
      }
      add(2, 3)

      // Creating new variable with same name as outer scopes
      // variable is valid code (but not recommended of course)
      const output = "NEW OUTPUT"
    }
    //console.log(str) // no access to block-scoped variable
    //add(4, 5) // no access to block-scoped function (in strict mode)
    console.log(millenial) // defined by var, so accessible outside of the block
    console.log(output) // „output“ of the block is block-scoped (const defined),
    //so not accessible here, but output of the function is accessible (lookup chain)
  }
  printAge()

  return age
}

const firstName = "Test"
console.log(calcAge(1979))

// Hoisting practice:
console.log(me) // „var me“ is hoisted, so OK
//console.log(job) // Nope, let-defined variable is still in TDZ
// console.log(year) // Nope, const-defined variable is still in TDZ
var me = "Chris"
let job = "Learner"
const year = 1975

// Function hoisting
console.log(addDecl(2, 3)) // OK, functions are hoisted with full definition
// console.log(addExpr(2, 3)) // NOK, because it's a variable with a function (only the variable is hoisted), so it is uninitialized (TDZ)
// console.log(addArrow(2, 3)) // NOK, it is hoisted as var-defined variable, but gets the value of undefined

function addDecl(a, b) {
  return a + b
}

const addExpr = function (a, b) {
  return a + b
}

var addArrow = (a, b) => a + b

// Example (don't do this!)
// numProducts hoisted, but „undefined“ is falsy!
if (!numProducts) {
  deleteShoppingCart()
}

var numProducts = 10 // hoisted, but „undefined“

function deleteShoppingCart() {
  console.log(numProducts) // undefined
  console.log(this) // undefined (no bind to a context)
  console.log("All products deleted!")
}

var x = 1 // created in global (window object) context
let y = 2 // NOT created in global context, but in the scope of the script.js file
const z = 3 // NOT created in global context, but in the scope of the script.js file

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)

// THIS keyword

// „This“ always needs an owner! That's why we use it for object methods.
// We can say it „points“ to the OBJCECT THAT IS CALLING the function/method or in other words the „owner“ of the function
console.log(this) // window object => owns the global scope

const arrowFunction = () => {
  console.log(this) // calling object = window, only works in function expressions
}
arrowFunction()

function callingFunction() {
  arrowFunction()
}
callingFunction()

// Object literal. Does NOT create a new scope, so „this“ is still the window object
const joe = {
  name: "Joe",
  year: 1995,
  calcAge: function () {
    const a = 1
    console.log(this) // Object(!) that's CALLING/owning the function/method => 'joe' object. That's why normal functions and scopes do not have a lexical this
    return 2037 - this.year
  },
  // NEVER use arrow functions as direct object-methods, because they do not get their own „this“ keyword, but use the „this“ keyword of their parent scope
  arrowCalcAge: () => {
    const b = 0
    console.log(this) // LEXICAL this (this of outer calling scope = window, when called toplevel for example)
  },
}

const jim = {
  joe: joe,
  callJoe: function () {
    joe.arrowCalcAge()
  },
}
console.log(joe.calcAge())
joe.arrowCalcAge() // window
jim.callJoe() // This still is window (called on top level, even though through 2 objects)

// Method borrowing
jim.calcAge = joe.calcAge
console.log(jim)
jim.calcAge() // „this“ is now the jim object (calling object)

const f2 = joe.calcAge
console.log(f2)
// f2() // TypeError, because „this“ is now undefined (strict mode)

function regularFunc() {
  console.log(this) // „undefined“ in strict mode
}
regularFunc()

// Arrow functions do not get their own „this“ keyword, they use the „this“ keyword of their parent scope
const arrowFun = () => {
  console.log(this) // Lexical this of parent scope (here window)
}
arrowFun()

const nestedFuncObj = {
  year: 1993,
  firstName: "Jeff",
  // function () (func. expr.) is „called“ by the object, so „this“ is the object
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
      // arrow funcs get „this“ automatically from parent scope (here the object nestedFuncObj,
      // that is calling the calcAge function)
      // arrow functions within functions DO make sense in this context (but not on the top-object level!)
      console.log(this)
      console.log(this.year >= 1995)
    }
    isMillenial() // regular function call => „this“ is undefined in strict mode
  },
}
nestedFuncObj.calcAge()

let xyz = 1
function f() {
  //console.log(xyz) // Nope, no access to outside scope's xyz because declared in this scope with same name (yet that is still in TDZ)
  let xyz = 2
  console.log(xyz) // 2
}
f()

// Repetition of call stack, scope chain, and this keyword
const name2 = "Jim"

const first = () => {
  let a = 1
  console.log("this in first (arrow func)", this)
  const b = second(7, 9)
  a = a + b
  return a
}

// functions are block scoped in strict mode
function second(x, y) {
  console.log("this in second (standard func)", this)
  var c = 2
  console.log(name2) // access to global scope ok
  if (name2 === "Jim") {
    const d = 3 // block scoped
    let e = 4 // block scoped
    var f = 5 // function scoped (deprecated)
  }
  //console.log(d) // Reference error, block scoped d is not acce    ssible in function scope
  //console.log(e) // Reference error, block scoped e is not accessible in function scope
  console.log(f) // ok to reference
  return c
}
// console.log(c) // Reference error, c is not accessible in global scope

const xx = first()
console.log(xx)
console.log("this in global scope", this)

// Arguments keyword
const addExpr2 = function (a, b) {
  console.log(arguments)
  return a + b
}
addExpr2(2, 5)
addExpr2(2, 5, 8, 10) // any number of arguments allowed (i.e. to use in ...rest)

const addArrow2 = (a, b) => {
  console.log(arguments) // not available in arrow functions
  return a + b
}
// addArrow2(2, 5)
