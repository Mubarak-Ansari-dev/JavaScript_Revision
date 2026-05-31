// Conditional Statement in JavaScript

// Conditional statements are used to perform different actions based on different conditions.
// if statement
    //const age = 25;
    // if( age >= 18){
    //     console.log("Yes, You are eligible to vote.");
    // }
    // else{
    //     console.log("Sorry, not eligibe");
    // }

    // Using ternary operator 
    //const age = 40;

    // condition ? expressionIfTrue : expressionIfFalse
     // age >= 18 ? console.log('yes') : console.log('no');
    // this is applicable for one condition only, if we have multiple conditions then we can use if-else statement or switch statement

    // if-else if statement
    const marks = 85;
    if(marks >= 90){
        console.log("A+");
    }
    else if(marks >= 80){
        console.log('A');
    }
    else if(marks >= 70){
        console.log("B");
    }
    else if(marks >= 60){
        console.log("C");
    }

    // one more example of ternary operator

    const youGot =  85;

    let result = youGot >= 90 ? "Yes" : "No";
    console.log(result);
    // use ternary when u have only one conditiopn to check;

    // *********** Switch Statement ******************//

    // switch statement is used to perform different actions based on different conditions.
    // It is an alternative to if-else statement when we have multiple conditions to check.

    const day = 3;

    switch(day){
        case 1:
            console.log("Hello ji, Monday");
            break;
        case 2:
            console.log("Hello ji, Tuesday");
            break;
        case 3:
            console.log("Hello ji, Wednesday");
            break;  
        default:
            console.log("Invalid day");          
    }

    // day toh 3 hai isliye output wedensday

    // **********Another example of switch statement***************

    let a = 12;
    let option = '*';
    let b = 6;

    // now apply switch statement on option variable

    switch(option){
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break; 
        case '*':
            console.log(a * b);
            break;
        default:
            console.log("Invalid option");           
    }

    // else if, else if, else if, else if, else if, else if, else if, else if, else if, else if, else if, else if, else if, else if, else if, else if, else if, else if, else if, else if........
    // isse achha hai switch statement use karna.