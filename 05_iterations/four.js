//for in loop - isme generally keys hi print hote hai

const obj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

// for object iteration we use for in loop

for (const key in obj) {
 //console.log(key);   
}
//js
// cpp
// rb
// swift

for (const key in obj) {
   // console.log(`${obj[key]}`);
}
// javascript
// c++
// ruby
// swift by apple


for (const key in obj) {
   // console.log(`${key} shortcut is for ${obj[key]}`);
}
// js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

const progrm = ["js",'rb',"rb"]

for (const key in progrm) {
    //console.log(key);
}
// 0
// 1
// 2

for (const key in progrm) {
   // console.log(progrm[key]);
}
// js
// rb
// rb

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('FN',"France")

for (const key in map) {
   // console.log(key);// kuch nai hua, Maps are not iterable

}

