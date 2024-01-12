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

console.log(measureKelvin())
