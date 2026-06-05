

// slice() method
/* slice method returns a shallow copy of a portion of an array 
   into a new array object selected from start to end (end not included)
   where start and end represent the index of items in that array. 
 The original array will not be modified.
*/

const numbers = [1,2,3,4,5,6,7,8]
 
let newArr = numbers.slice(3, 6);

console.log(newArr);  //o/p:- [4,5,6]
