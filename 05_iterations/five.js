const coding = ["js","ruby","python","java","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })
// js
// ruby
// python
// java
// cpp

// coding.forEach( (value) => {
//     console.log(value);// same as above output
// })

function printMe(item){
    console.log(item);
}

//coding.forEach(printMe())// error
//coding.forEach(printMe)// correct output

coding.forEach( (item, index,arr) => {
    //console.log(item, index, arr);
})
// js 0 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// python 2 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// java 3 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'python', 'java', 'cpp' ]

const myCoding = [
    {
        lang:"javascript",
        langFileName:"js"
    },
    {
        lang:"java",
        langFileName:"java"
    },
    {
        lang:"c++",
        langFileName:"cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langFileName);
})
// js
// java
// cpp