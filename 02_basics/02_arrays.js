const marvel = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

//marvel.push(dc)
// console.log(marvel);// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel[3]);// [ 'superman', 'flash', 'batman' ]

marvel.concat(dc)
console.log(marvel);// [ 'thor', 'ironman', 'spiderman' ]

const allHero = marvel.concat(dc)
console.log(allHero);// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// push concat on existing array but concat is stored in new array

const allNewHeros = [...marvel,...dc]
console.log(allNewHeros);// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArray = anotherArray.flat(Infinity)
console.log(realArray);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("Mayank"));// false
console.log(Array.from("Mayank"));//[ 'M', 'a', 'y', 'a', 'n', 'k' ]

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));// [ 100, 200, 300 ]

