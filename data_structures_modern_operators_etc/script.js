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
