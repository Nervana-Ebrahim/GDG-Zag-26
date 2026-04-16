//String tasks
//Task 1
let userName = "Elzero";

// 1
console.log(userName[0].toLowerCase()); // e

// 2
console.log(userName.charAt(0).toLowerCase()); // e

// 3
console.log(userName.slice(0, 1).toLowerCase()); // e

// 4
console.log(userName.substring(0, 1).toLowerCase()); // e

// 5
console.log(userName.substr(0, 1).toLowerCase()); // e

// 6 
console.log(userName[0].toLowerCase().repeat(3)); // eee

//Task 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";


console.log(word.toLowerCase().includes(letterZ)); // true

console.log(word.toLowerCase().startsWith(letterE)); // true

console.log(word.toLowerCase().endsWith(letterO.toLowerCase())); // true

//Array tasks
//Task 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

console.log(myFriends.slice(false, num));

console.log(myFriends.filter((e, i) => i < num));

//Task 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends);

//Task 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrTwo.concat(arrOne).sort().reverse();

console.log(finalArr);

//Task 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[0].slice(false, website.length).toUpperCase());

//Task 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

haystack.includes(needle) && console.log("Found");

haystack.indexOf(needle) !== -true && console.log("Found");

haystack.lastIndexOf(needle) > -true && console.log("Found");

//Task 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr2.pop().toLowerCase() + arr1.pop().toLowerCase() + arr2.pop().toLowerCase();

console.log(allArrs);

//Date task
//Task 1
let birth = new Date("Oct 25 2004");
let now = new Date();

let diff = now - birth;

console.log(`${Math.floor(diff / 1000)} Seconds`);
console.log(`${Math.floor(diff / 1000 / 60)} Minutes`);
console.log(`${Math.floor(diff / 1000 / 60 / 60)} Hours`);
console.log(`${Math.floor(diff / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.floor(diff / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.floor(diff / 1000 / 60 / 60 / 24 / 365)} Years`);

//Task 2
let date = new Date(0);
date.setFullYear(date.getFullYear() + 10);
date.setSeconds(date.getSeconds() + 1);

console.log(date);

//Task 3
let now = new Date();

let lastDayPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0);

console.log(lastDayPrevMonth);

let monthName = lastDayPrevMonth.toLocaleString("en-US", { month: "long" });
let day = lastDayPrevMonth.getDate();

console.log(`Previous Month Is ${monthName} And Last Day Is ${day}`);

//Task 4
let d1 = new Date("Oct 25 1982");
let d2 = new Date(1982, 9, 25);
let d3 = new Date(404179200000);

console.log(d1);
console.log(d2);
console.log(d3);

//Task 5
let start = performance.now();

for (let i = 1; i <= 99999; i++) {
  console.log(i);
}

let end = performance.now();

console.log(`Loop Took ${Math.floor(end - start)} Milliseconds.`);

//Task 6
function* gen() {
  let num = 14;
  let step = 140;
  while (true) {
    yield num;
    num += step;
    step += 200;
  }
}

// Task 7
function* genAll() {
  let set = new Set([...genNumbers(), ...genLetters()]);
  yield* set;
}

//Task 8
export default function (a, b, c) {
  return a + b + c;
}

let a = 10;
let b = 20;
let c = 30;

export { a as numOne, b as numTwo, c as numThree };