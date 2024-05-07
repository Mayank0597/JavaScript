// singleton

// object literals

const sym = Symbol("key1")

const jsUser = {
    "full name": "Mayank Agrawal",//full name is in double quotes
    age: 26,
    location: "pune",
    email: "mayank@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
//or
//Object.create
// console.log(jsUser.email);
// console.log(jsUser["email"]);// remember give email in the form of string
// console.log(jsUser["full name"]);// here you cant write like this console.log(jsUser.full name) it will show error

jsUser.email = "mayanknew@gmail.com"
//console.log(jsUser.email);// mayanknew@gmail.com

//Object.freeze(jsUser)
jsUser.email = "mayanknew@google.com"
//console.log(jsUser.email);// mayanknew@gmail.com

jsUser.greeting = function(){
    console.log("I am in Pune");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`I am in Pune, ${this["full name"]}`);
}
console.log(jsUser.greetingTwo());