nums = new Array(100, 300, 304, 304)
console.log(nums)
nums[0] = 999
console.log(nums)

console.log("Hello")

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degree celsius")),
  }
  const kelvin = measurement.value + 273
  return kelvin
}

function printForecast(temps) {
  let output = ""
  for (let i = 0; i < temps.length; i++) {
    output = output.concat(`... ${temps[i]}°C in ${i + 1} days`)
  }
  console.log(output)
}

printForecast([17, 21, 23])
printForecast([12, 5, -5, 0, 4])
