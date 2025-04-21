//  # filter()
// => The filter() method creates a new array filled with elements that pass a test provided by a function.
// => The filter() method does not execute the function for empty elements.
// => The filter() method does not change the original array.
// => Syntax : arrayName.filter(function(currentValue, index(optional), arr(optional)), thisValue(optional))

// Example 1 : Filter numbers greater than 10
const numbers = [5, 12, 8, 130, 44];
const result = numbers.filter((num) => {
  return num > 10;
});
console.log(result); // [12, 130, 44]

// Example 2: Filter even numbers
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

// Example 3 : filter with Objects inside Araray
const students = [{name:"Mantosh", age:20}, {name:"Raj", age:20}, {name:"Happy", age:17}]
const adult = students.filter((students) => {
    return students.age >= 18
})
console.log(adult)  // [ { name: 'Mantosh', age: 20 }, { name: 'Raj', age: 20 } ]