//  stack (Primitive data-types),  Heap(Non-Primitive data-types )


let name = "mantosh Kumar"
let anotherName = name ;  // only value is passed ( a copy is passed )
anotherName = "hello world"
console.log(name)
console.log(anotherName)

const myObj = {        // myObj variable is stored in stack memory while object is stored in heap memory, and myObj variable points to the object in the heap memory
    name : "Mantosh Kumar",
    age : 20
}

const anotherObj = myObj  // reference is passed
anotherObj.name = "Hello World"  
console.log(myObj)
console.log(anotherObj)