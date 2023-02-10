'use strict';


let visitorName = prompt("Please enter your name.");
console.log(visitorName);

let message = alert("Welcome " + visitorName + "!");
console.log(message); //shows as "undefined" in console
//let newMessage = document.write("Let's play a game!");
//console.log(newMessage); //shows as "undefined" in console

// question 1
let start = confirm("Let's see how much you know about me, "+ visitorName + "." + "\nAre you ready for a short quiz?");
console.log(start); // cancel === no, ok === yes

if(start === true){
    let begin = alert("OK, great to hear " + visitorName + ".");
    console.log(begin);
} else {
    let boo = alert("😢😪😭");
}

// question 1

let answerToSchool = prompt("First Question: Did I graduate high school in the early 2000s? \nPlease answer 'yes' or 'no'.");
console.log(answerToSchool);

let answerToSchoolLower = answerToSchool.toLowerCase();
console.log(answerToSchoolLower);

if(answerToSchoolLower === 'yes' || answerToSchoolLower === 'y'){
    alert("You are correct! \nMy 20 year high school reunion is at the end of this year.");
} else if(answerToSchoolLower === 'no' || answerToSchoolLower === 'n'){
    alert("You are so kind but my 20 year high school reunion is at the end of this year. But watch out world because I still have so much more to offer!");
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

let answerToFirstJob = prompt("Question #2: Was my first job in an office? \nPlease answer 'yes' or 'no'.");
console.log(answerToFirstJob);

let answerToFirstJobLower = answerToFirstJob.toLowerCase();
console.log(answerToFirstJobLower);

if(answerToFirstJobLower === 'yes' || answerToFirstJob === 'y'){
    alert("I wish! \nMy first job was in a chicken joint when I was 15. \nI was the cashier/dishwasher/cook/floor mopper/window washer for 5.15 per hour. It was the longest 3 weeks of my life!");
} else if(answerToFirstJobLower === 'no' || answerToFirstJobLower === 'n'){
    alert("You are correct. My first job was in the fast-food industry.");
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

let answerToSon = prompt("Question #3: Did I name my son after a video game? \nPlease answer 'yes' or 'no'.");
console.log(answerToSon);

let answerToSonLower = answerToSon.toLowerCase();

if(answerToSonLower === 'yes' || answerToSonLower === 'y'){
    alert("I totally did! I sure hope my son does not resent me for that when he gets older.");
} else if(answerToSonLower === 'no' || answerToSonLower === 'n'){
    alert("You are correct. His middle name was inspired by a character from Street Fighter .");
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

let answerToDress = prompt("Question #4: Do I prefer comfort over style? \nPlease answer 'yes' or 'no'.");
console.log(answerToDress);

let answerToDressLower = answerToDress.toLowerCase();

if(answerToDressLower === 'yes' || answerToDressLower === 'y'){
    alert("Woohoo to hoodies and sweats all day long!");
} else if(answerToDressLower === 'no' || answerToDressLower === 'n') {
    alert("Nope! I am completely okay with wearing the same thing everyday.");
} else{
    alert("Please remember to answer as 'yes' or 'no'.")
};

let answerToShopping = prompt("Last Question: Do I love to shop? \nPlease answer 'yes' or 'no'.");
console.log(answerToShopping);

let answerToShoppingLower = answerToShopping.toLowerCase();

if(answerToShoppingLower === 'yes' || answerToShoppingLower === 'y'){
    alert("Yes! I love to BARGAIN shop at the thrift stores!! My favorite finds include a real jade bangle, a 1980s vintage designer gown, and a 2005 edition of the World of Warcraft board game.");
} else if(answerToShoppingLower === 'no' || answerToShoppingLower === 'n') {
    alert("You are partially right. I can do maybe an an hour in the mall, but I can spend all day in the thrift stores!");
} else{
    alert("Please remember to answer as 'yes' or 'no'.");
};

let finalMessage = alert("Thank you " + visitorName + " for visiting my site and completing the quiz! I hope you learned some fun things about me.");