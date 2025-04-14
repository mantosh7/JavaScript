// +++++++++++++++ Numbers +++++++++++++++++++++

const score = 400
console.log(score)  // 400
console.log(typeof score)  // number

const balance = new Number(100)
console.log(balance)  // [Number: 100]
console.log(typeof balance)  // object

//  Some Methods of Number

console.log(balance.toString())  // 100 , type => string

console.log(balance.toFixed(2))  // 100.00


let num = 123.456
console.log(num.toPrecision(4))  // 123.5
console.log(num.toPrecision(3))  // 123
console.log(num.toPrecision(2))  // 1.2e+2 , How ?  => 123.456 => 120 => 1.2 * 10^2


const hundreds = 1000000
console.log(hundreds.toLocaleString())  // 10,00,000
console.log(hundreds.toLocaleString('en-IN'))  // 10,00,000

let maxValue = Number.MAX_VALUE ;
console.log(maxValue)

let minValue = Number.MIN_VALUE
console.log(minValue)



// +++++++++++++ Maths +++++++++++++++++

console.log(Math) // Object [Math] {}

console.log(Math.abs(-4))  // 4

console.log(Math.round(4.6))  // 5

console.log(Math.ceil(4.1))  // 5

console.log(Math.floor(4.9))  // 4

console.log(Math.min(4,3,8,6))  // 3

console.log(Math.max(4,3,6,8))  // 8

// random
console.log(Math.random())  // any value 0 - 1
console.log(Math.random() * 10) // any value 0 - 9
console.log(Math.floor(Math.random()*10) + 1) // any value 1 - 10

let min = 10
let max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // any value 10 - 20