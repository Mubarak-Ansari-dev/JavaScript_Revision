

// splice() method in JavaScript
/*
 original array se first aur last index ke beech ke elements ko remove karta hai
  aur use remove kiye gaye elements ko ek new array me store karta hai aur return karta hai
    # splice method modifies the original array and returns an array containing the removed elements.
 */

    const numbers = [1,2,3,4,5,6,7,8]

    let newArr = numbers.splice(2, 3);
    console.log(newArr);

    console.log(numbers);

    // o/p :- [3, 4, 5, 6]