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