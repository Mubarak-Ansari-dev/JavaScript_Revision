// make a function that multiplies 2 numbers and return the result

function multTwoNo(num1, num2){
    console.log(num1 * num2);
}
// calling the function with paramenters

multTwoNo(5, 6); // 30

// Assignment: make a function that takes 3 parameters and returns the average of those 3 numbers

function avgOf3Nos(num1, num2, num3){
    console.log((num1+num2+num3)/3);
}
avgOf3Nos(4, 5, 6); // 5

//************** We have BAsic ideas of functions*****************/
//*******Now best practices********/

  function mult2Nos(num1, num2){
    return num1 * num2;
  }
  // store the result of function in a variable
  let result = mult2Nos(5, 6);
  // now print the result
  console.log("Hey the result is: " + result);

  // Next 
    function add(num1, num2){
        let a = num1 + num2;
        return a;
    }
    let sum = add(5, 6); // store the result of function in a variable(kisi bhi variable me store kar sakte hai) and then print it
    console.log("the sum is: " + sum);