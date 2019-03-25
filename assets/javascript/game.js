var letters= ["h", "z", "m","t","a", "w"];
var wins = 0;
var losses = 0;
var guessesLeft = 10; 
var guessed = [];
var letterToGuess = "";


var randomLetterGenerator = function() {
    for (var i = 0; i < letters.length; i++){
      letterToGuess=letters[Math.floor(Math.random()*letters.length)];  
    }  

}
randomLetterGenerator();
document.onkeydown = function(event) {
    guessesLeft --;
    document.getElementById("guessesLeft").innerHTML =("Guesses Left: " + guessesLeft);
    var guessedLetter = event.key;
    guessed.push(guessedLetter);
    document.getElementById("guessed").innerHTML = ("You've Guessed: " +guessed);

if (guessedLetter === letterToGuess) {
    wins++;
    document.getElementById("wins").innerHTML = ("Wins: " + wins);
    reset();
   
} 
if (guessesLeft=== 0) {
    reset();
    losses++;
    document.getElementById("losses").innerHTML =("Losses: " + losses);
    // alert("try again!");
}
}

var reset = function() {
    guessed= [];
    guessesLeft=10;
    document.getElementById("guessesLeft").innerHTML = ("Guesses Left: 10");
    document.getElementById("guessed").innerHTML = ("You've Guessed: ");
    randomLetterGenerator();
    
}


