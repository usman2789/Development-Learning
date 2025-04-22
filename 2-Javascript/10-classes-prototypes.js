// ✅ JavaScript Classes & Prototypes – Cheatsheet

// 🔹 What are Classes?
// Classes are blueprints for creating objects with shared structure and behavior.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hi, I'm ${this.name}`;
    }
  }
  const user1 = new Person("Ali", 18);
  


  // 🔹 Class Expression (optional way to define)
  const Car = class {
    constructor(brand) {
      this.brand = brand;
    }
  };
  



  // 🔹 Adding Methods to Class
  class Animal {
    speak() {
      return "Animal speaks";
    }
  }
  


  // 🔹 Inheritance (extends & super)
  class Dog extends Animal {
    speak() {
      return "Dog barks";
    }
  }
  const dog1 = new Dog();
  console.log(dog1.speak()); // Dog barks
  


  // 🔹 Static Methods
  // Belong to class, not instances
  class MathUtil {
    static square(x) {
      return x * x;
    }
  }
  console.log(MathUtil.square(5)); // 25
  



  // 🔹 Getters & Setters
  class Score {
    constructor() {
      this._points = 0;
    }
  
    get points() {
      return this._points;
    }
  
    set points(value) {
      if (value >= 0) this._points = value;
    }
  }
  const s = new Score();
  s.points = 42;
  console.log(s.points); // 42
  



  // 🔹 Private Fields (#)
  // Introduced in ES2022, used to make fields private
  class Secret {
    #password = "1234";
    reveal() {
      return this.#password;
    }
  }
  const sec = new Secret();
  console.log(sec.reveal()); // 1234
  



  // 🔹 Prototypes – Behind the Scenes
  // Every function has a prototype object, used for inheritance
  function Student(name) {
    this.name = name;
  }
  Student.prototype.sayHello = function () {
    return `Hello, ${this.name}`;
  };
  const std1 = new Student("Sara");
  console.log(std1.sayHello()); // Hello, Sara
  




  // 🔹 Prototype Chain
  // JS looks for properties up the prototype chain
  console.log(std1.toString()); // found in Object.prototype
  



  // 🔹 instanceof Operator
  console.log(std1 instanceof Student); // true
  



  // 🔹 Object.getPrototypeOf()
  console.log(Object.getPrototypeOf(std1)); // Student.prototype
  


  
  // 🔹 Manual Prototype Linking
  const protoObj = {
    greet() {
      return "Hello from proto!";
    }
  };
  const linkedObj = Object.create(protoObj);
  console.log(linkedObj.greet()); // Hello from proto!
  