// Array

// const numbers = [1, 2, 3, 4, 5, 6]
// let newArr = [];

// numbers.forEach((num) => newArr.push(num*2));

// console.log(newArr);

// map array ke upar loop karta hain aur ek new array create karta hai
// forEach method only for printing array 

const numbers = [1, 2, 3, 4, 5, 6, 7]

function double(n){
    return n*2;
}
let newArr = numbers.map(double);
console.log(newArr);

///////////////////////OR////////////////////

const numbers = [1, 3, 5, 7, 9]
let newArr = []

numbers.map()

// map method will call double function for each element of array and store the returned value in a new array and return that new array
// 1. map method will call double function for each element of array
// 2. double function will return the value
// 3. map method will store the returned value in a new array and return that new array