// .filter() method
// filter method creates a new array with all elements that pass the test implemented by the provided function.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

let newArr = numbers.filter((num) => num %2 == 0);
console.log(newArr);
// output: [2, 4, 6, 8]