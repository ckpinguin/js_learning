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
    add(4, 5)
    console.log(millenial)
    console.log(output)
  }
  printAge()

  return age
}

const firstName = "Test"
console.log(calcAge(1979))
