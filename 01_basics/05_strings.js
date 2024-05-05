const name = "mayank"
const repoCount = 50
// console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('mayank-hc')

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('m'));
const newString = gameName.substring(0,4);
console.log(newString); //maya

const anotherString = gameName.slice(-8,4)
console.log(anotherString); //aya

const newString1 = "     hitesh      "
console.log(newString1.trim()); //hitesh


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'));// true
console.log(gameName.split('-')); // Array => [ 'mayank', 'hc' ]



