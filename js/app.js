'use strict';


let visitorName = prompt('Please enter your name.');
console.log(visitorName);

let message = alert('Welcome ' + visitorName + "!");
//let message = alert('Welcome ${visitorName}!'); template literal did not work
console.log(message); //shows as "undefined" in console
//let newMessage = document.write("Let's play a game!");
//console.log(newMessage); //shows as "undefined" in console


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
    alert('You are correct! \nMy 20 year high school reunion is at the end of this year.');
} else if(school === 'no' || school === 'n'){
    alert('You are so kind but my 20 year high school reunion is at the end of this year. But watch out world because I still have so much more to offer!');
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

let job = prompt('Was my first job in an office?').toLowerCase();
console.log(job);


if(job === 'yes' || job === 'y'){
    alert('I wish! \nMy first job was in a chicken joint when I was 15. \nI was the cashier/dishwasher/cook/floor mopper/window washer for 5.15 per hour. It was the longest 3 weeks of my life!');
} else if(job === 'no' || job === 'n'){
    alert('You are correct. My first job was in the fast-food industry.');
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

let dress = prompt('Do I prefer comfort over style?').toLowerCase();
console.log(dress);

if(dress === 'yes' || dress === 'y'){
    alert('Woohoo to hoodies and sweats all day long!');
} else if(dress === 'no' || dress === 'n') {
    alert('My personal style can be very hobo-ish if you know what I mean.');
} else{
    alert("Please remember to answer as 'yes' or 'no'.")
};

let son = prompt('Did I name my son after a video game?').toLowerCase();
console.log(son);


if(son === 'yes' || son === 'y'){
    alert('I totally did! I sure he does not resent me for that when he gets older.');
} else if(son === 'no' || son === 'n'){
    alert('You are correct. His middle name was inspired by a character from Street Fighter .');
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

let thrift = prompt('Do I like spending all day in a thrift store?').toLowerCase();
console.log(thrift);

if(thrift === 'yes' || thrift === 'y'){
    alert('Yes! I love to BARGAIN shop at the thrift stores!! My favorite finds include a real jade bangle, a 1980s vintage designer gown, and a 2005 edition of the World of Warcraft board game.');
} else if(thrift === 'no' || thrift === 'n') {
    alert('You are partially right. I can do maybe an an hour in the mall, but I can spend all day in the thrift stores!');
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

let finalMessage = alert('Thank you ' + visitorName + ' for visiting my site and completing the quiz! I hope you learned some fun things about me.');