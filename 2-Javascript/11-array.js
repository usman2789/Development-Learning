// ✅ Arrays & Array Methods — Cheatsheet

// 🔹 What is an Array?
// An ordered list of values that can hold any data type.
// Arrays are mutable, meaning you can change their contents after creation.

let arrs = [1, 2, 3];
let mixed = [1, "hi", true];

// 🔹 Accessing & Modifying
arr[0];         // Access → 1
arr[1] = 99;    // Modify → [1, 99, 3]
arr.length;     // → 3

// 🔹 Common Array Methods:

// ✅ push() - Add to end
arr.push(4);     // [1, 99, 3, 4]

// ✅ pop() - Remove from end
arr.pop();       // [1, 99, 3]

// ✅ unshift() - Add to start
arr.unshift(0);  // [0, 1, 99, 3]

// ✅ shift() - Remove from start
arr.shift();     // [1, 99, 3]

// ✅ indexOf() - First index of a value
arr.indexOf(99); // → 1

// ✅ includes() - Check if value exists
arr.includes(3); // → true

// ✅ find() - First match by condition
arr.find(x => x > 50); // → 99

// ✅ findIndex() - Index of first match
arr.findIndex(x => x === 3); // → 2

// ✅ filter() - Filter values by condition
arr.filter(x => x > 50); // → [99]

// ✅ map() - Transform values
arr.map(x => x * 2); // → [2, 198, 6]

// ✅ reduce() - Accumulate into one value
arr.reduce((acc, val) => acc + val, 0); // → 103

// ✅ slice() - Copy a section (non-destructive)
arr.slice(0, 2); // → [1, 99]

// ✅ splice() - Insert/remove values (destructive)
arr.splice(1, 1);       // remove 1 item at index 1
arr.splice(1, 0, 42);   // insert 42 at index 1

// ✅ forEach() - Loop over elements
arr.forEach(x => console.log(x)); // log each

// ✅ sort() - Sort values
arr.sort((a, b) => a - b); // ascending order

// ✅ reverse() - Reverse array
arr.reverse();

// ✅ concat() - Merge arrays
let newArr = arr.concat([5, 6]);

// ✅ join() - Convert array to string
arr.join("-"); // → "1-42-3"

// 🔹 Cool Tricks:

// ✅ Create array from range
Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]

// ✅ Copy array
let copy = [...arr];

// ✅ Remove duplicates
let num6 = [1, 1, 2, 3];
[...new Set(nums)]; // → [1, 2, 3]




