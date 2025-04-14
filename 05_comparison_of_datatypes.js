console.log("2" > 1) // true 
console.log("02" > 1)  // true



console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
// Reason => The reason is that an equality check == and commparison >,<,>=,<= work differently. Comparison convert null to a number, treating it as 0. That's why (null >= 0) is true and (nulll > 0) and (null == 0) is false


console.log(undefined == 0)  // false
console.log(undefined > 0)  // false 
console.log(undefined >= 0)  // false


// strict check ( === )
console.log("1" === 1) // false