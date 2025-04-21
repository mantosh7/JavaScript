// # when ?
// => When you're dealing with iterables: arrays, strings, sets, maps

// Example 1: Looping through an array
const arr = [1, 2, 3]
for(const num of arr)
{
    console.log(num)  // 1 2 3
}

//  Example 2: Looping through a string
const name = "Mantosh"
for(let char of name)
{
    console.log(char)  // M a n t o s h
}

//  Example 3: Looping through a Set
const numbers = new Set([1,2,3,4,5])
for(const n of numbers)
{
    console.log(n)  // 1 2 3 4 5
}

// Example 4 : Looping through a Map
const myMap = new Map([["name", "Mantosh"], [true, "yes"]])
for(const [key, value] of myMap)
{
    console.log(`${key} : ${value}`)  // name : Mantosh
                                      // true : yes
}


// NOTE : Cannot use for...of with plain objects
// const obj = {a: 1, b: 2, c: 3}
// for(const item of obj)
// {
//     console.log(item)  // TypeError: obj is not iterable
// }