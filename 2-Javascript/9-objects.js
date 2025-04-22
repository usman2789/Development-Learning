// ✅ JavaScript Objects – Full Cheatsheet

// 🔹 What is an Object?
// An object is a collection of properties (key-value pairs) and methods (functions).
const user = {
    name: "Ali",          // property
    age: 18,              // property
    greet() {             // method
      return "Hello!";
    }
  };
  
  // 🔹 Creating Objects
  const obj1 = {};                             // Empty object
  const obj2 = new Object();                   // Using constructor
  const obj3 = Object.create(null);            // Create without prototype
  
  // 🔹 Accessing Properties
  console.log(user.name);      // dot notation
  console.log(user["age"]);    // bracket notation
  
  // 🔹 Adding/Updating/Deleting Properties
  user.email = "ali@mail.com";     // add
  user.age = 19;                   // update
  delete user.email;               // delete
  
  // 🔹 Nested Objects
  const student = {
    name: "Sara",
    address: {
      city: "Lahore",
      zip: 54000
    }
  };
  console.log(student.address.city);   // Access nested property
  
  // 🔹 Methods in Objects
  const calculator = {
    sum(a, b) {
      return a + b;
    }
  };
  console.log(calculator.sum(2, 3)); // 5
  
  // 🔹 Looping through Objects
  for (let key in user) {
    console.log(key, user[key]);     // name Ali, age 19, greet [Function]
  }
  
  // 🔹 Object.keys(), Object.values(), Object.entries()
  console.log(Object.keys(user));     // ["name", "age", "greet"]
  console.log(Object.values(user));   // ["Ali", 19, ƒ]
  console.log(Object.entries(user));  // [["name", "Ali"], ["age", 19], ["greet", ƒ]]
  
  // 🔹 Object Destructuring
  const { names, ages } = user;
  console.log(names);  // Ali
  
  
  // 🔹 Shallow vs Deep Copy
  const shallow = { ...user };              // Shallow copy (spread operator)
  const deep = JSON.parse(JSON.stringify(user));  // Deep copy
  
  
  // 🔹 Object.freeze() & Object.seal()
  const ob = { score: 100 };
  Object.freeze(ob);       // No changes allowed
  ob.score = 200;          // Ignored silently
  Object.seal(ob);         // Can update values, but can't add/remove keys
  
  
  // 🔹 'this' keyword in methods
  const dog = {
    name: "Bruno",
    bark() {
      return `${this.name} says Woof!`;
    }
  };
  console.log(dog.bark());  // Bruno says Woof!
  
  
  // 🔹 Object.assign()
  const target = { a: 1 };
  const source = { b: 2 };
  Object.assign(target, source);  // { a:1, b:2 }
  
  
  // 🔹 Optional Chaining & Nullish Coalescing
  console.log(student?.address?.zip);     // 54000
  console.log(user.nickname ?? "Guest");  // Guest
  

  //🔹Object.is
  //The Object.is() static method determines whether two values are the same value



  console.log(Object.is('1', 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false