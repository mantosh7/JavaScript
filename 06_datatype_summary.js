// Primitive (pass by value)

// 7 types => number, string, boolean, null, undefined, symbol, bigint

const score = 100  // number
const scoreValue = 100.3  // number

const isLoggedIn = false  // boolean

const outsideTemp = null  // object (type of null is => object)

let userEmail  // undefined
let userEmailId = undefined  // undefined

const id = Symbol('123')  // symbol
const anotherId = Symbol('123')  // symbol
console.log(id === anotherId)  // false 

const bigNumber = 515545555415515151515152248848484844554524n
console.log(typeof bigNumber)  // bigint
const big = BigInt(123) 
console.log(typeof big)


// Non-Primitive (Reference)

// Array, Objects, Functions


// Array
const arr = [12, 52, 78, 520]  
console.log(typeof arr)  // object


// Object
const myObj = {
    name : "Mantosh",
    age : 20
}
console.log(myObj)
console.log(typeof myObj)

// Function
const myFunc = function(){
    console.log("Hello")
}
myFunc()  // Hello
console.log(typeof myFunc)  // function