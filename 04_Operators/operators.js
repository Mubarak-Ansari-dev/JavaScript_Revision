// Operators in JavaScript

// So Operators are used to perform operations on variavles and values
// Numbers

//Arithmetic Operators
// +, -, *, /, % (modulus operator), ** (exponentiation operator)
let a = 12;
let b = 5;

console.log(a + b - 10);

//boolean 
// 1 or 1 0
// true -> 1
// false -> 0

// if(1) {
//     console.log("This is true");
// }

//new concept on boolean 1 | 0
let isloggdIn = true;
//console.log(isloggedIn); // Output: true

//console.log(isloggedIn + 15); // Output: 16 (true is treated as 1 in arithmetic operations)

//String
console.log('1' + 1); // Output: '11' (string concatenation)
// concatenation -> joining two strings together
console.log('2' + '2'); // Output: '22' (string concatenation)

console.log('2' * '2'); // Output: 4 (string is converted to number and multiplication is performed)
// String * String -> Number * Number -> Number
// String + String -> String concatenation
// String + Number -> String concatenation (Number is converted to String)
// String * Number -> Number (String is converted to Number)

console.log('a' * 2 ); // Output: NaN -> Not a Number(string 'a' cannot be converted to a valid number)

console.log('a' + 2); // Output: 'a2' (string concatenation, number 2 is converted to string '2')

//Typeof operator
console.log(typeof a); // Output: 'number'

console.log(typeof isloggedIn); // Output: 'boolean'