const tinderUser1 = new Object()  // => Singleton Object
const tinderUser2 = {}  // => Non-Singleton Object

//  How to merge Objects ?
// 1.Way
const obj1 = {1: "a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5: "e", 6:"f"}
const obj4 = Object.assign(obj1, obj2, obj3) ;  // obj1 = obj1 + obj2 + obj3
console.log(obj1)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj4)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// 2.Way
const obj5 = {1: "a", 2:"b"}
const obj6 = Object.assign({}, obj5, obj2, obj3) 
console.log(obj6) ;  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj5)  // { '1': 'a', '2': 'b' }

// 3.Way ( spread )
const a = {1: "a", 2:"b"}
const b = {3:"c", 4:"d"}
const c = {5: "e", 6:"f"}
const merge = {...a, ...b, ...c}
console.log(merge) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// How data come from database? => in the form of Array
const abc = [{name:"abc", age:1}, {name:"def", age:13}, {name:"ghi", age:14}]
console.log(abc[0].name)  // abc


// some more methodds
const user = {
    email : "abc123@.com" ,
    fullname : {
        username : {
            firstname : "Mantosh" ,
            lastname : "Kumar"
        }
    }
}
console.log(user.fullname.username.firstname)  // Mantosh
console.log(Object.keys(user))  //  [ 'email', 'fullname' ]
console.log(Object.values(user))  // [ 'abc123@.com', { username: { firstname: 'Mantosh', lastname: 'Kumar' } }]
console.log(Object.entries(user))  // [ [ 'email', 'abc123@.com' ], [ 'fullname', { username: [Object] } ] ]

// to check whether a key exist or not
console.log(user.hasOwnProperty("fullname"))  // true