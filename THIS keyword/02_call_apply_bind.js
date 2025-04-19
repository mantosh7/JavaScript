// ++++++++++++++++++++ call() +++++++++++++++++++++++++++++

// 1. call() [sharing method]
// => call() is a method that calls a function with a specific this value, and you can also pass arguments one by one.
// => syntax : func.call(thisArg, arg1, arg2, ...)  where, func: the function you want to call,  thisArg: what you want this to refer to inside the function,  (arg1, agr2, ...) are the parameters if we want to

// example1 : [use printName method of student1 in student2 object]
const student1 = {
    name: "Mantosh",
    printName: function () {
        console.log(this.name)
    }
}
const student2 = {
    name: "Raj"
}
student1.printName.call(student2)  // Raj


// Whenever we have to share any particular method, we write it as :
const s1 = {
    name : "Raj" ,
    age : 20
}

const printName = function(city, state){
    console.log(this.name + " from " + city + " in " + state)
}

const s2 = {
    name : "Hari" ,
    age : 20
}

printName.call(s2, "Patna City", "Bihar")  // Hari from Patna City in Bihar
printName.call(s1, "Patna City", "Bihar")  // Raj from Patna City in Bihar



// example 3 :
const person = {
    name: "Mantosh"
};

function greet() {
    console.log(`Hello, ${this.name}`);
}

greet();              // Hello, undefined (or global)
greet.call(person);   // Hello, Mantosh 


//++++++++++++++++++++++  apply() ++++++++++++++++++++++++++++++++

// 2. apply()
// => The apply() method calls a function, but you can explicitly set the value of this, and pass arguments as an array.
// => syntax : func.apply(thisArg, [argsArray]);

// Example :
const a1 = {
    id : 25014 ,
    course : "B.Tech"
} 

const a2 = {
    id : 52103 ,
    course : "MBA"
}

let printInfo = function(firstName, lastName){
    console.log(firstName + " " + lastName + ` has I'd no. ${this.id} and course name ${this.course}`)
}

printInfo.apply(a1, ["Hari", "Singh"])  // Hari Singh has I'd no. 25014 and course name B.Tech
printInfo.apply(a2, ["Raj", "Kumar"])  //  Raj Kumar has I'd no. 52103 and course name MBA


// +++++++++++++++++++++ bind() +++++++++++++++++++++++++++++

// 3. bind()
// => bind() creates a new function with a specific this value and optionally pre-filled arguments.
// => It does NOT call the function immediately — it returns a new function that you can call later.
// => syntax : const newFunc = originalFunc.bind(thisArg, arg1, arg2, ...);

// Example :
const abc = {
  name: "Mantosh",
  greet: function(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  }
};

const greetFunc = abc.greet.bind(abc, "Hello");
greetFunc(); // Output: Hello, my name is Mantosh

