//*********** Array ***********
// => collection of items.
// => Array is resizable in js.
// => Array can contain a mix of different datatypes.
// => type of Array => object


// Array Declaration
const myArr = [1,2,3,4,5]
const arr = ["abc","def","ghi"]
const arr1 = new Array(1,2,3)
console.table([myArr,arr,arr1])

console.log(typeof myArr)  // object

// Accessing elements of Array
console.log(myArr[1]) // 2

// NOTE : JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// Shallow Copy => A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.


// Deep Copy => A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.


// Some methods of Array
const array = [10,20,30,40,50]

array.push(100)  // add 100 to the last of array
console.log(array)  // [10, 20, 30, 40, 50, 100]

array.pop()  // remove the last element of the array
console.log(array)  // [10, 20, 30, 40, 50]

array.unshift(90)  // add 90 to the starting of the array
console.log(array)  // [90, 10, 20, 30, 40, 50]

array.shift()  // remove the first element of the array
console.log(array)  // [10, 20, 30, 40, 50]

console.log(array.toString()) // return array into string dataType

const array2 = [60, 70, 80, 90]
const myAnotherArray = [100, 110, 120]
const myAnotherArray2 = [130, 140]
console.log(array.concat(array2, myAnotherArray, myAnotherArray2))  //  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140]

console.log(array.slice(2,5))  // [30, 40, 50] return a portion of array. Do not change the original array. 5 is not included.


// splice
// => The splice() method adds/removes/replace array elements.
// => The splice() method overwrites the original array.
// syntax (replace) : array.splice(startIdx, deleteCount, newValue)
// syntax (remove) : array.splice(startIdx, LastIdx)

const array3 = [70,85,80,85,90]

// replacing elements
array3.splice(2,2,101,102) // from 2nd idx, remove 2 elements and add 101 & 102
console.log(array3)  // [70, 85, 101, 102, 90] (current array3)

// adding elements
array3.splice(2,0,501)  // from 2nd idx, remove 0 element and add 501
console.log(array3)  // [70, 85, 501, 101, 102, 90] (current array3)

// removing element
array3.splice(2,1)  // from 2nd idx, remove only 1 element
console.log(array3)  //  [70, 85, 101, 102, 90] (current array3)

// NOTE : array.splice( idx ) => it return array.splice(idx, LastIdx)
console.log(array3.splice(2))  // [ 101, 102, 90 ]
console.log(array3)  // [ 70, 85 ]


//   reverse()
// => The reverse() method reverses the elements of an array in place
// => it modifies the original array and also returns the reversed array.

const array5 = [1,2,6,7,20]
const brr = array5.reverse()
console.log(array5)  // [20, 7, 6, 2, 1]
console.log(brr)  // [20, 7, 6, 2, 1]


//   join()
// => t joins all elements of an array into a single string.
// => You can specify a separator (like a space, comma, dash, etc).
// => If no separator is given, it defaults to a comma ,

const brr1 = [85,60,90,"Mantosh"]
const brr2 = brr1.join()
console.log(brr1)  // [ 85, 60, 90, 'Mantosh' ]
console.log(brr2)  // 85,60,90,Mantosh
console.log(typeof brr2)  // string
const brr3 = brr1.join('@')
console.log(brr3)  // 85@60@90@Mantosh


//   Spread Operator (...)
// => The spread operator ... "spreads out" the elements of an iterable (like an array or object).

//  Spread in Arrays
const a = [1, 2, 3]
const b = [4, 5]
const c = [6, 7, 8]
const combined = [...a, ...b, ...c]
console.log(combined)  // [1, 2, 3, 4, 5, 6, 7, 8]

// Clone an array
const d = [1, 2, 3]
const copy = [...a]
console.log(copy)  // [1, 2, 3]
console.log(d === copy)  // false (different refrences)


//   flat(depth)
// => It flattens nested arrays into a single array.
// => By default, it goes 1 level deep, but you can specify how deep to flatten.

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4 , 5]]]
const anotherArr2 = anotherArr.flat(Infinity)
console.log(anotherArr2)  // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


//  some methods to convert into Array
console.log(Array.isArray("Mantosh"))  // false

// Array.from()

// 1. from string to array
const name = "Mantosh"
const Arr = Array.from(name)   
console.log(Arr)  // ['M','a','n','t','o','s','h']

// 2. from variables to array => Array.of(variable1, variable2)
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))  // [ 100, 200, 300 ]


// 3. from object to array
const myArray = Array.from({name:"Mantosh"})
console.log(myArray)  // [] (empty array)


// some more functions of Array.from()
let num = [1, 2, 3, "abc"]
const fromArray = Array.from(num, (x) => x + x)
console.log(fromArray)  // [2, 4, 6, 'abcabc']

const fromArray2 = Array.from(num, (x) => x ** 2)
console.log(fromArray2)  // [ 1, 4, 9, NaN ]