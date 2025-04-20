// # Execution Context
// => An Execution Context (EC) is like a container where JavaScript code is evaluated and executed.


// # Types Of Execution Context

// 1. Global Execution Context (GEC)
// => Created by default when your JavaScript code runs.
// => It assigns: (i) this = window (in browsers)   (ii) this = global (in Node.js)
// => It stores global variables and functions.

// 2. Function Execution Context (FEC)
// => Created every time a function is invoked.
// => Each call gets its own new execution context.
// => It contains: (i) Arguments/parameters  (ii) Local variables  (iii) this keyword  (iv) Outer environment reference (scope chain)

// 3. Eval Execution Context (rarely used)
// => Created when eval() is called.
// => Mostly avoided in modern JS due to security and performance issues.


//  # Each Execution Context Has Two Phases
// => (i) Memory Creation Phase (aka Hoisting Phase)  (ii) Code Execution Phase

// (i) Memory Creation Phase (aka Hoisting Phase)
// =>  Variables and function declarations are stored in memory.
// =>  var → initialized as undefined.
// =>  Functions → memory assigned entirely.
// =>  'this' is set (JavaScript has determined what object this will refer to in the current execution context).

// (ii) Code Execution Phase
//  =>  Actual code is run line by line.
//  =>  Values assigned to variables.
//  =>  Functions invoked.

// Example :
let val1 = 10;
let val2 = 5;

function add(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = add(val1, val2);
let result2 = add(10, 20);

//    How above code will be executed by JS ?
// => 1. First Step in JS Execution: Creation of Global Execution Context (GEC)
//       => this keyword is initialized first.
//       => (i) this = window object (in browsers)   (ii) this = global object (or {} in strict mode) (in Nodejs)

// => 2. PHASE 1: Memory Creation Phase (a.k.a. Hoisting Phase)
//       => JavaScript first scans your code and sets up memory (execution context) like this:
//          * val1 → undefined (reserved in memory).
//          * val2 → undefined (reserved in memory).
//          * add → hoisted with full function definition.
//          * result1 → undefined
//       => No code is run in this phase — only setup.

// => 3. PHASE 2: Code Execution Phase
//       => Now JavaScript starts executing line-by-line.
//          (i)  val1 → 10 (value assigned)
//         (ii)  val2 → 5 (value assigned)
//         (iii) function add(num1, num2) { ... } => Already hoisted — nothing new to do here.
//         (iv)  Now the add() function is called, and a new Function Execution Context is created [let result1 = add(val1, val2)].
//               *every time a function is called, JavaScript creates a brand new Execution Context, and that context also has 
//                its own two phases, just like the global one.
//               => 4. Memory Creation Phase (for add function)
//                  => Reserves memory for parameters: (i) num1 → undefined  (ii) num2 → undefined
//                  => Reserves memory for local variables: (i) total → undefined
//               => 5. Code Execution Phase (for add function)
//                  => Assigns num1 = 10, num2 = 5
//                  => Evaluates: total = num1 + num2 = 15
//                  => return total → function returns 15 to the caller (it goes back to the Global Execution Context, 
//                     because that's where the function was called from:  let result1 = add(val1, val2); // Global execution context
//          (v) Again the add() function is called, and a new Function Execution Context is created [let result2 = add(10, 20)].
//              * Again JavaScript creates a brand new Execution Context, and that context also has 
//                its own two phases, just like the global one.



//  # Call Stack = Manages Execution Contexts
// => JavaScript uses the Call Stack to keep track of which context is currently running.
// => Whenever a function is called: New context is pushed onto the stack.
// => When it finishes: It is popped off.

