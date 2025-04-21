//  # map()
// => The map() method is used to transform each element in an array and return a new array of the same length with the modified values.
// => "I want to do something to each item in the array and get a new array back."
// => map() does not execute the function for empty elements.
// => map() does not change the original array.
// Syntax : array.map(function(currentValue, index, arr), thisValue)

// Example 1 : Basic Usage
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
    return num * 2;
});
console.log(doubled);  // [2, 4, 6, 8, 10]

// Example 2: Using arrow function
const number = [1, 2, 3];
const squared = number.map(num => num * num);
console.log(squared); // [1, 4, 9]

// Example 3: Working with objects
const students = [
    { name: "Mantosh", score: 80 },
    { name: "Raj", score: 90 }
];
const names1 = students.map(student => student.name);
console.log(names1); // ["Mantosh", "Raj"]


//  # Chaining Method
// Example 1 :
const names = ["rahul", "amit", "binod", "raj", "deepak"]
const result = names    
               .map((name) => name.toUpperCase())  // ['RAHUL', 'AMIT', 'BINOD', 'RAJ', 'DEEPAK']
               .filter((name) => name.startsWith('R'))  // ['RAHUL', 'RAJ']
               .sort()
console.log(result)  // [ 'RAHUL', 'RAJ' ]

// Example 2 :
const num = [1, 2, 3, 4, 5]
const res = num
            .map(number => number * 2)  // [2, 4, 6, 8, 10]
            .filter(number => number > 5) // [6, 8, 10]
            .reduce((acc, curr) => acc + curr) // 24
console.log(res) // 24