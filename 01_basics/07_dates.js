let myDate = new Date()
//console.log(myDate);//2024-05-06T06:14:45.058Z

//console.log(myDate.toString());
/*2024-05-06T06:15:23.022Z
Mon May 06 2024 06:15:23 GMT+0000 (Coordinated Universal Time)
*/

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
/*
Output of above 
Mon May 06 2024
2024-05-06T06:18:22.241Z
2024-05-06T06:18:22.241Z
5/6/2024
*/

console.log(typeof myDate);// object

let newDate = new Date(2023, 0, 23)
console.log(newDate.toDateString());//Mon Jan 23 2023, month start from 0 in javascript

let myTimeStamp = Date.now();
console.log(myTimeStamp);//1714976951755 in milliseconds
console.log(newDate.getTime());