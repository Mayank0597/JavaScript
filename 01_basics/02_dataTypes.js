"use strict"; // treat all JS code as newer version

//alert( 3 + 3 ) // we are using node.js not browser

//console.log(3+3) console.log("Mayank"); // error

/*
console.log(3+3)
console.log("Mayank");
Write in this way
*/

let name = "mayank"
let age =18
let isLoggedIn = false

/*
PRIMITIVE DATATYPES

number => 2 to power 53
bigint
string => ""
boolean => true/false
null => standalone value
undefined => no value assigned
symbol => unique

OBJECTS


*/
console.log(typeof "mayank"); // output => string
console.log(typeof null); // o/p => object, null is of type object, interview question
console.log(typeof undefined); // o/p => undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId); //false

