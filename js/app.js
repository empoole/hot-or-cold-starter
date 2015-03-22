
$(document).ready(function(){
	
	var secretNumber = 0,
		guessCount = 0;

	/*--- Start game on page load ---*/
	newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start new game when New Game button is clicked ---*/
  	$(".new").click(function(event) {
  		event.preventDefault();
  		//Prompt for new game?
  		newGame();
  	})

  	/*--- Check guess whent the user clicks the guess button ---*/
  	$("#guessButton").click(function() {
  		event.preventDefault();
  		submitGuess();
  	});

  	/*--- Check guess when user presses enter ---*/
  	$("#userGuess").keypress(function(event) {
  		if (event.which === 13) {
  			event.preventDefault();
  			submitGuess();
  		}
  	})
});

/*--- Set the secret number ---*/
function setNumber() {
	secretNumber = Math.ceil(Math.random() * 99);
}

/*--- Reset game and choose a new secret number ---*/
function newGame() {
	$('#feedback').text("Make your Guess!");
	clearGuess();
	guessCount = 0;
	$('#count').text(guessCount);
	$('#guessList').html("");
	setNumber();
}

/*--- Clear the guess field ---*/
function clearGuess() {
	$('#userGuess').val("");
}

/*--- Submit the user's guess ---*/
function submitGuess() {
	var guess = parseInt($('#userGuess').val(), 10);
	if (guess != guess) {
		alert("Please enter a valid number.");
		$('#userGuess').val('');
	} else {
		guessCount++;
		$('#count').text(guessCount);
		$('#guessList').append('<li>' + guess + '</li>');
		$('#feedback').html(checkGuess(guess));
	}
	clearGuess();
}

/*--- Check the user's guess and give feedback ---*/
function checkGuess(userGuess) {
	if(isNaN(userGuess)) {
		return "Not a number.";
	} else if (userGuess > 100) {
		return "You guess should be between 1 and 100."
	} else if(userGuess === secretNumber) {
		return "You Win!";
	} else if (Math.abs(userGuess - secretNumber) >= 50) {
		return "Ice cold.";
	} else if (Math.abs(userGuess - secretNumber) >= 25) {
		return "Cold."
	} else if (Math.abs(userGuess - secretNumber) >= 12) {
		return "Chilly.";
	} else if (Math.abs(userGuess - secretNumber) >= 6) {
		return "Warm.";
	} else if(Math.abs(userGuess - secretNumber) >= 3) {
		return "Hot.";
	} else if (Math.abs(userGuess - secretNumber) >= 1) {
		return "Searing.";
	}
}