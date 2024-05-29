const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000); 
})
// resolve is directly connected with .then()
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username : "Chai",
            email:"ex@gmail.com"
        })
    }, 1000);
})

promiseThree.then(function(user){

    console.log(user);
})


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName:"Mayank",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }),1000
})

promisefour.then((user)=>{
    console.log(user);
    return user.userName;
}).then((myuser)=>{
    console.log(myuser);
}).catch(function(err){
    console.log(err);
}).finally(()=>
{
    console.log("Promise is either resolved or rejected");
})


const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName:"Mayank",password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }),1000
});

async function consumePromiseFive(){
    try {
        const response = await promisefive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();