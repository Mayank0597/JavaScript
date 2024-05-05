// Primitive and Non-Primitive(Reference) datatypes 
//based on how data is stored in memory and accessed

/*
Primitive - 7 categories

1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol(to make value unique)
7. BigInt

Non-Primitive(Reference type)

Arrays, Objects, Functions

JavaScript is dynamically typed.
 This means that the type of a variable is determined at runtime,
  not at the time the code is compiled or declared.

   
  let x; // variable x is initially undefined

x = 10; // x is now a number
console.log(typeof x); // Output: "number"

x = "hello"; // x is now a string
console.log(typeof x); // Output: "string"

*/

//Array
const heros = ["shaktiman","naggraj","doga"]

//Object, in curlly braces in key value pair
let  myObj = {
    name : "hitesh",
    age : 22
}

//Function
const myFunction = function(){
    console.log("Hello World");
}

console.log(myFunction); // [Function: myFunction]

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory - Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "abcdotcom" 

