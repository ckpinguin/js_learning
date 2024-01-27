"use strict"

const restaurant = {
  name: "Classico",
  location: "Via Angelo Trovanti 23, Roma, Italy",
  categories: ["Italian", "Pizzeria", "Pizza"],
  starterMenu: ["Focaccia", "Bruschetta"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
}

const arr = [2, 3, 4]
const [x, y, z] = arr

console.log(x, y, z)

let [main, , secondary] = restaurant.categories

console.log(main, secondary)
;[main, secondary] = [secondary, main]
console.log(main, secondary)
