// 🔥 Iterators & Generators in JavaScript 🔥


// ✅ What is an Iterator?
// An object that provides a way to access elements one at a time using `next()`.

const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // { value: 10, done: false }




// ✅ Creating a Custom Iterator
// Define an object with a `next()` method that returns { value, done }.

function createIterator(arr) {
  let index = 0;
  return {
    next: () => {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      } else {
        return { done: true };
      }
    }
  };
}

const it = createIterator(["a", "b"]);
console.log(it.next()); // { value: 'a', done: false }




// ✅ What is a Generator Function?
// A special function using `function*` that returns an iterator and can `yield` values.

function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = genFunc();
console.log(gen.next()); // { value: 1, done: false }





// ✅ `yield` Keyword
// Used in generator functions to pause execution and return value.

function* greet() {
  yield "Hello";
  yield "World";
}

for (let word of greet()) {
  console.log(word); // "Hello" then "World"
}





// ✅ Passing values back to Generator
// You can send data back into a generator using `next(value)`.

function* add() {
  let x = yield "Enter number:";
  console.log("You gave:", x);
}

const g = add();
console.log(g.next());         // Starts and pauses at yield
console.log(g.next(42));       // Passes 42 back in






// ✅ Generators vs Iterators
// Generators auto-create iterators with simpler syntax.

const manualIterator = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        if (step === 0) return { value: "First", done: false }, step++;
        if (step === 1) return { value: "Second", done: false }, step++;
        return { done: true };
      }
    };
  }
};

for (let val of manualIterator) {
  console.log(val); // "First", "Second"
}





// ✅ Use Cases
// - Lazy loading
// - Custom iterable data
// - Infinite sequences
// - Controlling iteration flow

function* infiniteCounter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const counter = infiniteCounter();
console.log(counter.next().value); // 0
console.log(counter.next().value); // 1





// ✅ Generator with Array Destructuring
function* colors() {
  yield "red";
  yield "green";
  yield "blue";
}
const [c1, c2, c3] = colors();
console.log(c1, c2, c3); // red green blue
