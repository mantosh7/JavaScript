//  # forEach()
// => forEach() is an array method in JavaScript that runs a function once for each element in the array.
// => You can think of it like a cleaner way to write a loop when you're dealing with arrays.


//  # Key Features
// => It does not return anything (unlike map()).
// => You can’t use break or continue inside forEach().


// Example 1 :
const colors = ["red", "green", "blue"]
colors.forEach((element, index, array) => {
    console.log(`Color at index ${index} is ${element}`);  // Color at index 0 is red
                                                           // Color at index 1 is green
                                                           // Color at index 2 is blue
})

// Example 2 : Objects inside Array
const students = [
    { name: "Mantosh", marks: 90 },
    { name: "Raj", marks: 85 }
];

students.forEach((student) => {
    console.log(`${student.name} scored ${student.marks}`);  // Mantosh scored 90
                                                             // Raj scored 85
});

// # Difference from map()
const nums = [1, 2, 3]
const nums1 = nums.map((nums) => {
    return nums*2
})  
const nums2 = nums.forEach((num) => {
    return num*2
})  
console.log(nums1)  // [2, 4, 6]
console.log(nums2)  // undefined
// NOTE : (i) map() returns a new array  (ii) forEach() is used for side effects, not for returning data


// can aslo use in this way :
function printMe(element, index, array)
{
    console.log(`${array[index].name} scored ${array[index].marks}`)
}
students.forEach(printMe)  // Mantosh scored 90
                           // Raj scored 85