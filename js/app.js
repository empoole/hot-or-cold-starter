
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

  	/*--- Check the user's guess ---*/
  	$("#guessButton").click(function() {
  		event.preventDefault();
  		var guess = parseInt($('#userGuess').val(), 10);
  		guessCount++;
  		$('#count').text(guessCount);
		$('#guessList').append('<li>' + guess + '</li>');
  		$('#feedback').html(checkGuess(guess));
  	});

});

/*--- Set the secret number ---*/
function setNumber() {
	secretNumber = Math.ceil(Math.random() * 99);
}

/*--- Start reset game and choose a new secret number ---*/
function newGame() {
	$('#feedback').text("Make your Guess!");
	$('#userGuess').text("");
	guessCount = 0;
	$('#count').text(guessCount);
	$('#guessList').html("");
	setNumber();
}

/*--- Check the user's guess ---*/
function checkGuess(userGuess) {
	if(userGuess === secretNumber) {
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
		return "Surface of the Sun.";
	}
}