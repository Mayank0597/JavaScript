//Immediately invoked function expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai(); // DB CONNECTED

//    (function chai(){
//          console.log(`DB CONNECTED`);
//      })() // DB CONNECTED


    //  ( () => {
    //     console.log(`in inner function`);
    //  })() // error, because in the above code i have to explicitly close the code by adding semi-colon to it

    // (function orCode() {
    //         console.log(`in inner function`);
    //       })() //error, because in the above code i have to explicitly close the code by adding semi-colon to it

    (function chai2(){
        console.log(`DB CONNECTED`);
    })();

    ( () => {
        console.log(`in chai2 method`);
    })();

    (function chai2()  {
        console.log(`in chai2 method`);
    })();

    ( (name) => {
        console.log(`in chai2 method ${name}`);
    })(`Mayank`);

    // if we are writing two iife code than we have to compulsorily add semicolon to the first code