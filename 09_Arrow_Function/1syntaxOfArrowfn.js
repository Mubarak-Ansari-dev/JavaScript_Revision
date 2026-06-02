

//Arrow function in JavaScript

//normal function
  function sayHey(){
    console.log("Hello ji");
  }
  sayHey();

  // Arrow function - Syntax
  // const functionName = (parameters) => {
  //     // code to be executed
  // }

   const sayHeyy =() => {
    console.log("Hello ji from Arrow fn");
   }
   sayHeyy();
 
   // give some parameters to arrow function

   const add2Nos = (a, b) => {
      return a+b;
   }
   console.log(add2Nos(5, 10));

   // Cleaner approch for above code
   // when we have only one line of code in the function body then we can omit the { } and return keyword

   const mult2Nos = (m, n) => m*n;
   console.log(mult2Nos(5, 6));

   // when u use { } then u have to return the value
