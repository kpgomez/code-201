'use strict';


let visitorName = prompt('Please enter your name.');
let message = alert(`Welcome ${visitorName}!`);
let start = confirm('Ready?');

if (start === true) {
  alert('OK, great!');

} else {
  alert('😢😪😭');
};

function restrictResponse() {
  alert("Please remember to answer as 'yes' or 'no'.");
}

let score = 0;

//Question #1
let school = prompt("Did I graduate HS 20 years ago? \nPlease answer 'yes' or 'no'.").toLowerCase();

if (school === 'yes' || school === 'y') {
  alert('Yep, this year is my 20 year high school reunion.');
  score += 1;
} else if (school === 'no' || school === 'n') {
  alert('Nope, 2023 is my 20 year HS reunion. I am quite old and quite fragile.');
} else {
  restrictResponse();
};

//Question #2 
let food = prompt('Do I hate onions?').toLowerCase();

if (food === 'yes' || food === 'y') {
  alert('Nope, I love all kinds of food. Not picky one bit.');
} else if (food === 'no' || food === 'n') {
  alert('You are correct. I am not picky, not one bit.');
  score += 1;
} else {
  restrictResponse();
};

//Question #3
let style = prompt('Do I like to dress up?').toLowerCase();

if (style === 'yes' || style === 'y') {
  alert('Nope! I am super laaaaaaazy and often just wear my husband\'s clothes.');
} else if (style === 'no' || style === 'n') {
  alert('You are correct! Woohoo to hoodies and sweats all day every day of the week!');
  score += 1;
} else {
  restrictResponse();
};

//Question #4
let thrift = prompt('Thrifting is one of my favorite activities?').toLowerCase();

if (thrift === 'yes' || thrift === 'y') {
  alert('You are correct! I love bargain shopping especially thrifting. My favorite finds include a real jade bangle and a 2005 edition of the World of Warcraft board game.');
  score += 1;
} else if (thrift === 'no' || thrift === 'n') {
  alert('You are wrong. Thrift stores are amazing, and it is a great way to reduce your carbon footprint.');
} else {
  restrictResponse();
};

//Question #5
let son = prompt('Did I name my son after someone important?').toLowerCase();

if (son === 'no' || son === 'n') {
  alert('You are correct as I named him after a video game.');
  score += 1;
} else if (son === 'yes' || son === 'y') {
  alert('Nope! I named him after a video game.');
} else {
  restrictResponse();
};


//Question # 6
let years = 15;
let numberOfGuesses = 4;

while (numberOfGuesses) {
  let guess = prompt(`How many years ago did my coding journey actually start?\nYou have ${numberOfGuesses} guesses.`);
  numberOfGuesses--;

  if (guess < years) {
    alert('Go higher');
  }
  else if (guess > years) {
    alert('Go lower');
  }
  else {
    alert('Yep, my coding journey started with SQL back in 2008.');
    score += 1;
    break;
  }
  if (!numberOfGuesses) {
    alert('No guesses remain 😩. The correct answer is 15 years ago.')
  }
}

//Question #7
let faveSubjects = ['game theory', 'python', 'stats'];
let possibleChoices = ['Finance', 'Game theory', 'Javascript', 'Java', 'Python', 'Stats'];
let numberOfAttempts = 6;

while (numberOfAttempts) {
  let response = prompt(`Favorite class in college? \nChoices; ${possibleChoices}.\nYou have ${numberOfAttempts} attempts left.`).toLowerCase();
  numberOfAttempts--;

  for (let i = 0; i < faveSubjects.length; i++) {
    if (response === faveSubjects[i]) {
      alert(`Yep! I thoroughly enjoyed ${response} in college. My professor was amaze-balls!`);
      score += 1;
      numberOfAttempts = 0;
      break;
    }
  }
};

if (!numberOfAttempts) {
  alert(`My favorite subjects were ${faveSubjects}.`);
};

alert(`Thanks ${visitorName} for hanging out. You answered ${score} out of 7 questions correctly. Enjoy the rest of your day!`);