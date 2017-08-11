

    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessedLetters = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

 
    var updateGuessesLeft = function (){
      document.getElementById('guessLeft').innerHTML = "Guesses left: " + guessesLeft;
    };
    var updateGuessesSoFar = function (){
      document.getElementById('let').innerHTML = "Guesses so far: " + guessedLetters;
    };

    var reset = function(){
      guessesLeft = 10;
      guessedLetters = [];
      updateGuessesLeft();
      updateGuessesSoFar();
    };

    updateGuessesLeft();


    document.onkeyup = function(event) {
      guessesLeft--;
      var userGuess = event.key;

      guessedLetters.push(userGuess);
      updateGuessesLeft();
      updateGuessesSoFar();
            
      console.log(userGuess)
      console.log(computerGuess)


        if (guessesLeft > 0){
          if (userGuess == computerGuess){
            wins++;
            document.getElementById('wins').innerHTML = "Wins: " + wins;
            alert("You are psychic!");
            computerGuess = String.fromCharCode(Math.floor(Math.random() * (122- 97) + 97));
            reset();
           
          }
        }else if(guessesLeft == 0) {
          losses++;
          document.getElementById('losses').innerHTML = "Losses: " + losses;
          alert("You are not psychic :(");
          reset();

        }
      };



      