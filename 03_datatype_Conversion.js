// converted into number
let score1 = 33 
console.log(typeof(score1))  // number


let score2 = "33" // score is a string
let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber2))  // converted into number


let score3 = "33abc"
let valueInNumber3 = Number(score3) 
console.log(typeof(valueInNumber3)) // number
console.log(valueInNumber3)  // NaN (Not a Number)


let score4 = null 
let valueInNumber4 = Number(score4) // number 
console.log(valueInNumber4) // 0


let score5 = undefined 
let valueInNumber5 = Number(score5) // number 
console.log(valueInNumber5) // NaN


let score6 = true
let valueInNumber6 = Number(score6) // number 
console.log(valueInNumber6) // 1


// "33" => 33
// "33abc" => NaN
// true => 1, false => 0


// converted in Boolean
let isLoggedIn = 1 
let valueInBoolean = Boolean(isLoggedIn)  // boolean
console.log(valueInBoolean) // true


let isLoggedIn0 = ""
let valueInBoolean0 = Boolean(isLoggedIn0)  // boolean
console.log(valueInBoolean0) // false


let isLoggedIn1 = "Mantosh"
let valueInBoolean1 = Boolean(isLoggedIn1)  // boolean
console.log(valueInBoolean1) // true


let isLoggedIn2 
let valueInBoolean2 = Boolean(isLoggedIn2)  // boolean
console.log(valueInBoolean2) // false


// 1 => true , 0 => false
// "" => false , "Mantosh" => true
// undeclared_variable => false


// converted into string
let num = 33
let valueInString = String(num) // 33
console.log(typeof(valueInString)) // string

