const accountId = 155423   
let accountEmail = "mahiraval000@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState   // undeclared variables => undefined 

// accountId = 2 ;   //  not allowed
accountEmail = "abc.com" 
accountPassword = "212121"
accountCity = "Noida"

/*
Prefer not to use var 
because of issue in block scope and function scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState]);  // console.table([]) prints many variables in a table format
