

//3. find() method
// find method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

const numbers = [1, 2,3,4,5,6,7,9]

//let ans = numbers.find((num) => num === 6);
let ans = numbers.find((num) => num === 3*3) // here we are finding the element in the array that is equal to 3*3 which is 9

console.log(ans); //