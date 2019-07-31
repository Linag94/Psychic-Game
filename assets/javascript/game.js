var lettersGuessed = [];
var guessesLeft;
var computerGuess;
var wins = 0;

var message = document.getElementById("userMessage");

//use Math.random method along with String.fromCharCode method to generate a random letter
function GetRandomChar(){
    computerGuess = String.fromCharCode(
        Math.floor(Math.random() * 26) + 97
    );
    console.log("Computer Guess: " + computerGuess);
}

//function to capture user's keyboard input and make the input lowercase
document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

    console.log("You guessed: " + keyPress);
    //document.getElementById('guess').innerHTML = keyPress;
    validateLetter(keyPress);

}

//function to catch repeat letters and/or add players guess to lettersGuessed string
function validateLetter (usersKeypress) {
    message.innerText = "";

    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })

    //alert player if the above code is true.
    if (repeatGuess) {
        //alert(usersKeypress + " already guessed. Try again!");
        message.innerHTML = "<span class='duplicateMessage'>already guessed. Try again!</span>";

        //if it is not a repeat guess, check if it's in word
    } else {
        lettersGuessed.push(usersKeypress);
        console.log("Guessed so far", lettersGuessed);

        //show user's input in browser
        showLettersGuessed();
        //is user's input a match to computer guess
        guessMatch(usersKeypress);
    }

}



function guessMatch (character) {
    guessesLeft--;

    if (character === computerGuess) {
        
        message.innerHTML = "<span class='winMessage'>You might be psychic</span>"
        wins++;
        startGame();
        // alert("You might be a Psychic!");
        //toggleGame();
        
    } else if (guessesLeft === 0) {
        message.innerHTML = "<span class='loseMessage'>Your not Psychic after all! Lets start over.</span>"
        // alert("Your not Psychic after all! Lets start over.");
        startGame ();
        
    } else {
        showGuessesRemaining();
    }
}

//function to show guesses remaining
function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
}

//function to show letters guessed in browser
function showLettersGuessed() {
    document.getElementById("playersGuess").innerHTML = lettersGuessed.join(", ");
}


function startGame () {

    lettersGuessed = [];
    showLettersGuessed();

    guessesLeft = 10;
    showGuessesRemaining();

    document.getElementById("numWins").innerHTML = wins;
    GetRandomChar();
}

startGame();


startGame();