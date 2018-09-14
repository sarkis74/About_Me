'use strict';
        
        var userName = prompt('Welcome player! What is your name?');
        console.log('What is your name?: ' + userName);

        var driveCar = prompt('Can Sarkis drive a stick shift?');
        var driveCarLow = driveCar.toLowerCase();

        if(driveCarLow === 'yes'){
            alert('Great guess! I can indeed drive a stick shift.');
        }else if(driveCarLow === 'no'){
            alert('No, I\'m a very skilled driver.');
        }else {
            prompt('Please answer yes or no');
        }
        //console.log('Player response is: ' + driveCarUp);

        var beets = prompt('Does Sarkis like beets?');
        var beetsLow = beets.toLowerCase();
        
        if(beetsLow === 'yes'){
            alert('No way, I hate them, they\'re gross');
        }else if(beetsLow === 'no'){
            alert('Exactly! I don\'t like them at all.');
        }else {
            prompt('Please answer yes or no');
        }
        console.log('Does Sarkis like beets?: ' + beetsLow);

        var college = prompt('Did Sarkis attend college?');
        var collegeLow = college.toLowerCase();

        if(collegeLow === 'yes'){
            alert('Yes I did: University of Washington. Good times!');
        }else if(collegeLow === 'no'){
            alert('No, I did attend. It was fun.') 
        }else {
            prompt('Please answer yes or no');
        }
        console.log('Did Sarkis attend college: ' + collegeLow);

        var soccer = prompt('Did Sarkis play soccer in high school?');
        var soccerLow = soccer.toLowerCase();
        
        if(soccerUp === 'yes'){
            alert('Yes of course I did. I love soccer! Who doesn\'t');
        }else if(soccerLow === 'no'){
            alert('No! I did play in high school');
        }else {
            prompt('Please answer yes or no');
        }
        console.log('Did Sarkis play soccer in high school?: ' + soccerLow);

        var guitar = prompt('Does Sarkis play the guitar?');
        var guitarLow = guitar.toLowerCase();

        if(guitarLow === 'yes'){
            alert('Ha! I wish.');
        }else if(guitarLow === 'no'){
            alert('Sadly you\'re right');
        }else {
            prompt('Please answer yes or no');
        }
        console.log('Does Sarkis play the guitar?: ' + guitarLow);


        var turns = 0;

        while(turns < 4) {
        var soccerGoals = prompt('How many goals did I score in high school?');
            if(soccerGoals = 3) {
            alert('You are correct!');
            break;
        }

            else if(soccerGoals < 3) {
            prompt('Too low, try again');
            turns++;
        }

            else(soccerGoals > 3) ;
            prompt('Too high, try again');
            turns++;

        }

        var musicBands = ['Wu Tang Clan', 'NIN', 'Depeche Mode', 'Joy Division']
        var turns = 0;

        while(turns < 6) {
        var band = prompt('Name one of my favorite bands');
            for(i = 0; i < musicBands.length; i++) {
                if(band === musicBands[i]) {
                    alert('Good guess! You are right!');
                    alert(musicBand[i]);
                    break;
                }
            break;
            } 

            else if(band !== musicBands[i]) { 
            var band = prompt('Please try again');
            turns++;
            }
            
            else if(band === musicBands[i]) {
                alert('You got it!');
                alert(musicBands[i]);
                break;
                }
            break;
            }

            else {
                alert(musicBands[i]);
            }
            
        }



    