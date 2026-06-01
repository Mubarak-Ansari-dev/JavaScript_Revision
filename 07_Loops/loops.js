// Loops in JavaScript

// Loops are used to repeat a block of code until a specified condition is met.

// For Loop
// for(initialization; condition; increment/decrement){
//     // code to be executed
// }

for(let i = 0; i <= 10; i++){
    console.log("Hey just improving my coding skills" + i + "times");
}

for(let j = 0; j<= 10; j= j+2){
    console.log("Hey hey go and read a book" + j);
}

// when we exactly know the number of iterations, otherwise we can use while loop

// While Loop
// while(condition){
//     // code to be executed
// }

// when you know what to achieve but dont know how many times you need to repeat the block of code

let ip = 0;
let house = 100;

while(ip != house){   // you only give the condition to get to the destination, you dont know how many steps it will take to reach the destination
    ip = ip + 1;
    console.log('Step Taken: ' + ip);
}

// Do-While Loop
// do{
//     // code to be executed
// } while(condition);

// do-while loop is similar to while loop but it will execute the block of code at least once even if the condition is false

let count = 50;
let home = 50;

// do while
do{
    count = count + 1;
    console.log("Step Taken: " + count);
} while(count < home);

// already ghar pe tha phir bhi step liya, count = 51, home = 50, condition is false but it executed the block of code at least once
// lets know why it is useful

// Next folder -> Guess the Input Game using do-while loop, where we want to execute the block of code at least once to get the user input and then check the condition.