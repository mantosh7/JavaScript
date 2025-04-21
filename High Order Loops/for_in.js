// # for..in
// => Used to iterate over the enumerable property keys of an object.

// Example 1 : for..in with Object
const student = {
    name : "Mantosh" ,
    age : 20 ,
    course : "B.Tech"
}
for(const keyName in student)
{
    console.log(`${keyName} :- ${student[keyName]}`)
}

// Example 2 : for...in with Array
const arr = [10, 20, 30]
for(let idx in arr)
{
    console.log(`${arr[idx]} at ${idx} index`)
}


// NOTE : Don't use for...in on arrays when order matters — it’s meant for objects.

// # why ?
const array = ["a", "b", "c"]
arr.custom = "namaste"  //  custom property is added
for(let i in arr)
{
    console.log(i, arr[i])  // 0 10
                            // 1 20
                            // 2 30
                            // custom namaste
}
// NOTE : This happens because for...in also includes non-indexed properties like custom.

//  Q.  Can we use for...in loop on Map ?
// Ans. No, because a Map in JavaScript is not enumerable in the way objects are, so:

const myMap = new Map();
myMap.set("name", "Mantosh");
myMap.set("age", 20);

for (let key in myMap) {
  console.log(key);  //  Doesn't work (No Output)
}
