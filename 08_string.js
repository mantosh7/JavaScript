let name = "Mantosh"
let age = 20

console.log(`My name is ${name} and my age is ${age}`)

console.log(typeof name)  // string


// another way to declare string
let myname = new String("Mantosh Kumar")
console.log(typeof myname)  // object


// some methods of string
console.log(myname.length)  // 13

console.log(myname.toUpperCase())  // MANTOSH KUMAR

console.log(myname.toLowerCase())  // mantosh kumar

console.log(myname.charAt(2))  // n

console.log(myname.indexOf('n'))  // 2

let newString = myname.substring(0,3)  // Ma
console.log(newString)
// NOTE : Doesn't support negative numbers — treats them as 0.

let str = myname.slice(-10,12)  // tosh Kuma
console.log(str)

let url = "https://mantosh.com/mantosh%20kumar"
console.log(url.replace('%20','-'))    // https://mantosh.com/mantosh-kumar
console.log(url.replaceAll('a','k'))   // https://mkntosh.com/mkntosh%20kumkr
console.log(url.includes('mantosh'))   //  true

let str1 = "mantosh "
let str2 = "kumar"
console.log(str1.concat(str2))  // mantosh kumar

let naam = "  Mantosh    "
console.log(naam)  //      Mantosh
console.log(naam.trim())  // Mantosh


let naam2 = "Mantosh-Kumar-Roy"
console.log(naam2.split('-'))   //  [ 'Mantosh', 'Kumar', 'Roy' ]


let objString = new String("Hello World")
console.log(typeof objString)  // object
let newName = objString.valueOf()
console.log(typeof newName)  // string
console.log(newName)  // Hello World



let text = "The rain in Spain stays mainly in the plain";
let position = text.search("Spain");
console.log(position);  // 12  (if spain not present, then -1)

