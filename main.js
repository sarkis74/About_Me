'use strict';
        
        var userName = prompt('Welcome player! What is your name?');
        console.log('What is your name?: ' + userName);

        var driveCar = prompt('Can Sarkis drive a stick shift?');
        var driveCarLow = driveCar.toLowerCase();
        console.log('Player response is: ' + driveCarUp);

        if(driveCarLow === 'yes'){
            alert('Great guess! I can indeed drive a stick shift.');
        }else if(driveCarLow === 'no'){
            alert('No, I\'m a very skilled driver.');
        }else {
            prompt('Please answer yes or no');
        }


        var beets = prompt('Does Sarkis like beets?');
        var beetsLow = beets.toLowerCase();
        console.log('Does Sarkis like beets?: ' + beetsLow);
        
        if(beetsLow === 'yes'){
            alert('No way, I hate them, they\'re gross');
        }else if(beetsLow === 'no'){
            alert('Exactly! I don\'t like them at all.');
        }else {
            prompt('Please answer yes or no');
        }

        var college = prompt('Did Sarkis attend college?');
        var collegeLow = college.toLowerCase();
        console.log('Did Sarkis attend college: ' + collegeLow);

        if(collegeLow === 'yes'){
            alert('Yes I did: University of Washington. Good times!');
        }else if(collegeLow === 'no'){
            alert('No, I did attend. It was fun.') 
        }else {
            prompt('Please answer yes or no');
        }

        var soccer = prompt('Did Sarkis play soccer in high school?');
        var soccerLow = guitar.toLowerCase();
        console.log('Did Sarkis play soccer in high school?: ' + soccerLow);
        
        if(soccerUp === 'yes'){
            alert('Yes of course I did. I love soccer! Who doesn\'t');
        }else if(soccerLow === 'no'){
            alert('No! I did play in high school');
        }else {
            prompt('Please answer yes or no');
        }

        var guitar = prompt('Does Sarkis play the guitar?');
        var guitarLow = guitar.toLowerCase();
        console.log('Does Sarkis play the guitar?: ' + guitarLow);

        if(guitarLow === 'yes'){
            alert('Ha! I wish.');
        }else if(guitarLow === 'no'){
            alert('Sadly you\'re right');
        }else {
            prompt('Please answer yes or no');
        }

    