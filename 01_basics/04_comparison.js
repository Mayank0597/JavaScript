// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2">1);//true
// console.log("02">1);//true

// console.log(null>0); //false
// console.log(null<0); //false
// console.log(null==0); //false
// console.log(null>=0); //true

/*
<,>,>=,<= (comparisons) works differently as compare to ==
comparisons convert null into number and treated it as 0 (sometimes NaN) so for null>=0, it is true 
same for > and <
Avoid this type of comparisons
*/

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

//strict check ===, it check values as well as datatype

console.log("2"===2); //false