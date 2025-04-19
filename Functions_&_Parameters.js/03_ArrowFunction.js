//  # Arrow Function
// => An arrow function is a shorthand way to write functions in JavaScript introduced in ES6.
// syntax : const func = (param1, param2) => {
//            function body
//            return param1 + param2;
//          };

// Example 1 :
const sum1 = (num1, num2) => {
    return num1 + num2
}
console.log(sum1(10, 20))  // 30

// Example 2 :
const sum2 = (num1, num2) => num1 + num2
console.log(sum2(10, 20))  // 30

// Example 3 :
const sum3 = (num1, num2) => (num1 + num2)
console.log(sum2(10, 20))  // 30


// How to return an Object in Arrow Function ?
const returnObj = (naam) => ({name : naam})
console.log(returnObj("Mantosh Kumar"))  // { name: 'Mantosh Kumar' }