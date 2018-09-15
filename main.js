'use strict';
        
        var points = 0;//score tracker
        var userName = prompt('Welcome player! What is your name?');
        console.log('Player username is: ' + userName);

        var driveCar = prompt('Can Sarkis drive a manual car?');
        var driveCarLow = driveCar.toLowerCase();

            if(driveCarLow === 'yes'){
            alert('Great guess! I can indeed drive a manual car.');
            points++;
            }else if(driveCarLow === 'no'){
            alert('No, I\'m indeed a very skilled driver.');
            }else {
            prompt('Please answer yes or no');
            }console.log('Player response is: ' + driveCarLow);

        var beets = prompt('Does Sarkis like beets?');
        var beetsLow = beets.toLowerCase();
        
            if(beetsLow === 'yes'){
            alert('No way, I hate them, they\'re gross');
            }else if(beetsLow === 'no'){
            alert('Exactly! I don\'t like them at all.');
            points++;
            }else {
            prompt('Please answer yes or no');
            }
        console.log('Does Sarkis like beets?: ' + beetsLow);

        var college = prompt('Did Sarkis attend college?');
        var collegeLow = college.toLowerCase();

            if(collegeLow === 'yes'){
            alert('Yes I did: University of Washington. Good times!');
            points++;
            }else if(collegeLow === 'no'){
            alert('No, I did attend. It was fun.') 
            }else {
            prompt('Please answer yes or no');
            }
        console.log('Did Sarkis attend college: ' + collegeLow);

        var soccer = prompt('Did Sarkis play soccer in high school?');
        var soccerLow = soccer.toLowerCase();
        
            if(soccerLow === 'yes'){
            alert('Yes of course I did. I love soccer! Who doesn\'t');
            points++;
            }else if(soccerLow === 'no'){
            alert('No! I did play in high school');
            }else {
            prompt('Please answer yes or no');
            }
        console.log('Answer to if Sarkis played soccer in high school is: ' + soccerLow);

        var guitar = prompt('Does Sarkis play the guitar?');
        var guitarLow = guitar.toLowerCase();

            if(guitarLow === 'yes'){
            alert('Ha! I wish.That is one skill I would like to have someday');
            }else if(guitarLow === 'no'){
            alert('Sadly you\'re right');
            points++;
            }else {
            prompt('Please answer yes or no');
            }
        console.log('Does Sarkis play the guitar?: ' + guitarLow);


        var turns = 0;

        while(turns < 5) { //loop for turns guessing game question 6
        var soccerGoals = prompt('How many goals did I score in high school?');
            if(soccerGoals = 3) {
            alert('You are correct!');
            points = points + 4;
            break;
            }else if(soccerGoals < 3) {
            prompt('Too low, try again');
            turns++;
            points = points + (4 -turns);
            }else(soccerGoals > 3) ;
            prompt('Too high, try again');
            turns++;
            points = points + (4 -turns);
            }
        console.log('Player guesses: ' + soccerGoals);

        var musicBands = ['NIN', 'Tool', 'Blur',
        'Depeche Mode', 'Wu Tang Clan'];
        var rightGuess = false;
        var guessCounter = 6;

        do{
        var bandAnswer = prompt('What is my favorite band?');
            for(var i = 0; i < musicBands.length; i++){
                if(musicBands[i] === bandAnswer){
                rightGuess = true;
                alert('Good job!');
                break;
            }
        }
            if(rightGuess){
            alert(musicBands[i]);
            alert('Good guesses, they are NIN, Tool, Blur,Depeche Mode, Wu Tang Clan');
            rightGuess++;
        } else {

        alert('nice try, guess again');
        }
         guessCounter--;
        } while(guessCounter > 0 && !rightGuess);
            if(!rightGuess){
            alert('Good job, they are NIN, Tool, Blur, Depeche Mode, and Wu Tang Clan');
        }
        console.log('Number of guesses: ' + guessCounter);
