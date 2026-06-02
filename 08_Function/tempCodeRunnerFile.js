function sumOfAllNos(...numbers){
    let sum = 0;    
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

let result1 = sumOfAllNos(1, 2, 3, 4, 5);
console.log("The sum of all numbers is: " + result1);