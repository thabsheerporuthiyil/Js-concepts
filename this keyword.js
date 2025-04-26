// 'this' keyword in JavaScript - Examples

// 1. In a simple function (global context)
function showThis() {
  console.log("'this' in a regular function:", this);
}
showThis();
// In non-strict mode, 'this' refers to the global object (window in browsers).
// In strict mode ('use strict'), 'this' will be undefined.

// 2. Inside an object method
const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};
person.greet();
// 'this' refers to the object that owns the method (person).

// 3. In a constructor function
function Car(brand) {
  this.brand = brand;
  console.log("Car brand is:", this.brand);
}
let myCar = new Car("Toyota");
// 'this' refers to the newly created object.

// 4. Using 'this' inside an event handler (browser environment)
const button = document.createElement("button");
button.innerText = "Click Me!";
button.onclick = function () {
  console.log("Button clicked. 'this' is:", this);
  this.style.backgroundColor = "lightblue"; // changes button color
};
document.body.appendChild(button);
// 'this' refers to the HTML element that received the event (the button).

// 5. In an arrow function
const obj = {
  value: 42,
  arrowFunc: () => {
    console.log("'this' in arrow function:", this);
  },
  normalFunc: function () {
    console.log("'this' in normal function:", this);
  }
};
obj.arrowFunc();
obj.normalFunc();
// Arrow functions do NOT have their own 'this'.
// In arrowFunc, 'this' is inherited from the parent scope (global/window).
// In normalFunc, 'this' is the object itself (obj).

// 6. Using call(), apply(), and bind() to manually set 'this'
function sayHello() {
  console.log("Hello, " + this.user);
}
const userObj = { user: "Bob" };

sayHello.call(userObj);   // call sets 'this' immediately
sayHello.apply(userObj);  // apply also sets 'this' (arguments as array)
const boundHello = sayHello.bind(userObj);
boundHello();             // bind creates a new function with 'this' permanently set
