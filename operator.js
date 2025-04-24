// ✅ Arithmetic Operators
let a = 10;
let b = 3;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.333...
console.log("a % b =", a % b); // 1
console.log("a ** b =", a ** b); // 1000 (a to the power b)

// ✅ Assignment Operators
let x = 5;
console.log("\nAssignment Operators:");
x += 3; // same as x = x + 3
console.log("x += 3 →", x); // 8
x *= 2; // x = x * 2
console.log("x *= 2 →", x); // 16

// ✅ Comparison Operators
let num1 = 10;
let num2 = "10";

console.log("\nComparison Operators:");
console.log("num1 == num2 →", num1 == num2);   // true (loose equality, checks value)
console.log("num1 === num2 →", num1 === num2); // false (strict equality, checks value + type)
console.log("num1 != num2 →", num1 != num2);   // false
console.log("num1 !== num2 →", num1 !== num2); // true
console.log("num1 > 5 →", num1 > 5);           // true
console.log("num1 <= 10 →", num1 <= 10);       // true

// ✅ Logical Operators
let isLoggedIn = true;
let isAdmin = false;

console.log("\nLogical Operators:");
console.log("isLoggedIn && isAdmin →", isLoggedIn && isAdmin); // false
console.log("isLoggedIn || isAdmin →", isLoggedIn || isAdmin); // true
console.log("!isAdmin →", !isAdmin); // true (negation)
