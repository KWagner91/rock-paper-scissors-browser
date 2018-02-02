// Global variables
var computer = "";
var user = "";
var userPoints = 0;
var computerPoints = 0;


/* Score Tracking of user and computer in bottom div table.
Takes userPoints and computerPoints and adds them to their corresponding td. */
function score() {
	var userScore = document.querySelector('#userScore');
	var computerScore = document.querySelector('#computerScore');
	userScore.textContent = userPoints;
	computerScore.textContent = computerPoints;
}

/* Computer playing its turn by choosing a random number between 0, 1 and 2 (scissors, paper and rock).
Computer Choice is displayed in right div (#right) in a new <p> element. */
function computerPlay() {
	var randomChoice = Math.floor(Math.random() * Math.floor(3));
	computer = (randomChoice === 2) ? "rock" : (randomChoice === 1) ? "paper" : "scissors";
	var insertion = document.querySelector('#right');
	var computerChoice = document.createElement('p');
	computerChoice.textContent = computer;
	insertion.appendChild(computerChoice);
}


function displayWinner(variable) {
	document.getElementById('winner').innerHTML = "";
	if (variable === "win") {
		var winner = document.querySelector('#winner');
		winner.textContent = "You win!";
	}
	else if(variable === "loose") {
		var winner = document.querySelector('#winner');
		winner.textContent = "You loose!";
	}
	else if(variable === "tie") {
		var winner = document.querySelector('#winner');
		winner.textContent = "It's a tie!";
	}
}


/* Possible winning conditions depending on computer and user input.
Takes user and computer choice as input and gives points (computerPoints or userPoints).
If choice is the same, alert the tie to user. */
function decision(user, computer) {
	if (user === "rock") {
	  if (computer === "paper") {
		  displayWinner("loose");
		   return computerPoints++;
		}
	  if (computer === "scissors") {
		  displayWinner("win");
		   return userPoints++;
		}
	  else
		   displayWinner("tie");
	}
	else if (user === "paper") {
		if (computer === "rock") {
			displayWinner("win");
		  return userPoints++;
		  }
		if (computer === "scissors") {
			displayWinner("loose");
		  return computerPoints++;
		 }
		else
		  displayWinner("tie");
	  }
	else if (user === "scissors") {
		if (computer === "paper") {
			displayWinner("win");
		  return userPoints++;
		  }
		if (computer === "rock") {
			displayWinner("loose");
		  return computerPoints++;
		  }
		else
		  displayWinner("tie");
		}
}


/*  Function to execute game rounds.
1) Once User clicked on one image, User Input is displayed in left div (#left) by creating new <p> element.
2) Computer plays its round by executing computerPlay() function.
3) A decision of the winner is made by executing decision() function.
4) Score is displayed in table of bottom div by executing score() function.
5) If somebody reaches 5 points, a winner is declared and the page refreshes.
*/
function playRound() {
	var insertion = document.querySelector('#left');
	var userChoice = document.createElement('p');
	userChoice.textContent = this.id;
	insertion.appendChild(userChoice);
	user = this.id;
	
	computerPlay();
	decision(user,computer);
	score();
  
	if (computerPoints === 5) {
		alert("You loose the game!");
		setTimeout(document.location.reload(true, 5000));
    }
	else if (userPoints === 5) {
		alert("Congratulation, you win the game!");
		setTimeout(document.location.reload(true, 5000));
    }
}

// Display score at beginning of the Game to give user a better understanding of game interface
score();

// Event-handler for img click
document.getElementById("rock").addEventListener("click", playRound);
document.getElementById("paper").addEventListener("click", playRound);
document.getElementById("scissors").addEventListener("click", playRound);
