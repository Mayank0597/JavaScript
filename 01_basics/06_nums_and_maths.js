// const score = 400

// const balance = new Number(100)
// console.log(balance); //[Number: 100]
// console.log(score); //400

// console.log(balance.toString());//100
// console.log(typeof(balance.toString()));//string

// console.log(balance.toFixed(2));//100.00
// const othernum = 23.8966

// console.log(othernum.toPrecision(2));//24

// const num1 = 1000000
// console.log(num1.toLocaleString());//1,000,000
// console.log(num1.toLocaleString('en-IN'));//10,00,000
// console.log(typeof(num1.toLocaleString));//function

//##############################  MATHS  ########################################


// console.log(Math);
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.3));//4
// console.log(Math.round(4.5));//4
// console.log(Math.round(4.7));//5

// console.log(Math.ceil(4.3));//5
// console.log(Math.floor(4.3));//4
// console.log(Math.max(1,2,3,4));//4

console.log(Math.random());// any value between 0-1 in decimals
console.log((Math.random()*10)+1);// value can be 0.04 also so by adding 1 we can say that value is always greater than 1

const min = 10
const max = 20

Math.random() * (max - min + 1) + min

console.log(Math.floor(Math.random() * (max - min + 1) + min));// Remeber this