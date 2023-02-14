'use strict';


let visitorName = prompt('Please enter your name.');
let message = alert(`Welcome ${visitorName}!`);
let start = confirm('Ready?');

if(start === true){
    alert('OK, great!');

} else {
    alert('😢😪😭');
};

let score = 0;

//Question #1
let school = prompt("Did I graduate HS 20 years ago? \nPlease answer 'yes' or 'no'.").toLowerCase();
console.log(school);

if(school === 'yes' || school === 'y'){
    alert('Do I really look that old? You are right though as 2023 is the year of my 20 year high school reunion.');
    score+=1;
} else if(school === 'no' || school === 'n'){
    alert('You are too kind, but I am quite old and fragile.');
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

//Question #2 
let job = prompt('First job was in an office?').toLowerCase();
console.log(job);

if(job === 'yes' || job === 'y'){
    alert('I wish! My first job was in a chicken place. It was the longest 3 weeks of my life!');
} else if(job === 'no' || job === 'n'){
    alert('How did you know? My first job was as a cashier selling chicken fingers.');
    score+=1;
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

//Question #3
let style = prompt('Do I like to dress up?').toLowerCase();
console.log(style);

if(style === 'yes' || style === 'y'){
    alert('I like to dress hobo-ish if that counts.');
} else if(style === 'no' || style === 'n') {
    alert('Woohoo to hoodies and sweats all day every day of the week!');
    score+=1;
} else{
    alert("Please remember to answer as 'yes' or 'no'.")
};

//Question #4
let thrift = prompt('Thrifting is one of my fave activities?').toLowerCase();
console.log(thrift);

if(thrift === 'yes' || thrift === 'y'){
    alert('I love thrifting!! My favorite finds include a real jade bangle, a 1980s vintage designer gown, and a 2005 edition of the World of Warcraft board game.');
    score+=1;
} else if(thrift === 'no' || thrift === 'n') {
    alert('You don\'t know me very well. Thrift stores are amazing, and it is a great way to reduce your carbon footprint.');
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

//Question #5
let son = prompt('Did I name my son after a video game?').toLowerCase();
console.log(son);

if(son === 'yes' || son === 'y'){
    alert('I totally did! His middle name was inspired by a character from Street Fighter.');
    score+=1;
} else if(son === 'no' || son === 'n'){
    alert('Oh man, I sure hope he does not resent me later for naming him after a made-up character.');
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};


//Question # 6
let years = 15;
let numberOfGuesses = 4;

while(numberOfGuesses){
    let guess = prompt(`How many years ago did my coding journey actually start?\nYou have ${numberOfGuesses} guesses.`);
    numberOfGuesses--;
    
    if(guess < years){
        alert('Go higher');
    }
    else if(guess > years ){
        alert ('Go lower');
    } 
    else{
        alert ('I told you I was a procrastinator! My coding journey started with SQL back in 2008.');
        score+=1;
        break;
    }
    if(!numberOfGuesses){
        alert('No guesses remain 😩. The correct answer is 15 years ago.')
    }   
}

//Question #7
let faveSubjects = ['game theory','python','stats'];
let possibleChoices = ['Finance','Game theory','Javascript','Python','Stats'];
let numberOfAttempts = 6;

while(numberOfAttempts){
    let response = prompt(`Favorite class in college? \nChoices; ${possibleChoices}.\nYou have ${numberOfAttempts} attempts left.`).toLowerCase();
    numberOfAttempts--;

    for(let i=0;i < faveSubjects.length; i++){
        if(response===faveSubjects[i]){
            alert(`Yes! I thoroughly enjoyed ${response} in college. My professor was amaze-balls!`);
            score+=1;
            break;
        } 
    }
};

if(!numberOfAttempts){
    alert(`My favorite subjects were ${faveSubjects}.`);
};

alert(`You answered ${score} out of 7 questions correctly.`);

let finalMessage = alert(`Thanks ${visitorName} for hanging out. Enjoy the rest of your day!`);