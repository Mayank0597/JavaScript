//const obj = new Object()// Singleton Object, o/p=> {}
const obj = {}// non singleton object, o/p=> {}

//console.log(obj);

obj.id = "123abc"
obj.name = "Mayank"
obj.isLoggedIn = false
//console.log(obj);

const regularUser ={
    email: "m@gmail.com",
    fullname: {
        userFullName:{
            firstName: "Mayank",
            lastName: "Agrawal"
        }
    }
}
//console.log(regularUser.fullname.userFullName.firstName);//Mayank
//console.log(regularUser.fullname.userFullName);// { firstName: 'Mayank', lastName: 'Agrawal' }

const ob1 = { 1: "a", 2: "b"}
const ob2 = { 3: "a", 4: "b"}
let ob3 = {ob1,ob2}
//console.log(ob3);// { ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'a', '4': 'b' } }

//ob3 = Object.assign(ob1,ob2)
//console.log(ob3);// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// ob3 = {...ob1,...ob2}
// console.log(ob3);// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "m@g.com"
    },
    {
        id: 2,
        email: "n@g.com"
    },
    {
        id: 3,
        email: "a@g.com"
    }
    
]
//console.log(users[1].email);// n@g.com

console.log(obj);// { id: '123abc', name: 'Mayank', isLoggedIn: false }

console.log(Object.keys(obj));// [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(obj))// [ '123abc', 'Mayank', false ]
console.log(Object.entries(obj))// [ [ 'id', '123abc' ], [ 'name', 'Mayank' ], [ 'isLoggedIn', false ] ]
console.log(obj.hasOwnProperty("isLoggedIn"));// true
console.log(obj.hasOwnProperty("isLogged"));// false