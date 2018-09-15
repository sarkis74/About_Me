'use strict';

var points = 0;//score tracker
var userName, driveCar, driveCarLow, beets, beetsLow, college, collegeLow, soccer, soccerLow, guitar, guitarLow, soccerGoals, bandAnswer;

var userName = function(){
  userName = prompt('Welcome player! What is your name?');
  console.log('Player username is: ' + userName);
};

var driveCar = function(){
  driveCar = prompt('Can Sarkis drive a manual car?');
  driveCarLow = driveCar.toLowerCase();
  console.log('Player response is: ' + driveCarLow);
};

var beets = function(){
  beets = prompt('Does Sarkis like beets?');
  beetsLow = beets.toLowerCase();
  console.log('Does Sarkis like beets?: ' + beetsLow);
};

var college = function(){
  college = prompt('Did Sarkis attend college?');
  collegeLow = college.toLowerCase();
  console.log('Did Sarkis attend college: ' + collegeLow);
};

var soccer = function(){
  var soccer = prompt('Did Sarkis play soccer in high school?');
  var soccerLow = soccer.toLowerCase();
  console.log('Answer to if Sarkis played soccer in high school is: ' + soccerLow);
};

var guitar = function(){
  guitar = prompt('Does Sarkis play the guitar?');
  guitarLow = guitar.toLowerCase();
  console.log('Does Sarkis play the guitar?: ' + guitarLow);
};

var soccerGoalQuestion = function(){
  soccerGoals = parseInt(prompt('How many goals did I score in high school?'));
  console.log('Player guesses: ' + soccerGoals);
  return soccerGoals;
};

var bandQuestion = function(){
  bandAnswer = prompt('What is my favorite band?');
  return bandAnswer;
};

userName();
driveCar();
if(driveCarLow === 'yes'){
  alert('Great guess! I can indeed drive a manual car.');
  points++;
}else if(driveCarLow === 'no'){
  alert('No, I\'m indeed a very skilled driver.');
}else {
  prompt('Please answer yes or no');
}

beets();
if(beetsLow === 'yes'){
  alert('No way, I hate them, they\'re gross');
}else if(beetsLow === 'no'){
  alert('Exactly! I don\'t like them at all.');
  points++;
}else {
  prompt('Please answer yes or no');
}

college();
if(collegeLow === 'yes'){
  alert('Yes I did: University of Washington. Good times!');
  points++;
}else if(collegeLow === 'no'){
  alert('No, I did attend. It was fun.');
}else {
  prompt('Please answer yes or no');
}

soccer();
if(soccerLow === 'yes'){
  alert('Yes of course I did. I love soccer! Who doesn\'t');
  points++;
}else if(soccerLow === 'no'){
  alert('No! I did play in high school');
}else {
  prompt('Please answer yes or no');
}

guitar();
if(guitarLow === 'yes'){
  alert('Ha! I wish.That is one skill I would like to have someday');
}else if(guitarLow === 'no'){
  alert('Sadly you\'re right');
  points++;
}else {
  prompt('Please answer yes or no');
}
var turns = 0;
soccerGoalQuestion();
while(turns < 5) { //loop for turns guessing game question 6
  if(soccerGoals === 3) {
    alert('You are correct!');
    points++;
    break;
  }else if(soccerGoals < 3) {
    alert('Too low, try again');
    soccerGoalQuestion();
    turns++;
  }else {
    alert('Too high, try again');
    soccerGoalQuestion();
    turns++;
  }
}

var musicBands = ['NIN', 'Tool', 'Blur',
  'Depeche Mode', 'Wu Tang Clan'];
var rightGuess = false;
var guessCounter = 6;

do{
  bandQuestion();
  for(var i = 0; i < 7; i++){
    if(musicBands[i] === bandAnswer){
      rightGuess = true;
      alert('Good job!');
      break;
    }
  }
  if(rightGuess){
    alert('Good guesses, they are NIN, Tool, Blur,Depeche Mode, Wu Tang Clan');
    rightGuess++;
  } else {
    alert('nice try, guess again');
  }
  guessCounter--;
} while(guessCounter > 0 && !rightGuess);
if(!rightGuess){
  alert('Better luck next time, they are NIN, Tool, Blur, Depeche Mode, and Wu Tang Clan');
}
console.log('Number of guesses: ' + guessCounter);