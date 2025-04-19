//  # IIFE (Immediately Invoked Function Execution)
// => It’s a function that runs as soon as it is defined.

// Regular Function syntax :
// (function() {
//     console.log("IIFE executed!");
// })();

// Arrow Function syntax : 
// (() => {
//     console.log("Arrow IIFE executed!");
// })();


// Example 1 (Regular Function) :
(function chai(name) {     // Named IIFE ( name is 'chai')
    let x = 10;
    console.log("Inside IIFE: ", x);  // Inside IIFE:  10
    console.log("Inside IIFE:", name)  // Inside IIFE: Mantosh
})("Mantosh");

console.log(typeof x);  // undefined (because x is private)

// Example 2 :
( (name) => {       // Un-Named IIFE
    let y = 100
    console.log(y)  // Output : 100
    console.log("Inside IIFE:", name)  // Inside IIFE: Mantosh
}) ("Mantosh") ;
console.log(typeof y)  // undefined

// NOTE : If we are using two or more IIFE, then it is necessary to put semi-colon (;) at the end of every IIFE, otherwise it will show error

//  # Why use IIFE ?
// => Avoid polluting the global scope
// => Create a private scope