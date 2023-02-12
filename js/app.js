'use strict';


let visitorName = prompt('Please enter your name.');
console.log(visitorName);

let message = alert('Welcome ' + visitorName + "!");
//let message = alert('Welcome ${visitorName}!'); template literal did not work for me
console.log(message); //shows as "undefined" in console
let newMessage = document.write("Let's play a game!");
console.log(newMessage); //shows as "undefined" in console


let start = confirm('Are you ready for a short quiz?');
console.log(start); // cancel === no, ok === yes

if(start === true){
    let begin = alert('OK, great to hear ' + visitorName + '.');
    console.log(begin);
} else {
    let boo = alert('😢😪😭');
};


let school = prompt("Did I graduate high school in the early 2000s? \nPlease answer 'yes' or 'no'.").toLowerCase();
console.log(school);

if(school === 'yes' || school === 'y'){
    alert('Do I really look that old? You are right though as 2023 is the year of my 20 year high school reunion.');
} else if(school === 'no' || school === 'n'){
    alert('You are sweet, but I am quite old.');
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

let job = prompt('Was my first job in an office?').toLowerCase();
console.log(job);


if(job === 'yes' || job === 'y'){
    alert('I wish! \nMy first job was in a chicken joint when I was 15. \nI was the cashier/dishwasher/cook/floor mopper/window washer for 5.15 per hour. It was the longest 3 weeks of my life!');
} else if(job === 'no' || job === 'n'){
    alert('How did you know? My first job was selling chicken fingers.');
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

let dress = prompt('Do I prefer comfort over style?').toLowerCase();
console.log(dress);

if(dress === 'yes' || dress === 'y'){
    alert('Woohoo to hoodies and sweats all day every day of the week!');
} else if(dress === 'no' || dress === 'n') {
    alert('My personal style can be very hobo-ish if you know what I mean.');
} else{
    alert("Please remember to answer as 'yes' or 'no'.")
};

let thrift = prompt('Can I spend all day thrifting?').toLowerCase();
console.log(thrift);

if(thrift === 'yes' || thrift === 'y'){
    alert('I love to BARGAIN shop!! My favorite finds include a real jade bangle, a 1980s vintage designer gown, and a 2005 edition of the World of Warcraft board game.');
} else if(thrift === 'no' || thrift === 'n') {
    alert('Thrift stores are amazing, and it is a great way to reduce your carbon footprint.');
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

let son = prompt('Did I name my son after a video game?').toLowerCase();
console.log(son);

if(son === 'yes' || son === 'y'){
    alert('I totally did! His middle name was inspired by a character from Street Fighter.');
} else if(son === 'no' || son === 'n'){
    alert('Oh man, I sure hope he does not resent me for naming him after a made-up character when he gets older.');
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};


let miles = 147;
let guess = prompt('Guess how many miles I am from the nearest asian market I frequent every month.');

for(let i = 0; i < 4; i++){
    if(guess < miles){
        let guess = prompt('Go higher');
    } else if(guess > miles){
        let guess = prompt('Go lower.');
    } else{
        alert('That is a really good guess');
        break;
    }
};

// let miles = 147;
// let guess = prompt('Guess how many miles I am from the nearest asian market');

// for(let i = 0; i < 4; i++){
//     if(guess === miles){
//         alert('great guess!');
//         break;
//     } else if(guess > miles){
//         let guess = prompt('guess is too high');
//         continue;
//     } else if(guess < miles){
//         prompt('guess is too low');
//         continue;
//     }
// }
                
// for(let i=0; i < 4; i++){
// if(guess === minutes){
//     console.log(i);
// } else if(guess > minutes){
//     let guess = prompt('Go lower.');
//     console.log(i);
//     console.log(guess);
// } else if(guess < minutes){
//     let guess = prompt('Go higher.');
//     console.log(i);
//     console.log(guess);
//     }
// }
                                
let faveSubjects = ['math','science','economics','art'];
let response = prompt('Guess my favorite subject in school').toLowerCase();
                                
for(let i = 0; i < 6; i++){
if(response === faveSubjects[i]){
    alert('WOW, that\'s a really great guess');
    console.log(i);
    break;
} else {
    let response = prompt('Try again.');
    console.log(i);
    if(response === faveSubjects[i]){
        alert('Finally!');
        console.log(i);
        break;
    }
}
};

//ask question
// while response != && attempts < 4
//do this
//else 

let finalMessage = alert('Thank you ' + visitorName + ' for visiting my site. I hope you learned some fun things about me.');