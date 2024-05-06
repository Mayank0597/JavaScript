 const myArr = [0,1,2,3,4,5,true, "mayank"]// here different types of elements can be stored and it is resizable

// console.log(myArr[7]);

// const myHeroes = ["superman", "batman"]

// const myArr2 = new Array(1,2,3,4);

// // Array Methods
// myArr.push(6);
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5, true, 'mayank', 6 ]

// myArr.pop();
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5, true, 'mayank' ]

// myArr.unshift(9)
// console.log(myArr); // [ 9, 0, 1, 2, 3, 4, 5, true, 'mayank' ]
// myArr.unshift(5)
// console.log(myArr); // [ 5, 9, 0, 1, 2, 3, 4, 5, true, 'mayank' ]

// myArr.shift()
// console.log(myArr); // [ 9, 0, 1, 2, 3, 4, 5, true, 'mayank' ]
// myArr.shift()
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5, true, 'mayank' ]
// myArr.shift()
// console.log(myArr); // [ 1, 2, 3, 4, 5, true, 'mayank' ]


// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(2));// 1
// console.log(myArr.indexOf(9));// -1

const arr = myArr.join()
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, true, 'mayank' ]
console.log(arr);// 0,1,2,3,4,5,true,mayank 
console.log(typeof arr);// string

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);//[ 1, 2 ]
console.log(myArr);// [ 0, 1, 2, 3, 4, 5, true, 'mayank' ]

const myn2 = myArr.splice(1,3)
console.log(myn2);// [ 1, 2, 3 ]
console.log(myArr);// [ 0, 4, 5, true, 'mayank' ]

/*
Splice includes the last index as well as manipulates the original array
while slice does not include last index and does not manipulate original array
*/

