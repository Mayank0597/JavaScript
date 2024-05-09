const user = {
    userName: "Mayank",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website`);
        console.log(this);
    }


}
//user.welcomeMessage()// Mayank, Welcome to website
// user.username = "abc"
// user.welcomeMessage()// abc, Welcome to website

// const chai = function(){
//     let userName = "Mayank"
//     console.log(this.userName);// undefined
// }

const chai = () => {
    let userName = "Mayank"
    console.log(this.userName);// undefined
}

//chai()

// const addTwo = (num1,num2) => {
//     return num1+num2 // Explicit return
// }
//or
//const addTwo = (num1,num2) =>  (num1+num2) // implicit return

//const addTwo = (num1,num2) =>  {username:"Mayank"} // undefined

const addTwo = (num1,num2) =>  ({username:"Mayank"}) // { username: 'Mayank' }

console.log(addTwo(3,4));

