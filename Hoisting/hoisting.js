//Hoisting is a phenomenon in js by which you can access variables and functions even before its initialized.

greet();       // ✅ Works because function is hoisted
console.log(x); // ✅ Outputs: undefined, because var is hoisted but not initialized

var x = 10;

function greet() {
  console.log("Hello from hoisted function!");
}

console.log(x); // ✅ Outputs: 10
