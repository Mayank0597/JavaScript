

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName() => Execution, isme function call hoga
//sayMyName => Reference, Agar sirf isko run karenge to kuch nai aayega o/p me

// function addTwoNum(num1, num2){
//     console.log(num1+num2);
// }
// addTwoNum() => NaN
// addTwoNum(1,2)
// addTwoNum(1,"2") //12
// addTwoNum(1,"a") //1a

// Parameters => they are those which are written in function definition
// Arguments => they are in function call

function addTwoNum(num1, num2){
    let ans = num1+num2
    return ans
}

const result = addTwoNum(3,5)
//console.log(result);

function loginUserMessage(username){
    return`${username} just logged in`
}

// console.log(loginUserMessage("Mayank"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());// undefined just logged in

function loginUserMessage(username="Sam"){
    return`${username} just logged in`
}
//console.log(loginUserMessage());// Sam just logged in

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));//2
// console.log(calculateCartPrice(200,300,400));//200

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(1,2,3,4));// [ 1, 2, 3, 4 ]

// function calculateCartPrice(val1, val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(1,2,3,4));// [ 3, 4 ]

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`UserName id ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)

handleObject({
    username:"Mayank",
    price:"222"
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));// 400

console.log(returnSecondValue([1,2,3,4]));// 2
