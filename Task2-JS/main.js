/////////////•Strings And Methods/////////////
// *Task1*//
let userName = "Elzero";

console.log(userName[0].toLowerCase());
console.log(userName.charAt(0).toLowerCase());
console.log(userName.slice(0, 1).toLowerCase());
console.log(userName.substring(0, 1).toLowerCase());
console.log(userName.substr(0, 1).toLowerCase());
console.log(userName[0].toLowerCase().repeat(3));

// *Task2*//
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLowerCase().includes(letterZ));
console.log(word.startsWith(letterE.toUpperCase()));
console.log(word.toLowerCase().endsWith(letterO.toLowerCase()));

///////////////•Array//////////////
// *Task1*//
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(0, num)); // ["Ahmed", "Elham", "Osama"];

// *Task2*//
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.pop();// ["Ahmed", "Eman", "Osama"]
friends.shift();// ["Eman", "Osama"]

console.log(friends); // ["Eman", "Osama"]

// *Task3*//
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// *Task4*//
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2, 6).toUpperCase()); // ZERO 

// *Task5*//
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Method 1
if (haystack.includes(needle)) console.log("Found");
// Method 2
if (haystack.indexOf(needle) !== -1) console.log("Found");
// Method 3
if (haystack.lastIndexOf(needle) !== -1) console.log("Found");

// *Task6*//
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().slice(4, 7);

console.log(allArrs); // fxy

//////////////•Date And Time//////////////
// *Task1*//
let date = new Date("2026-3-6");
let birthday = new Date("2006-1-1");
let diff = date.getTime() - birthday.getTime();
let days = Math.floor(diff / (1000 * 60 * 60 * 24));
let years = Math.floor(days / 365);
let months = Math.floor((days % 365) / 30);
let hours = Math.floor(((days % 365) % 30) * 24);
let minutes = Math.floor((((days % 365) % 30) * 24) * 60);
let seconds = Math.floor((((days % 365) % 30) * 24) * 60 * 60);

console.log(`I'm ${years} Years, ${months} Months, ${hours} Hours, ${minutes} Minutes,  ${seconds} Seconds Old`);

// *Task2*//
let date1 = new Date(0);
date1.setSeconds(1);
console.log(date1.toString());

// *Task3*//
// let now = new Date();
// let lastDayPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
// console.log(lastDayPrevMonth.toString());

// let monthName = lastDayPrevMonth.toLocaleString('en-US', { month: 'long' });
// let lastDay = lastDayPrevMonth.getDate();
// console.log(`Previous Month Is ${monthName} And Last Day Is ${lastDay}`);

// *Task4*//
// String Date
let date11 = new Date("2006-01-01 10:30:00");

// Numbers Date
let date2 = new Date(2006, 1, 1, 10, 30, 0);

// Timestamp
let date3 = new Date(1136073600000);

console.log(date11.toString());
console.log(date2.toString());
console.log(date3.toString());

// *Task6*//
// Write Your Generator Function Here

function* gen() {
    let num = 14;
    let step = 140;
    while (true) {
        yield num;
        num += step;
        step += 200;
    }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

// *Task7*//
function* genNumbers() {
  let numbers = [1, 2, 2, 2, 3, 4, 5];
  let prev;
  for (let num of numbers) {
    if (num !== prev) {
      yield num;
      prev = num;
    }
  }
}

function* genLetters() {
  let letters = ["A", "B", "B", "B", "C", "D"];
  let prev;
  for (let letter of letters) {
    if (letter !== prev) {
      yield letter;
      prev = letter;
    }
  }
}

function* genAll() {
  yield* genNumbers();
  yield* genLetters();
}

let generatorr = genAll();

console.log(generatorr.next()); // {value: 1, done: false}
console.log(generatorr.next()); // {value: 2, done: false}
console.log(generatorr.next()); // {value: 3, done: false}
console.log(generatorr.next()); // {value: 4, done: false}
console.log(generatorr.next()); // {value: 5, done: false}
console.log(generatorr.next()); // {value: "A", done: false}
console.log(generatorr.next()); // {value: "B", done: false}
console.log(generatorr.next()); // {value: "C", done: false}
console.log(generatorr.next()); // {value: "D", done: false}