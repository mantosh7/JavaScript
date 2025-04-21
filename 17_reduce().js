//  # reduce()
// => reduce() is used to reduce an array to a single value — like a sum, product, object, or even a string.
// => syntax : array.reduce(callback(accumulator, currentValue, index, array), initialValue)
// where : accumulator → stores the accumulated result
//         currentValue → current element being processed.
//         initialValue → (optional) value to start with.

// Example 1: Sum of numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => {
    return acc + curr
}, 0)  // initial value is 0
console.log(sum)  // 15

// Example 2: Flatten an array of arrays
const nested = [[1, 2], [3, 4], [5]]
const flat = nested.reduce((acc, curr) => {
    return acc.concat(curr)
}, [])
console.log(flat)  // [ 1, 2, 3, 4, 5 ]

// Example 3 : 
const shoppingCart = [
    {
        itemName : "js course" ,
        price : 2999
    } ,
    {
        itemName : "python course" ,
        price : 5999
    } ,
    {
        itemName : "data science" ,
        price : 12999
    }
]
const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)
console.log(priceToPay)