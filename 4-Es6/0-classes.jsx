// 1. What is a Class?
// A class in JavaScript is a blueprint for creating objects with shared properties and methods.
// It's a template that defines how the objects of that class should behave.

// Real-World Analogy:
// Think of a class as a blueprint for building houses. The class defines the structure and 
// features of the house, but you still need to build an actual house (object) from it.

class Car {
    // 2. Constructor: Initializes the object with specific values when it's created.
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    // 3. Method: Functions that belong to a class to define its behavior.
    start() {
      console.log(`${this.make} ${this.model} is starting.`);
    }
  
    stop() {
      console.log(`${this.make} ${this.model} is stopping.`);
    }
  }
  
  // 4. Creating a new instance (object) of the Car class.
  const car1 = new Car("Toyota", "Camry");
  
  // Calling methods on the created object.
  car1.start(); // Output: Toyota Camry is starting.
  car1.stop(); // Output: Toyota Camry is stopping.
  
  // 5. Creating another instance of the Car class.
  const car2 = new Car("Honda", "Civic");
  car2.start(); // Output: Honda Civic is starting.
  car2.stop(); // Output: Honda Civic is stopping.
  
  
  // 6. Why Use Methods in Classes?
  // Methods allow us to define common actions for objects of the same type.
  // Without methods, each object would need separate functions to perform actions, leading to repetitive and messy code.
  
  // Real-World Analogy:
  // If every car in a factory didn't have a built-in 'start' or 'stop' action,
  // each one would require a separate function to start or stop, which would be very inefficient and hard to manage.
  
  
  // 7. Example of Using Methods in a Class
  class Dog {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} says Woof!`);
    }
  }
  
  // Creating an object of Dog
  const dog1 = new Dog("Buddy", "Golden Retriever");
  dog1.bark(); // Output: Buddy says Woof!
  
  
  // 8. Inheritance: Extending Classes using "extend" keyword
  // Inheritance allows one class to inherit properties and methods from another class.
  // This helps create specialized versions of a class without repeating code.
  
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Dog class inherits from Animal class
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  // Creating an object of Dog
  const dog = new Dog("Rex");
  dog.speak(); // Output: Rex barks.
  
  
  // 9. Access Modifiers (Optional)
  // In JavaScript classes, properties can be public (accessible outside the class),
  // or we can simulate private properties using naming conventions or newer `#` syntax (for truly private fields).
  
  class CarWithPrivateField {
    #engineStatus = false; // Private field
  
    start() {
      this.#engineStatus = true;
      console.log("Engine started.");
    }
  }
  
  // Creating an object of CarWithPrivateField
  const car = new CarWithPrivateField();
  car.start(); // Output: Engine started.
  
  // #engineStatus is private and cannot be accessed directly outside the class.
  