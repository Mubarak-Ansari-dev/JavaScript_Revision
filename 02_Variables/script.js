console.log("Hey there!");



//Variables - 
// var -> Global Scope

// DataType varName = value; strongly Typed language {like Java, C#, C++}
// JavaScript is a loosely typed language, we can declare a variable without assigning a value to it.
// e.g.var name;
//  We can also change the data type of the variable later on in the code.

// var name = "Ansari"; 
// var age = 25;
// var firstName = "Mubarak";

// //global scope means
// if(true){
//     var lastName = "Victor";
// }
// console.log(lastName);

//let -> Block Scope
// let age = 30;
// if(true){
//     let city = "New York";
//     console.log(city);
// }
// // here city is accessible only within the block scope of the if statement,
// //  it will throw an error if we try to access it outside the block.
//  console.log(city); // ReferenceError: city is not defined

//const -> Block Scope and cannot be reassigned
  const name = "Mubarak";
  console.log(name);
  // now
  const name = "Ansari"; // SyntaxError: Identifier 'name' has already been declared