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

//*******************************  Operations  **********************************

let value1 = 3
let negValue = -value1
console.log(negValue);//-3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // power
console.log(2/2);
console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1+str2
console.log(str3);

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32
 
console.log(true);//true
console.log(+true);//1
//console.log(true+);//error


let num1, num2, num3
num1 = num2 = num3 = 2 + 2// not preferable

let gameCounter = 100
gameCounter++
console.log(gameCounter);//101



