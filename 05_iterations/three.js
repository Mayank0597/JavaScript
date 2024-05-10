// for of loop

["","",""] // Array of strings

[{},{},{}] // Array of object


const arr = [1,2,3,4,5]

for (const i of arr) {
    //console.log(i);
}

const greetings = "Hello World"
for (const i of greetings) {
    //console.log(`Each char is ${i}`);
}


// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('FN',"France")

//console.log(map); // Map(3) { 'IN' => 'India', 'USA' => 'America', 'FN' => 'France' }

for (const key of map) {
    //console.log(key);
}
// [ 'IN', 'India' ]
// [ 'USA', 'America' ]
// [ 'FN', 'France' ]

for (const [key,value] of map) {
    //console.log(key, ':' ,value);
}
// IN : India
// USA : America
// FN : France

const obj = {
    "game1":"NFS",
    "game2":"Contra"
}

for (const [key,value] of obj) {
    console.log(key,":",value);// error, obj is not iterable
}