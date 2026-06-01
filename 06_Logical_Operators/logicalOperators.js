// Logical Operators

// AND (&&) operator
// All conditions must be true 

/*
const age = 25;
const gender = 'male';

if(age >=18 && gender == 'male') {
    console.log("You can enter the club");
}
*/

// OR (||) operator
// At least one condition must be true

const age = 22;
const isStudent = true;

if(age >= 28 || isStudent == true){
    console.log("You can enter the Library");
}

// NOT (!) operator
// It negates the condition

// const isRaining = false;
// if(!isRaining){
//     console.log("You can Go to the park");
// }

// example 2

const num = 6;

if(!(num % 2 === 0)){
    console.log("The number is odd");
}