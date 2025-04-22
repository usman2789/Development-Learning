// 🔥 Conditionals and Loops in JavaScript 🔥


// ✅ if...else
// Run code based on a condition.

let score = 80;

if (score >= 90) {
  console.log("A grade"); // runs if score ≥ 90
} else if (score >= 75) {
  console.log("B grade"); // runs if score ≥ 75
} else {
  console.log("C grade"); // runs if score < 75
}


// ✅ switch
// Check multiple exact matches.

let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Yellow");
    break;
  case "apple":
    console.log("Red"); // matches here
    break;
  default:
    console.log("Unknown color");
}


// ✅ Ternary Operator
// Short if-else for assignment or logic.

let age = 18;
let message = age >= 18 ? "Adult" : "Minor";

console.log(message); // "Adult"


// ✅ for loop
// Run a block of code multiple times.

for (let i = 1; i <= 5; i++) {
  console.log(i); // prints 1 to 5
}


// ✅ while loop
// Run while condition is true.

let x = 3;
while (x > 0) {
  console.log(x); // prints 3, 2, 1
  x--;
}


// ✅ do...while
// Runs code once before checking condition.

let y = 0;
do {
  console.log("Runs at least once"); // runs even if false
} while (y > 2);


// ✅ for...of loop
// Loop over array values.

let nums = [10, 20, 30];

for (let num of nums) {
  console.log(num); // 10, 20, 30
}


// ✅ for...in loop
// Loop over object keys.

let use = { name: "Usman", age: 18 };

for (let key in use) {
  console.log(key, use[key]); // name Usman, age 18
}




























