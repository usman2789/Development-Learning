// 🔥 JavaScript `this` Keyword – Complete Cheatsheet 🔥


// ✅ 1. Global Scope (non-strict)
console.log(this); // 👉 In browsers: `window` object


// ✅ 2. In Regular Functions
function normalFunc() {
  console.log(this);
}
normalFunc(); // 👉 In non-strict: `window`, in strict: `undefined`


// ✅ 3. In Arrow Functions
const arrowFunc = () => {
  console.log(this);
};
arrowFunc(); // 👉 `this` refers to the outer (lexical) context


// ✅ 4. Inside Object Methods
const obj = {
  name: "Box",
  show() {
    console.log(this.name); // 👉 `this` refers to obj
  }
};
obj.show(); // "Box"


// ❌ 5. Arrow Function as Method (wrong behavior)
const obj2 = {
  name: "Circle",
  show: () => {
    console.log(this.name); // 👉 `this` refers to outer/global, not obj2
  }
};
obj2.show(); // undefined


// ✅ 6. In Event Handlers
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this); // 👉 Refers to the button element
});

// ❌ Arrow function in handler
btn.addEventListener("click", () => {
  console.log(this); // 👉 Lexical context (probably `window`)
});


// ✅ 7. Inside Constructor Functions
function Person(name) {
  this.name = name;
}
const user = new Person("Alex");
console.log(user.name); // 👉 "Alex"


// ✅ 8. explicit binding With call(), apply(), bind()


function greet() {
  console.log("Hello", this.username);
}
const user1 = { username: "Dev" };
greet.call(user1);  // 👉 "Hello Dev"
greet.apply(user1); // 👉 Same as call
const bound = greet.bind(user1);
bound(); // 👉 "Hello Dev"


// ✅ 9. Function Borrowing with `this` in JavaScript

// 🔹 Function Borrowing means using a method from one object in another object.

const person1 = {
  name: "Alice",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

const person2 = {
  name: "Bob"
};

// 🔸 Using `call()` to borrow greet method from person1
person1.greet.call(person2); // 👉 "Hello, I'm Bob"

// 🔸 Using `apply()` to borrow greet method
person1.greet.apply(person2); // 👉 "Hello, I'm Bob"

// 🔸 Using `bind()` to permanently bind greet method to person2
const boundGreet = person1.greet.bind(person2);
boundGreet(); // 👉 "Hello, I'm Bob"


// 🧠 Why it works:
// - `call`, `apply`, and `bind` allow you to set the `this` keyword
//   inside a function explicitly.






// ✅ 10. In Strict Mode (`'use strict'`)
"use strict";
function strictFunc() {
  console.log(this); // 👉 undefined
}
strictFunc();


// 🔁 Summary
// - `this` depends on how the function is **called**
// - Arrow functions don't have their own `this`
// - In methods: `this` = object
// - In constructors: `this` = new object being created
// - In event handlers: `this` = DOM element (unless arrow func)
// - In strict mode functions: `this` = undefined
