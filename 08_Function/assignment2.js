

//make a functin that accept unlimited number of parameters and return the sum of all those numbers

// function addNumbers() {
//     console.log(arguments); // arguments is an array like object that contains all the arguments passed to the function
// }

// addNumbers(10, 20, 23, 34, 45); // calling the function with unlimited number of parameters

// maintain this

function addNumners(){
    let sum = 0;
    for(let i= 0; i < arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}

let result = addNumbers(11, 22, 33, 44, 9);
  console.log("The sum of all numbers is: " + result);

  // this means javaAcript is a dynamic language and we can pass any number of parameters to a function and it will work fine. 
  // We can also pass different types of parameters to a function and it will work fine. This is one of the advantages of JavaScript over other programming languages.    



//Another way- using spread operator
function sumOfAllNos(...numbers){
    let sum = 0;    
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

let result1 = sumOfAllNos(1, 2, 3, 4, 5);
console.log("The sum of all numbers is: " + result1);

