// Function ->
//  A block of code that designed to perform a particular task. It is executed when "something" invokes it (calls it).

// Syntax

// function nameOfFunction(parameters){
//     // code to be executed
// }
// calling a function

function sayHey(){
    console.log("Hey there!");
}
sayHey(); // calling the function

// ****************Function with parameters***********

function add(num1, num2){
    console.log(num1 + num2);
}
add(4, 10); // calling the function with parameters
add(7, 6); // calling the function with different parameters 

// function definition pe jo variable dete hai use arguments kahte hai
// function call pe jo value dete hai use parameters kahte hai