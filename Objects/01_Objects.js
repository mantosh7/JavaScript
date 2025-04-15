// How to declare objects

// 1. Object Literals
const JsUser = {
    name : "Mantosh",
    "full name" : "Mantosh Kumar",
    age : 20,
    email : "mantosh@.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday", "Saturday"] ,
}
// NOTE : JS consider all the keys as string

// Accessing values of objects
// Method 1
console.log(JsUser.age)  // 20
console.log(JsUser["age"])  // 20
console.log(JsUser["full name"])  // Mantosh Kumar

JsUser.age = 19 ;  // changing value of a key
console.log(JsUser.age)  // 19

// Using Symbol as Key in Object
const mySum = Symbol("mysjsjdbjKey") ;  // // Declaring the symbol first
const user1 = {
    [mySum] : "mySymbol"  // Using the symbol as the key

}
console.log(user1[mySum])  // mySymbol


// How to freeze any obejct ?
const Obj = {
    id : 12345 ,
    course : "B.Tech"
}
Object.freeze(Obj)  // nobody can change the value of any key now
Obj.id = 20145 
console.log(Obj.id)  // 12345

// NOTE : To change, we have to make clone of the obejct and then change it
const newObj = { ...Obj };
newObj.id = 25451;
console.log(newObj); // { id: 25451, course: 'B.Tech' }


// How to add new key-value pair in object ?
const user2 = {
    name : "Hello World"
}
user2.place = "Patna"
user2.greeting = function(){
    console.log(this.name) ;  // can also use => user2.name
}
console.log(user2.place) // Patna
console.log(user2.greeting)  // [Function (anonymous)] => function reference ( does not execute )
user2.greeting()  // Hello World
