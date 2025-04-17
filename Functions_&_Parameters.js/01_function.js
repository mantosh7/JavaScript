// Making a function
function sum(num1, num2){   // num1 & num2 are parameters
    return num1 + num2 
}

const add = sum(5, 8)  // calling function (5 & 8 are arguments)
console.log(add)  // 13


// Another function
function loginUserMessage(username)
{
    if(!username)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} has just logged in.`
}
console.log(loginUserMessage("Mantosh"))  // Mantosh has just logged in
console.log(loginUserMessage())  // Please enter a username


// we can also define default value as a parameter oin function
function loginUserMessage2(username = "Alexa")
{
    if(!username)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} has just logged in.`
}
console.log(loginUserMessage2("Mantosh"))  // Mantosh has just logged in
console.log(loginUserMessage2())  // Alexa has just logged in.

// NOTE : If we pass the argument then default parameter value will be override and if we do not pass any argument, then default parameter value will be executed.