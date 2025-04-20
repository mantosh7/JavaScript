//  # falsy values
// => false, 0, "", null, BigInt 0n, undefined, NaN

//  # truthy values
// => except all the falsy values, all the values are truthy value.
// some of tthe confusing truthy values are : "false", "0", " ", [], {}, function(){}

// Example 1 :
const arr = [] 
if(arr) console.log("Array is empty")  // it will execute ([] is truthy value)
else console.log("Hello")

// Example 2 :
const str = ""
if(str) console.log("string")
else console.log("Bye")  // it will execute ("" is falsy value)

// Example 3 :
const str1 = " "
if(str1) console.log("string")  // it will execute (" " is truthy value)
else console.log("Bye") 

// How to check empty Array ?
const brr = []
if(brr.length === 0) console.log("Arrray is empty")  // it will print
else console.log("Array is not empty")

// How to check empty object ?
const obj = {}
if(Object.keys(obj).length === 0) console.log("Object is empty")  // it will print
else console.log("Object is not empty")

//  some concepts to remember
console.log(false == 0)  // true
console.log(false == "") // true
console.log(0 == "")  // true
console.log(null == undefined)  // true
console.log(0 == null)  //  false
console.log( false == null) // false
console.log(false == undefined)  // false


//  # Nullish Coalescing Operator (??) 
// => The nullish coalescing operator (??) returns the right-hand value if the left-hand value is null or undefined.
// Syntax :
//   * let result = a ?? b;
// => It means : if a is 'null' or 'undefined', then assign b to result. Otherwise assign a to result.

// Example 1 :
let a = null
let b = 10
let result = a ?? b
console.log(result)  // 10

// Example 2 :
let num1 = 100
let num2 = 20
let num = num1 ?? num2 
console.log(num)  // 100

// NOTE : || treats falsy values like 0, '', false as false too!
let score = 0
let abc = score || 100
console.log(abc)  // 100