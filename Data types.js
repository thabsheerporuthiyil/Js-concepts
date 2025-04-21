//In JavaScript, datatypes define the type of value a variable can hold. JavaScript is a dynamically typed language, which means you don’t have to declare the type of a variable—it is determined at runtime.


// Primitive Data Types
let str = "Hello, world";              // String
let num = 42;                          // Number
let bigIntVal = 12345678901234567890n; // BigInt
let bool = true;                       // Boolean
let notDefined;                        // Undefined
let empty = null;                      // Null
let sym = Symbol("unique");            // Symbol

// Non-Primitive (Reference) Data Types
let obj = { name: "Alice", age: 25 };  // Object
let arr = [1, 2, 3, 4];                // Array (technically an object)
let func = function() {                // Function
    return "Hello from function";
};

// Displaying values and their types
console.log("str:", str, "=>", typeof str);
console.log("num:", num, "=>", typeof num);
console.log("bigIntVal:", bigIntVal, "=>", typeof bigIntVal);
console.log("bool:", bool, "=>", typeof bool);
console.log("notDefined:", notDefined, "=>", typeof notDefined);
console.log("empty:", empty, "=>", typeof empty); // "object" is a known JavaScript quirk
console.log("sym:", sym, "=>", typeof sym);
console.log("obj:", obj, "=>", typeof obj);
console.log("arr:", arr, "=>", typeof arr);
console.log("func:", func, "=>", typeof func);



//Output

str: Hello, world => string
num: 42 => number
bigIntVal: 12345678901234567890n => bigint
bool: true => boolean
notDefined: undefined => undefined
empty: null => object
sym: Symbol(unique) => symbol
obj: { name: 'Alice', age: 25 } => object
arr: [ 1, 2, 3, 4 ] => object
func: function() {...} => function
