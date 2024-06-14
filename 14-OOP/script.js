"use strict"

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName
  this.birthYear = birthYear

  // Never do this (create a method in a constructor function)
  /*   this.calcAge = function () {
    console.log(2037 - this.birthYear)
  } */
}

const jeff = new Person("Jeff", 1990)
console.log(jeff)

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

const matilda = new Person("Matilda", 2017)
const jack = new Person("Jack", 1975)
console.log(matilda, jack)

console.log(jeff instanceof Person)
console.log(jeff instanceof Object)
console.log(jeff.__proto__ === Person.prototype)

console.log(Object.__proto__)
console.log(Object.prototype)

// Prototypes
// Adding a „method“ to the prototype
// this is set to the calling object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}
console.log(Person.prototype)

jeff.calcAge()

console.log(Person.prototype)
console.log(jeff.__proto__ === Person.prototype)
console.log(Person.__proto__)

// The naming of prototype is bad, it should be called something like „prototypeOfLinkedObjects“
console.log(Person.prototype.isPrototypeOf(jeff))

// „Class“ property
Person.prototype.country = "Switzerland"
console.log(jeff.country)
console.log(jeff.hasOwnProperty("country"))
console.log(jeff.hasOwnProperty("firstName"))

console.log(jeff.__proto__)
console.log(jeff.__proto__.__proto__)
console.log(jeff.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor)
const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8]
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)

console.log(arr.__proto__.__proto__)
Array.prototype.unique = function () {
  return [...new Set(this)]
}
console.log(arr.unique())

const h1 = document.querySelector("h1")
console.dir(h1)

console.dir((x) => x + 1)
