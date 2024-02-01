// const answer = 50;

// let guess = prompt("Please enter a number")

// let count = 0;

// while (guess != answer.toString() && guess != 'q'){
//     if (guess === 'q'){
//         console.log('pussy');
//         break;
//     }
    
//     guess = parseInt(guess);
    
//     if (guess < answer){
//         guess = prompt("Guess a larger number");
//     }

//     else if (guess > answer){
//         guess = prompt("Guess a smaller number");
//     }



//     else {
//         guess = prompt('Bitch enter a number');
//     }

//     count += 1;
//     guess = guess.toString();

// }

// if (guess === answer.toString()) {
//     console.log(`Congratulations! You guessed it in ${count} attempts.`);
// } else {
//     console.log("Game ended.");
// }


let number = parseInt(prompt('Enter an number'));

while(!number){
    number = parseInt(prompt('Enter an number'));
}

// const ans = Math.floor(Math.random() * number) + 1;
// console.log(ans);



const ans = Math.floor(Math.random() * number) + 1;
console.log(ans); 

guess = parseInt(prompt("Enter an number"));
let attempt = 1;

while (parseInt(guess) !== ans) {
    if (guess === 'q') {
        console.log('Exiting the game.');
        break;
    }

    else if (guess  > number){
        guess = prompt("Enter a smaller number");
    }


    else if (guess  < number){
        guess = prompt("Enter a larger number");
    }

    else{
        guess =  prompt("Dude enter an valid number")
    }

    attempt += 1
}



if (guess!= 'q'){
    console.log(`Congrats bro you won, in ${attempt} attempts`);
}