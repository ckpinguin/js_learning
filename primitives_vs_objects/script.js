"use strict"

let age = 30
let oldAge = age
age = 31
console.log(age)
console.log(oldAge)

const me = {
  name: "Joe",
  age: 40,
}

const friend = me
friend.age = 27
console.log("Friend: ", friend)
console.log("Me", me)

// strings are primitives too
let lastName = "Williams"
let oldLastName = lastName
lastName = "Davis"
console.log(lastName)
console.log(oldLastName)

// objects are reference values
const jim = {
  firstName: "Jim",
  lastName: "Jones",
  age: 37,
}
console.log(jim)
let newJim = jim
newJim.lastName = "Jenkins"
console.log(newJim)

const otherJim = {
  firstName: "John",
  age: 55,
}
newJim = otherJim // new reference to a completely other object
console.log(jim)
console.log(newJim)

const jim2 = {
  firstName: "Jim",
  lastName: "Jones",
  age: 37,
  hobbies: ["swimming", "reading", "talking"],
}
// Real (shallow) copy of an object (only way to change an address of a const object)
const jimCopy = Object.assign({}, jim2)
jimCopy.lastName = "Batman"
jimCopy.hobbies.push("Learning")
console.log("Before: ", jim2)
console.log("After: ", jimCopy)

// New way to deep clone an object!
const jimDeepCopy = structuredClone(jim2)
jimDeepCopy.hobbies.push("Doing")
console.log("Before: ", jim2)
console.log("After: ", jimDeepCopy)
