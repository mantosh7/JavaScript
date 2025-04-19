//  "this"
// => this is a special keyword that refers to the object that is executing the current function. But its value changes depending on how the function is called.



// 1. Global Scope
console.log(this)  // {}
// In Browser => this refers to the window object.
// In Nodejs => this refers to {} (empty object)



// 2. Regular Function
function show() {
    let username = "Mantosh" 
    console.log(this.username)  // undefined
    console.log(this);  // here 'global' object
}
show();
//In Browser => non-strict mode -> window object, strict mode -> undefined
// In Nodejs => non-strict mode -> global object, strict mode -> undefined



//  3. Inside an Object Method
const obj = {
    name: "Mantosh",
    show: function () {
        console.log(this.name);  // 'this' refers to obj
    }
};
obj.show();  // "Mantosh"



// 4.
const obj1 = {
    name: "Mantosh",

    outerFunc: function () {
        console.log(this.name);  // ✅ "Mantosh"

        function innerFunc() {
            console.log(this.name);  // 🤔 Why "undefined"?
        }

        innerFunc();  // You did NOT call it like obj.innerFunc(), so JavaScript doesn't know it belongs to obj.
        // So, 'this' inside innerFunc() is just the default, which is:
        // window in browsers (global object),
        // or undefined in strict mode.
    }
};

obj1.outerFunc();  // That means 'this' inside outerFunc refers to obj1.



// 5. 'this' inside an Arrow Function
// => Arrow functions do not have their own 'this'. They inherit 'this' from their surrounding (lexical) scope — the context where the function is defined, not where it’s called.

// In global scope (e.g., browser window):
//Example 1:
const obj2 = {
    name: "Mantosh",

    normalFunc: function () {
        console.log(this.name);  // "Mantosh" because `this` is the `obj2`
    },

    arrowFunc: () => {
        console.log(this.name);  // undefined because `this` is from the global scope
    }
};

// Calling normalFunc:
obj2.normalFunc();  // `this` inside normalFunc refers to `obj2`

// Calling arrowFunc:
obj2.arrowFunc();  // `this` inside arrowFunc refers to the global object, so `this.name` is undefined

// Example 2:
const s1 = {
    name: "Mantosh",
    x: function (){
        const y =  () => {
            console.log(this)
        }
        y()
    }
}

s1.x() // { name: 'Mantosh', x: [Function: x] }

// Example 3 :
const chai = () =>{
    console.log(this)  // {}
}
chai()



// NOTE : 'this' is a special keyword that refers to the object that is executing the current function. But its value changes depending on how the function is called.

//1. In 'non-strict' mode
function fun(){
    console.log(this)
}
fun()  // global object in nodejs & window in browser
global.fun = fun  // add a new property called fun to the global object, and assign it the fun function
global.fun()  // global object in nodejs & window in browser

// 2. in 'strict' mode
'use strict'
function fun(){
    console.log(this)
}
fun()  // undefined
global.fun = fun  // add a new property called fun to the global object, and assign it the fun function.”
global.fun()  // global object in nodejs & window in browser