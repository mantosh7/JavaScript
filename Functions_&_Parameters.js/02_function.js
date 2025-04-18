//   Rest Operator (...)
// => The rest operator ... collects the rest of the values into a single array or object.

// 1.
function calculateCartPrice(...val)
{
    return val
}
console.log(calculateCartPrice(200, 400, 500, 2000))  // [ 200, 400, 500, 2000 ]

// 2.
function calculateCartPrice2(val1, val2, ...val)
{
    return val
}
console.log(calculateCartPrice2(200, 400, 500, 2000))  //  [ 500, 2000 ]


// Handling Objects with function
function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}.`)
}

const user = {
    userName : "Mantosh",
    price : 20
}
handleObject(user)  // Username is Mantosh and price is 20.


// Handling Array with function
function handleArray(anyArray)
{
    return anyArray[0] 
}
const myArray = [20, 30, 40, 87, 96]
console.log(handleArray(myArray))  // 20