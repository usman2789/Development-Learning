// =====================
// 📦 STRINGS IN JAVASCRIPT
// =====================

// ✅ Creating Strings
let name = "John";
let greeting = `Hello, ${name}!`; // Template literal

// ✅ String Length
console.log(name.length); // 4

// ✅ Accessing Characters
console.log(name[0]); // 'J'

// ✅ String Methods

// 🔹 toUpperCase() / toLowerCase()
console.log(name.toUpperCase()); // 'JOHN'
console.log(name.toLowerCase()); // 'john'

// 🔹 trim() – removes whitespace
let messy = "   hello   ";
console.log(messy.trim()); // 'hello'

// 🔹 slice(start, end) – extracts part of string
let str = "JavaScript";
console.log(str.slice(0, 4)); // 'Java'

// 🔹 substring(start, end) – similar to slice but no negatives
console.log(str.substring(4, 10)); // 'Script'

// 🔹 replace() / replaceAll()
let text = "I love apples";
console.log(text.replace("apples", "bananas")); // 'I love bananas'

// 🔹 includes() – returns true/false
console.log(str.includes("Script")); // true

// 🔹 indexOf() / lastIndexOf()
console.log(str.indexOf("a")); // 1
console.log(str.lastIndexOf("a")); // 3

// 🔹 startsWith() / endsWith()
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true

// 🔹 repeat()
console.log("Ha!".repeat(3)); // 'Ha!Ha!Ha!'

// 🔹 split() – converts string to array
let csv = "apple,banana,grape";
console.log(csv.split(",")); // ['apple', 'banana', 'grape']

// 🔹 join() – array to string (opposite of split)
let arr = ['A', 'B', 'C'];
console.log(arr.join("-")); // 'A-B-C'

// ✅ String Comparison
let a = "apple";
let b = "banana";
console.log(a === b); // false
console.log(a < b);   // true (lexicographical)

// ✅ Escape Characters
// \n – new line, \t – tab, \' or \" – quotes
console.log("Line1\nLine2");

// ✅ Template Literals (multi-line, embedded expressions)
let age = 18;
let info = `Name: ${name}
Age: ${age}`;
console.log(info);

/*
Output:
Name: John
Age: 18
*/
