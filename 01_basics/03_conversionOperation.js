let score = 33

console.log(typeof score); // number
console.log(typeof (score)); //number

let value = "33"
console.log(typeof value);// string

let valueInNumber = Number(value) 
console.log(typeof valueInNumber); // number

value = "33abc"
valueInNumber = Number(value)
console.log(typeof value);// string
console.log(typeof valueInNumber);// number
console.log(valueInNumber);// NaN

score = null
console.log(score);// null
console.log(typeof score);// object

/*
typeof to Number
"33" => 33
"33abc" => NaN
true => 1
false => 0
*/

let isLoggedIn = true
console.log(isLoggedIn); //true
console.log(typeof Number(isLoggedIn)); // number

isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);// true

isLoggedIn=""
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);// false

isLoggedIn="mayank"
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);// true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);//33
console.log(typeof stringNumber);// string