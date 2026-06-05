
const students = ["Aa", "Bb", "Cc"]

students.forEach((val) => console.log(val)); // forEach is a high order function that takes a callback function as an argument and executes it for each element in the array


/////

const numbers = [1,2,3,4,5,6]
//here this is a callback function that we are passing to forEach method
function double(n){
    return n*2;
}
let newArr = numbers.forEach(double);
console.log(newArr);

// here forEach kuchh return nhi karega 
// bas hum array ke upar loop karenge aur double function ko call karenge har element ke liye but forEach kuchh return nhi karega

// forEach method only for printing array elements

// but in case of map in above code
// 1. map method will call double function for each element of array
// 2. double function will return the value
// 3. map method will store the returned value in a new array and return that new array