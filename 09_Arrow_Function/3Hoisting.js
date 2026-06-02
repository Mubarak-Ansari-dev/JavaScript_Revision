
//Hoisting in JavaScript ?
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.


sayHey(); // calling a function
function sayHey(){
    console.log("Hello ji");
}
// but in Arrow function we cant do this

 sayHeyV2();
 const sahHeyV2 = () =>{
    console.log("Hello ji");
 }
 // Error:- Can not access 'sayHeyV2' before initialization
 // means we can only use Hoisting in Normal function not in Arrow function