// a game on do while loop

let number = 20;

let guess = 0;

do{
    guess = parseInt(prompt("Guess a number"));
    if(guess == number){
        break;
        alert('Congratulations! You guessed the number correctly.');
    }
} while(guess != number);