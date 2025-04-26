// Example: Conditional Statements in JavaScript

let num = 15;

// if statement
if (num > 10) {
  console.log("Number is greater than 10");
}

// if-else statement
if (num % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// if-else if-else statement
if (num < 0) {
  console.log("Number is negative");
} else if (num === 0) {
  console.log("Number is zero");
} else {
  console.log("Number is positive");
}

// switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Another day");
    break;
}

// Ternary operator
let result = (num > 0) ? "Positive number" : "Negative number or zero";
console.log(result);
