//In JavaScript, an object is a collection of key-value pairs. The keys are called properties, and they can store values, which could be anything: strings, numbers, arrays, functions, or even other objects.

// Creating an object
const person = {
  name: "Rahul",
  age: 25,
  isStudent: true
};

console.log("Accessing properties:");
console.log(person.name);        // Dot notation → Rahul
console.log(person["age"]);      // Bracket notation → 25

// Adding and modifying properties
person.city = "Kochi";           // Add new property
person.age = 26;                 // Modify existing property

console.log("\nAfter adding/modifying:");
console.log(person);

// Deleting a property
delete person.isStudent;

console.log("\nAfter deleting isStudent:");
console.log(person);

// Looping through the object
console.log("\nLooping through properties:");
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Object with a function (method)
const user = {
  name: "Sara",
  greet: function () {
    console.log("\nHello, " + this.name);
  }
};

user.greet(); // Call the method
