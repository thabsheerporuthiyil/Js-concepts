// Example: Loop Concepts in JavaScript

let arr = [10, 20, 30, 40];
let obj = { a: 1, b: 2, c: 3 };

// for loop
console.log("Using for loop:");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// while loop
console.log("\nUsing while loop:");
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// do-while loop
console.log("\nUsing do-while loop:");
let j = 0;
do {
  console.log(arr[j]);
  j++;
} while (j < arr.length);

// for-in loop (mainly for objects)
console.log("\nUsing for-in loop:");
for (let key in obj) {
  console.log(`${key} : ${obj[key]}`);
}

// for-of loop (for arrays, strings, etc.)
console.log("\nUsing for-of loop:");
for (let value of arr) {
  console.log(value);
}

// forEach method (arrays)
console.log("\nUsing forEach loop:");
arr.forEach((value, index) => {
  console.log(`Index ${index}: ${value}`);
});
