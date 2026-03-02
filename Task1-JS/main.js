//////////• Data Types And Variables ///////////
//*Task1*//
// Create Variables 
let numberOne = 10;
let numberTwo = 20;

// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate 
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => type

console.log(`${numberOne}${numberTwo}`); // Template Literals 
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals => type

console.log(numberTwo + "\n" + numberOne); // Normal Concatenate with new line => \n

console.log(`${numberTwo}
${numberOne}`); // Template Literals with new line => ~~

//*Task2*//
//HTML only

//*Task3*//
console.log("I\'m In\n\\\\\nLove \\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"");

//*Task4*//
let a = 21;
let b = 20;

console.log("_" + a + "_" + b + a + "_" + b + a + "_" + b + a + "_" + b + "_");

//-------------------------------------------------------------------------------------------------------------------//

///////////////• Operators///////////////
// *Task1*//
console.log(10 * 20 / 15 % 3 * 190 * 10 / 400); // 15%3=0

// *Task2*//
let num = 3;
//1
console.log(num + num); 
//2
console.log(num - -num); 
//3
console.log(num * (true + true)); // 3 * 2
//4
console.log(num / (false + true) + num); // 3/1 + 3
//5
console.log(num * true + num); // 3*1 + 3
//6
console.log(num + (true * num)); // 3 + 3*1

// *Task3*//
let x="10";
//1
console.log(+x + +x); // 10 + 10=20
//2
console.log(+x - -x); // 10 - -10=20
//3
console.log(+x * (true + true)); // 10 * 2=20
//4
console.log(+x / (false + true) + +x); // 10/1 + 10=20
//5
console.log(+x * true + +x); // 10*1 + 10=20

// *Task4*//
let points = 10;
console.log(points + true + true + true ) ; // 10 + 1 + 1 + 1 = 13
console.log(points - true - true - true - true - true ); // 10 - 1 - 1 - 1 - 1 - 1 = 5

//----------------------------------------------------------------------------------------------------//

//////////////• Numbers//////////////
// *Task1*//
console.log(1e5);
console.log(10 ** 5);
console.log(1000 * 100);
console.log(1e3 * 1e2);
console.log(200000 / 2);
console.log(50000 + 50000);
console.log(100000);
console.log(+"100000");
console.log(parseInt("100000"));
console.log(Number("100000"));
console.log(Math.pow(10, 5));
console.log(1e4 * 10);
console.log(25000 * 4);
console.log(400000 / 4);

// *Task2*//
console.log(Number.MAX_SAFE_INTEGER);

// *Task3*//
console.log(Number.MAX_SAFE_INTEGER.toString().length);

// *Task4*//
let myVar = "100.56789 Views";

console.log(parseInt(myVar));//100
console.log(+parseFloat(myVar).toFixed(2));//100.57

//*Task5*//
let y = 10;

console.log(Number.isInteger(y) + Number.isInteger(y));

// *Task6*//
let flt = 10.4;

console.log(Math.floor(flt));
console.log(Math.trunc(flt));
console.log(Math.round(flt));
console.log(parseInt(flt));
console.log(+flt.toFixed());

// *Task7*//
console.log(Math.floor(Math.random() * 5));// random number between 0 and 1 => *5 = 0,1,2,3,4

//----------------------------------------------------------------------------------------------------//

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

//------------------------------------------------------------------------------------

/////////////• Comparison & Logical Operators/////////////
// *Task1*//
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10");           // true
console.log(-50 != 0 || +"-40");     // true
console.log(10 > 5 && "-40" < 0);   // true
console.log("10" === "10" || 10);    // true
console.log(20 > 10 || false);       // true

// *Task2*//
let num1 = 10;
let num2 = 20;

console.log(num1 < num2);   // true
console.log(num2 > num1);   // true
console.log(num1 != num2);  // true
console.log(num1 <= num2);  // true
console.log(num2 >= num1);  // true
console.log(num1 == num1 || num2 == num2); // true

// *Task3*//
let m = 20;
let n = 30;
let l = 10;

console.log(m < n && m > l); // true
console.log(m < n && m < l); // false
console.log(m > n || m > l); // true

//-------------------------------------------------------------------------------------

//////////////•  If Conditions //////////////
// *Task1*//
let k = 9;
if (k < 10) console.log("00" + k);
else if (k < 100) console.log("0" + k);
else console.log(k);

k = 20;
if (k < 10) console.log("00" + k);
else if (k < 100) console.log("0" + k);
else console.log(k);

k = 110;
if (k < 10) console.log("00" + k);
else if (k < 100) console.log("0" + k);
else console.log(k);

// *Task2*//
let q = 9;
let str = "9";
let str2 = "20";

if (q == str) console.log(`${q} Is The Same Value As ${str}`);
if (q == str && typeof q !== typeof str) console.log(`${q} Is The Same Value As ${str} But Not The Same Type`);
if (q != str2 && typeof q !== typeof str2) console.log(`${q} Is Not The Same Value Or The Same Type As ${str2}`);
if (typeof str === typeof str2 && str != str2) console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);

// *Task3*//
let o = 10;
let w = 30;
let u = "30";

if (u > o && typeof u !== typeof w) {
  console.log(`${u} Is Larger Than ${o} And Type ${typeof u} Not The Same Type As ${typeof w}`);
}
if (u > o && u == w && typeof u !== typeof w) {
  console.log(`${u} Is Larger Than ${o} And Value Is The Same As ${w} And Type ${typeof u} Not The Same Type As ${typeof w}`);
}
if (u != o && typeof u !== typeof o && typeof u !== typeof w) {
  console.log(`${u} Value And Type Is Not The Same As ${o} And Type Is Not The Same As ${w}`);
}

// *Task4*//
let r1 = 11;      
let r2 = 10;
let r3 = "10";     
let r4 = 20;      

if (r1 > r2) console.log("True");                    // True
if (r1 > r2 && r1 < r4) {
    console.log("True");
 } else {
  console.log("False");
}

if (r1 > r2 && r1 === r3){
     console.log("True");
} else {
    console.log("False");
}
if ((r1 + r2) < r4) {
    console.log("True");  
} else {
    console.log("False");
}
if ((r1 + r3) < r4) {
    console.log("True");
} else {
    console.log("False");
}
if ((r1 + r2 + r3) < r4) {
    console.log("True");   
} else {
    console.log("False");
}
if (r4 - (r1 + r3) + r2 === 21) {
    console.log("True"); 
}
else {
    console.log("False");
}

//--------------------------------------------------------------------------------------//

////////////• Switch Statements ////////////
// *Task1*//
let day = "   friday  ";


day = day.trim().toLowerCase();
day = day.charAt(0).toUpperCase() + day.slice(1);

switch(day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
}

//------------------------------------------------------------------------------------//

//////////• Loop - For //////////
// *Task1*//
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) continue;
  console.log(i);
}

// *Task2*//
let stt = 10;
let en = 0;
let stop = 3;

for (let i = stt; i >= stop; i--) {
  console.log(i < stt && i < 10 ? "0" + i : i);
}

// *Task3*//
let sart = 1;
let ed = 6;
let breaker = 2;

for (let i = sart; i <= ed; i++) {
  console.log(i);
  for (let j = breaker; j <= 4; j += breaker) {
    console.log("-- " + j);
  }
}

//*Task4*//
let index = 10;
let jump = 2;

for (let i = index; i > 0; i -= jump) {
  console.log(i);
}

//*Task5*//
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = 1;

for (let i = 0; i < friends.length; i++) {
  if (friends[i][0].toLowerCase() === letter) continue;
  console.log(`${counter} => ${friends[i]}`);
  counter++;
}

//*Task6*//
let strt = 0;
let swappedName = "elZerO";
let result = "";

for (let i = strt; i < swappedName.length; i++) {
  let char = swappedName[i];
  result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}

console.log(result);

//*Task7*//
let star = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = star; i < mix.length; i++) {
  if (typeof mix[i] === "number" && mix[i] !== 1) {
    console.log(mix[i]);
  }
}

//------------------------------------------------------------------------------------//
//////////• Loop - While //////////
//*Task1*//
let friendss = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let indexx = 0;
let counterr = 0;

while (indexx < friendss.length) {
  if (
    typeof friendss[indexx] === "string" &&
    friendss[indexx][0].toLowerCase() !== "a"
  ) {
    counterr++;
    console.log(`${counterr} => ${friendss[indexx]}`);
  }
  indexx++;
}

//------------------------------------------------------------------------------------//
///////////•Function And Parameters//////////
//*Task1*//
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//*Task2*//
function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined) {
        console.log("Second Number Not Found");
}
    else if (operation === undefined || operation === "add") {
        console.log(firstNum + secondNum);
    } else if (operation === "subtract") {
        console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
        console.log(firstNum * secondNum);
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

//*Task3*//
function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100) {
}
    else {
        console.log(`Months Example => ${theAge * 12} Months`);
        console.log(`Weeks Example => ${theAge * 52} Weeks`);
        console.log(`Days Example => ${theAge * 365} Days`);
        console.log(`Hours Example => ${theAge * 365 * 24} Hours`);
        console.log(`Minutes Example => ${theAge * 365 * 24 * 60} Minutes`);
        console.log(`Seconds Example => ${theAge * 365 * 24 * 60 * 60} Seconds`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//*Task4*//
function checkStatus(a, b, c) {
  let name;
  let age;
  let availability;

  if (typeof a === "string") name = a;
  else if (typeof a === "number") age = a;
  else availability = a;

  if (typeof b === "string") name = b;
  else if (typeof b === "number") age = b;
  else availability = b;

  if (typeof c === "string") name = c;
  else if (typeof c === "number") age = c;
  else availability = c;

  console.log(
    `Hello ${name}, Your Age Is ${age}, You Are ${
      availability ? "Available" : "Not Available"
    } For Hire`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//------------------------------------------------------------------------------------//
////////////• Function And Scopes //////////
//*Task1*//
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let nameParts = zName.split(" ");
    return `${nameParts[0]} ${nameParts[1][0].toUpperCase()}.`;
  }

  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
  }

  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }

  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }

  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//*Task2*//
let itsMe = () => `Iam A Normal Function`;

console.log(itsMe());

let urlCreate = (protocol, web, tld) =>
  `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org"));

//*Task3*//
let checker = zName => status => salary =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000));
console.log(checker("Ahmed")("Not Available")());

//*Task4*//
function specialMix(...data) {
  let sum = 0;
  let hasNumber = false;

  for (let i = 0; i < data.length; i++) {
    let value = parseInt(data[i]);

    if (!isNaN(value)) {
      sum += value;
      hasNumber = true;
    }
  }

  return hasNumber ? sum : "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings