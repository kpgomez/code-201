'use strict'


let visitorName = prompt("Please enter your name.");
console.log(visitorName);

let message = alert("Welcome " + visitorName + "!");
console.log(message); //shows as "undefined" in console
//let newMessage = document.write("Let's play a game!");
//console.log(newMessage); //shows as "undefined" in console

// question 1
let start = confirm("Let's see how much you know about me. Are you ready to be quizzed?");
console.log(start); // cancel === no, ok === yes

if(start === true){
    let begin = alert("OK, great to hear " + visitorName + ".");
    console.log(begin);
} else {
    let boo = alert("😢😪😭");
}

// question 1

let answer1 = prompt("Am I over 35 years of age?");
console.log(answer1);

// question 2

let answer2 = prompt("Do I drink lots of water during class?");
console.log(answer2);

// question 3

let answer3 = prompt("Is the border of Mexico 5 minutes away from me?");
console.log(answer3);


// question 4

let answer4 = prompt("Am I crazy?");
console.log(answer4);

// question 5

let answer5 = prompt("Do I wear glasses?");
console.log(answer5);
