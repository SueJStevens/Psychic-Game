"use strict";
/*Functions that are likely to be reused in many different applications*/

//function for random computer choice
    function getRandomInt(seed) {
        return Math.floor(Math.random() * Math.floor(seed));
      }

    function changeDisplay(strElementID, displayValue) {
        document.getElementById(strElementID).textContent = displayValue;
    }

    


/*Functions specific to this application*/

//variables
    var initial_guessesLeft = 9;
    var initial_guesses = "";
    var wins = 0; //never gets reset back to zero
    var losses = 0; //never gets reset back to zero
    var guessesLeft = initial_guessesLeft;
    var computerPick = " ";
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var userChoices = initial_guesses;
    var userChoice = "";


//call reset function

    function resetGame() {

        //reset both display and internal variables
        changeDisplay("guessesLeft", initial_guessesLeft);
        changeDisplay("guesses", initial_guesses);

        //reset guessesLeft and guesses
        guessesLeft = initial_guessesLeft;
        userChoices = initial_guesses; 
        
        //Computer Picks Random Letter and changes display
        computerPick = alphabet[getRandomInt(26)];
        changeDisplay("computerPickID", computerPick)

    }


    //Start the game
    resetGame();

    //Capture user keystroke & display
    document.onkeyup = function(event) {
        //capture userChoice
        userChoice = event.key;
        
        //******NEED TO WRITE FUNCTION TO ONLY DISPLAY LETTERS*******//
        if (userChoice.length === 1 
            && userChoice.toLowerCase() >= "a" 
            && userChoice.toLowerCase() <= "z" 
            && userChoices.indexOf(userChoice) < 0) {
            
            //valid entry

            //deal with comma 
            if (userChoices === "") {
                userChoices = userChoice;   
            } else {
                userChoices = userChoices + ", " + userChoice;
            }
            
            //display user choices exactly as user entered
            changeDisplay("guesses", userChoices);
            changeDisplay("userChoice", userChoice);

            //lower case user choice for comparison purposes
            userChoice = userChoice.toLowerCase();

            //compare user choice to computer pick
            if (userChoice === computerPick) {
                //change display to show increase Wins by one
                wins = wins + 1;
                changeDisplay("wins", wins);
                resetGame();
            } else {
                guessesLeft = guessesLeft - 1;
                changeDisplay("guessesLeft", guessesLeft);
                
                //reset if there are no more guesses left
                if (guessesLeft === 0) {
                    losses = losses + 1;
                    changeDisplay("losses", losses);
                    resetGame();
                } //end inner if

            } //end outer if

        } 

    } //close onkeyup function
