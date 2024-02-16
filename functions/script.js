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
