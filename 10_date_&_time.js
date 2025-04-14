// ++++++++++++ Date ++++++++++++++
let date = new Date()
console.log(typeof date)  // object

console.log(date)   // 2025-04-13T19:43:14.452Z

console.log(date.toString())  // Mon Apr 14 2025 01:13:51 GMT+0530 (India Standard Time)

console.log(date.toDateString())  // Mon Apr 14 2025

console.log(date.toLocaleString())  //  14/4/2025, 1:14:53 am

console.log(date.toLocaleDateString())  //  14/4/2025

console.log(date.toLocaleTimeString())  // 1:16:39 am

console.log(date.getFullYear())  //  2025

console.log(date.getDay())  // 1 => day of the week (Monday = 1)

console.log(date.getDate())  // 14

console.log(date.getTime())  // 1744573743617 (time in ms)

// some ways to declare our own date and time
let myCreatedDate = new Date(2025,3,14)
console.log(myCreatedDate.toDateString())  // Mon Apr 14 2025

let newCreatedDate = new Date(2025,3,14,1,24)
console.log(newCreatedDate.toLocaleString())  // 14/4/2025, 1:24:00 am

let newCreatedDate1 = new Date("2025-04-14")
console.log(newCreatedDate1.toLocaleDateString())  //  14/4/2025



// timestamp => In JavaScript, a timestamp usually refers to the number of milliseconds since January 1, 1970 (UTC) — also known as the Unix Epoch.

let myTimeStamp = Date.now()  // in ms (timestamp for right now)
console.log(myTimeStamp)
console.log(Math.floor( myTimeStamp / 1000 ))  //  converted into second

console.log(newCreatedDate1.getTime())  // in ms (timestamp for April 14, 2025)


let newDate = new Date()
console.log(newDate.toLocaleString('default',{
    weekday : "long",
}))  //  Monday

