"use strict"

/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName
  this.birthYear = birthYear

  // Never do this (create a method in a constructor function)
  /*   this.calcAge = function () {
    console.log(2037 - this.birthYear)
  } */

/*
const jeff = new Person("Jeff", 1990)
console.log(jeff)

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

const matilda = new Person("Matilda", 2017)
const jack = new Person("Jack", 1975)
console.log(matilda, jack)

const jim = Object.create(Person.prototype)
console.log("jim:", jim)

console.log(jeff instanceof Person)
console.log(jeff instanceof Object)
console.log(jeff.__proto__ === Person.prototype)

console.log(Object.__proto__)
console.log(Object.prototype)
*/

// Prototypes
// Adding a „method“ to the prototype
// this is set to the calling object
/*

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
*/
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

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(this.speed)
}

Car.prototype.brake = function () {
  this.speed -= 5
  console.log(this.speed)
}

const bmw = new Car("BMW", 120)
const mercedes = new Car("Mercedes", 95)

bmw.accelerate()
bmw.accelerate()
bmw.brake()
mercedes.accelerate()
mercedes.brake()
mercedes.brake()

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear)
  }

  greet() {
    console.log(`Hey ${this.firstName}`)
  }
}

const jessica = new PersonCl("Jessica", 1996)
console.log(jessica)
console.log(jessica.__proto__ === PersonCl.prototype)

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are implicitly executed in strict mode

// Getters and setters for normal objects:
const account = {
  owner: "Jeff",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop()
  },

  set latest(mov) {
    this.movements.push(mov)
  },
}

console.log(account.latest)
account.latest = 50
console.log(account.movements)
console.log(account)

// Using Object.create() the preferred way
// of creating objects
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear)
  },
  init(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  },
}

const steven = Object.create(PersonProto)
console.log(steven)
steven.name = "Steven"
steven.birthYear = 2002
steven.calcAge()

console.log(steven.__proto__)
console.log(steven.__proto__ === PersonProto)

const john = Object.create(PersonProto)
john.init("John", 1979)
john.calcAge()

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

const CarProto = {
  init(make, speed) {
    this.make = make
    this.speed = speed
  },

  accelerate() {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/h`)
  },

  brake() {
    this.speed -= 10
    console.log(`${this.make} is going at ${this.speed} km/h`)
  },

  get speedUS() {
    return this.speed / 1.6
  },

  set speedUS(speed) {
    this.speed = speed * 1.6
  },
}

const ford = Object.create(CarProto)
ford.init("Ford", 120)
console.log(ford)
console.log(ford.speedUS)
ford.speedUS = 140
console.log(ford.speedUS)
console.log(ford.speed)
ford.accelerate()
ford.brake()

//////////////////////////////////////
// Inheritance between „classes“: constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
}

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear)
  this.course = course
}

// Make __proto__ point to Person.prototype (aka inheritance)
// This has to be done before any more methods are added
Student.prototype = Object.create(Person.prototype)
// This would be wrong:
// Student.prototype = Person.prototype

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student("Mike", 2020, "Computer Science")
mike.introduce()
mike.calcAge()

console.log(mike.__proto__)
console.log(mike.__proto__.__proto__)

console.log(mike instanceof Student)
console.log(mike instanceof Person)
console.log(mike instanceof Object)

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const EV = function (make, speed, chargePerc) {
  Car.call(this, make, speed)
  this.chargePerc = chargePerc
}

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge_perc = chargeTo
}

EV.prototype.accelerate = function () {
  this.speed += 20
  this.chargePerc -= 1
  console.log(
    `${this.make} is going at ${this.speed} with a charge of ${this.chargePerc}`
  )
}

const tesla = new EV("Tesla", 120, 23)
console.log(tesla)
tesla.accelerate()
tesla.chargeBattery(99)
tesla.accelerate()
tesla.brake()

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
