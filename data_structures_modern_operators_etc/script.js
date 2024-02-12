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

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
]

// Destructuring
/////////////////
const [firstBook, secondBook] = books
const [, , thirdBook] = books

const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
]

const [[, rating], [, ratingsCount]] = ratings
//console.log(rating, ratingsCount)
const ratingStars = [63405, 1808]
const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
  ratingStars
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings)
const { title, author, ISBN } = books[0]
//console.log(title, author, ISBN)
const { language, programmingLanguage = "unknown" } = books[6]
//console.log(language, programmingLanguage)
let bookTitle = "unknown"
let bookAuthor = "unknown"
;({ title: bookTitle, author: bookAuthor } = books[0])
// console.log(bookTitle, bookAuthor)
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0]
//console.log(bookRating)
// Default values
/////////////////
function printBookInfo({ title, author, year = "year unknown" }) {
  console.log(`${title} by ${author}, ${year}`)
}
printBookInfo({ title: "Algorithms", author: "Robert Sedgewick", year: "2011" })
printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" })

// Spread operator
////////////////////
const bookAuthors = [...books[0].author, ...books[1].author]
// console.log(bookAuthors)

function spellWord(word) {
  console.log(...word)
}

spellWord("JavaScript")

// Rest params operator
///////////////////////
const [mainKeyword, ...rest] = books[0].keywords
console.log(mainKeyword)
console.log(rest)
const { publisher: bookPublisher, ...restProps } = books[1]
console.log(bookPublisher)
console.log(restProps)

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`)
}
printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne")

// Shortcircuiting
//////////////////
console.log(3 || "hello")
console.log("" || "Jim")
console.log(true || 0)
console.log(undefined || null) // both are falsy values
console.log(undefined || 0 || "" || null || "hello" || 23 || null)
console.log(0 && "Jim")
console.log(7 && "Jim")

function hasExamplesInJava(book) {
  return book.programmingLanguage === "Java" || "no data available"
}
console.log(hasExamplesInJava(books[0]))

for (let book of books) {
  book.onlineContent && console.log(`${book.title} provides online content`)
}

// Nullish coalescing operator: ??
//////////////////////////////////
// (Nullish values are Null and undefined)
for (let book of books) {
  book.onlineContent ??
    console.log(`${book.title} provides no data about its online content`)
}

// Nullish assignment operator: ??=
books[0].numOfPages ??= "no data available"

// Logical assignment operators
books[0].numOfPages &&= "many"
for (let book of books) {
  book.edition ||= 1
  book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2)
}

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

const [players1, players2] = game.players
const [gk, ...field_players] = game.players[0]
console.log(gk, field_players)
const allPlayers = [...players1, ...players2]
console.log(allPlayers)
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"]
console.log(players1Final)
const {
  odds: { team1, x: draw, team2 },
} = game
console.log(team1, draw, team2)
function printGoals(...players) {
  console.log(players, players.length)
}
printGoals("Davies", "Muller", "Lewandowski", "Kimmich")
printGoals(...game.scored)
// const likely_winner &&= (game.odds.team1 > game.odds.team2)
console.log(
  `${(team1 < team2 && game.team1) || game.team2} is more likely to win.`
)

// Optional chaining
//////////////////////////////////
function getFirstKeyword(book) {
  return book?.keywords[0]
}
console.log(getFirstKeyword(books[8]))

// Object looping
////////////////////////////////////
const entries = []
for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key])
}
console.log(entries)

// console.log(Object.keys(books[0]))
// console.log(Object.values(books[0]))
// console.log(Object.entries(books[0]))
for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value)
}
console.log(entries)

const entries2 = Object.entries(books[0].thirdParty.goodreads)
console.log(entries2)

//

/////////////////////////////////////////////
// Coding Challenge #2
/*
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1. Loop over the game.scored array and print each playername to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console,but in a nice formatted way,exactly like this:
Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names😉
4. Bonus:Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
}
GOOD LUCK😀
*/
// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`)
}

// 2.
const odds = Object.values(game.odds)
let avg = 0
for (const odd of odds) {
  avg += odd
}
avg /= odds.length
console.log(avg)

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`
  console.log(`Odd of ${teamStr}: ${odd}`)
}

// 4.
const scorers = {}
game.scored.forEach((player) => {
  if (scorers[player]) {
    scorers[player]++
  } else {
    scorers[player] = 1
  }
})
console.log(scorers)

/////////////////////////////////////////
// Sets

const orderSet = new Set(["Pasta", "Pizza", "Risotto", "Pizza", "Pasta"])

console.log(orderSet)
console.log(orderSet.size)
console.log(orderSet.has("Pizza"))
console.log(orderSet.has("Bread"))
orderSet.add("Garlic Bread")
orderSet.add("Garlic Bread") // Igonerd, because set items are unique
orderSet.delete("Risotto")
console.log(orderSet)

for (const order of orderSet) console.log(order)

// Use case: Remove duplicates from arry by using a set
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]
const staffUnique = [...new Set(staff)]
console.log(staffUnique)

///////////////////////////////////////////////////
// Maps  ( => dict in Python)

const restaurantMap = new Map()
restaurantMap.set("name", "Classico Venetia")
restaurantMap.set(1, "Firenze, Italy")
console.log(restaurantMap.set(2, "Zurigo, Svizzera"))
// Chaining
restaurantMap
  .set("categories", ["Italian", "Pizzeria", "Vegetarian"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :)")
  .set(false, "We are closed :(")
console.log(restaurantMap)
console.log(restaurantMap.get("name"))
//console.log(restaurantMap.get(true))
const time = 14
console.log(
  restaurantMap.get(
    time > restaurantMap.get("open") && time < restaurantMap.get("close")
  )
)

console.log(restaurantMap.has("categories"))
restaurantMap.delete(2)
// restaurantMap.clear()
restaurantMap.set([1, 2], "Test") // Array as key
console.log(restaurantMap.size)

console.log(restaurantMap.get([1, 2])) // Array as key to get does not work (not the same object)
const keyArr = [1, 2]
restaurantMap.set(keyArr, "Test2")
console.log(restaurantMap.get(keyArr)) // This however works (same object as key)
restaurantMap.set(document.querySelector("h1"), "Heading")
console.log(restaurantMap)

const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct :)"],
  [false, "Try again!"],
])
console.log(question)
// Object.entries returns the same structure as above (array of arrays):
console.log(Object.entries(restaurant))
// and this can be fed directly into a map
const restMap = new Map(Object.entries(restaurant))
console.log(restMap)

// Very small quiz app
console.log(question.get("question"))
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`)
  }
}
//const answer = Number(prompt("Your answer:"))
const answer = 3
console.log(answer)
console.log(question.get(question.get("correct") === answer))

// Convert map back to array
console.log([...question])
console.log(question.entries()) // this gives back a MapIterator
console.log([...question.keys()])
console.log([...question.values()])

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  // [64, "test"], // This would overwrite same-key element
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
])

// 1.
const events = new Set(gameEvents.values())
console.log(events)

// 2.
gameEvents.delete(64)
console.log(gameEvents)

// 3.
const gameTime = [...gameEvents.keys()].pop()
console.log(gameTime)
const avg_event_min = Math.round(gameTime / gameEvents.size)
console.log(`An event happened, on average, every ${avg_event_min} minutes`)

// 4.
for (const [min, event] of gameEvents.entries()) {
  const half = min <= 45 ? "First" : "Second"
  console.log(`${half} Half ${min}: ${event}`)
}

/////////////////////////////////////////////////
// Strings
console.log("STRINGS")
const airline = "Lufthansa Swiss"
const plane = "A380"

console.log(plane[0])
console.log(airline.length)
console.log(airline.indexOf("s"))
console.log(airline.lastIndexOf("s"))
console.log(airline.indexOf("Swiss"))

console.log(airline.slice(4))
console.log(airline.slice(4, 7))

console.log(airline.slice(0, airline.indexOf(" ")))
console.log(airline.slice(airline.lastIndexOf(" ") + 1))

console.log(airline.slice(-3))
console.log(airline.slice(1, -1))

// Good to know: Whenever we call a „method“ on a string (which should be impossible,
// because a string is a primitive!) JS converts the string into a
// String object (with „new String()“) with methods behind the scenes
// This process is called „boxing“
// P.S. The return value then again is a primitive string
const checkMiddleSeat = function (seat) {
  const lastChar = seat.slice(-1)
  if (lastChar === "B" || lastChar === "E") {
    console.log("You got the middle seat 😒 ")
  } else console.log("You got lucky 😎")
}
checkMiddleSeat("11B")
checkMiddleSeat("23C")
checkMiddleSeat("3E")

console.log(airline.toLowerCase())
console.log(airline.toUpperCase())
const passenger = "CHriSToF"
const passengerLower = passenger.toLowerCase()
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)

// Comparing emails
const email = "chuck@norris.io"
const loginEmail = "  CHUck@NoRris.io \n" // ugly, but still valid
const lowerEmail = loginEmail.toLowerCase()
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail)

// All in one step:
const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)
console.log(email === normalizedEmail)

// Replacing
const priceGB = "288,9£"
const priceUS = priceGB.replace("£", "$").replace(",", ".")
console.log(priceUS)

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!"
console.log(announcement.replace("door", "gate"))
console.log(announcement.replaceAll("door", "gate")) // works since ES2020, but is not displayed by vscode as suggestion yet.

console.log(announcement.replace(/door/g, "gate"))

// Boolean methods
const plane2 = "Airbus A320neo"
console.log(plane2.includes("A320"))
console.log(plane2.startsWith("Air"))

if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
  console.log("Part of the new Airbus family")
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase()
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board")
  } else {
    console.log("Welcome aboard")
  }
}
checkBaggage("I have a Laptop, some Food and a Pocket Knife")
checkBaggage("Socks and camera")
checkBaggage("Got some snacks and a gun for self-protection")

console.log("a+very+nice+string".split("+"))
console.log("Chuck Norris".split(" "))

const [firstName, lastName] = "Chuck Norris".split(" ")
console.log(firstName, lastName)

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ")
console.log(newName)

const capitalizeName = function (name) {
  const names = name.split(" ")
  const namesUpper = []
  for (const n of names) {
    // 2 variants:
    //namesUpper.push(n[0].toUpperCase() + n.slice(1))
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  return namesUpper.join(" ")
}
const passenger2 = capitalizeName("jessica ann smith davies")
console.log(passenger2)

// Padding
const message = "Go to gate 23!"
console.log(message.padStart(25, " + ").padEnd(38, " + "))

function maskCreditCard(number) {
  const numString = number + "" // simpler than String(number)
  const lastFour = numString.slice(-4)
  return lastFour.padStart(numString.length, "*")
}
console.log(maskCreditCard(3453958383223))
console.log(maskCreditCard(4352525245424214))
console.log(maskCreditCard("1234abct78901"))

// Repeat
const message2 = "Bad weather... All departures delayed..."
console.log(message2.repeat(10))

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛬".repeat(n)}`)
}
planesInLine(5)
planesInLine(3)
planesInLine(20)

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

function convertUCaseToCamelCase(vars) {}

const textInput = document.createElement("textarea")
document.body.append(textInput)
const button = document.createElement("button")
button.textContent = "Send"
document.body.append(button)

button.addEventListener("click", () => {
  const text = document.querySelector("textarea").value
  const lines = text.split("\n")

  for (const [i, line] of lines.entries()) {
    const [first, second] = line.toLowerCase().trim().split("_")

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`
    const output2 = output.padEnd(25) + "✅".repeat(i + 1)
    console.log(output2)
  }
})

// Some extra string exercises
///////////////////////////////////////
// String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30"

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = (str) => str.slice(0, 3).toUpperCase()

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";")
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)}, (${time.replaceAll(
    ":",
    "h"
  )})`.padStart(45)
  console.log(output)
}

// Assignments for Sets
const allKeywords = []
for (const book of books) {
  allKeywords.push(...book.keywords)
}
console.log(allKeywords)
const uniqueKeywords = new Set(allKeywords)
uniqueKeywords.add("coding")
uniqueKeywords.add("science")
uniqueKeywords.delete("business")
console.log(uniqueKeywords)
const uniqueKeywordsArr = [...uniqueKeywords]
console.log(uniqueKeywordsArr)
uniqueKeywords.clear()

// Assignments for Maps
const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
])
bookMap.set("pages", 464)
console.log(bookMap)
console.log(`${bookMap.get("title")} by ${bookMap.get("author")}`)
console.log(bookMap.size)
if (bookMap.has("author")) console.log("The author of the book is known")

const firstBookMap = Object.entries(books[0])
console.log(firstBookMap)
for (const [key, value] of firstBookMap) {
  if (typeof value === "number") console.log(key)
}

// Assignments for strings
console.log(
  books[0].ISBN["6"],
  books[0].ISBN["4"],
  books[0].ISBN["9"],
  books[0].ISBN[8]
)
const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing"
console.log(quote.indexOf("chess"))
console.log(quote.slice(quote.lastIndexOf(" ") + 1))

function isContributor(name) {
  return name.includes("(Contributor)")
}
console.log(isContributor("Julie Sussman (Contributor)"))
console.log(isContributor("Robert Sedgewick"))

function normalizeAuthorName(author) {
  author = author.trim()
  const firstName = author.slice(0, author.indexOf(" "))
  const lastName = author.slice(
    author.indexOf(" ") + 1,
    author.lastIndexOf(" ") + 1
  )
  const capitalizedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()
  const capitalizedLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
  return capitalizedFirstName + " " + capitalizedLastName
}
console.log(normalizeAuthorName("  JuliE sussMan (Contributor)"))

const newTitle = books[1].title.replace("Programs", "Software")
books[1].newBookTitle = newTitle
console.log(books[1])

function logBookTheme(title) {
  if (title.startsWith("computer")) {
    console.log("This book is about computers")
  } else if (title.includes("algorithms") && title.includes("structures")) {
    console.log("This book is about algorithms and data structures")
  } else if (
    (title.endsWith("system") || title.endsWith("systems")) &&
    !title.includes("operating")
  ) {
    console.log(
      "This book is about some systems, but definitely not about operating systems"
    )
  }
}

function logBookCategories(categories) {
  const separatedCategories = categories.split(";")
  for (const category of separatedCategories) {
    console.log(category)
  }
}

const bookCategories =
  "science;computing;computer science;algorithms;business;operating systems;networking;electronics"
logBookCategories(bookCategories)

function getKeywordsAsString(books) {
  const keywords = []
  for (const book of books) {
    keywords.push(...book.keywords)
  }
  const uniqueKeywords = [...new Set(keywords)]
  return uniqueKeywords.join(";")
}

console.log(getKeywordsAsString(books))

function logBookChapters(chapters) {
  for (const [chapter, page] of chapters) {
    console.log(`${chapter.padEnd(20, "_")} ${page}`)
  }
}

const bookChapters = [
  ["The Basics", 14],
  ["Sorting", 254],
  ["Searching", 372],
  ["Graphs", 526],
  ["Strings", 706],
]
logBookChapters(bookChapters)
