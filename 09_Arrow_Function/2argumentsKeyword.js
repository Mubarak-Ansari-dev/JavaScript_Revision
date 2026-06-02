// 'arguments' keyword

 function addNumbers(){
    console.log(arguments);
 }
 addNumbers(2, 5, 6, 12, 55);

 // Argumnts keyword is not available in arrow function
 // to access arguments keyword in arrow function we have to use rest operator or spread operator

 const addNumbersV2 = (...numns) =>{
    console.log(nums);
 }
 addNumbersV2(11, 22, 23, 44, 55, 57);