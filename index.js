// selection variables
let randomNumber;
let computerSelection;
let playerSelection;

// counters for displaying scores and round
let roundCounter = 0;
let playerScore = 0;
let computerScore = 0;

// Game cant be played when this is set to false to stop the button interactions at the end of game
let gameStart = true;

// Displays round and scores game can be played
counterDisplay();
playerChoose();


// Computer chooses randomly
function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerSelection = "Rock";
    }
    if (randomNumber === 1) {
        computerSelection = "Paper";
    }
    if (randomNumber === 2) {
        computerSelection = "Scissors";
    }
}

// Player clicks a button and makes selection
function playerChoose() {
    if (gameStart == true) {
        $("#rock").click(function () {
            playerSelection = "Rock";
            playRound();
        });

        $("#paper").click(function () {
            playerSelection = "Paper";
            playRound();
        });

        $("#scissors").click(function () {
            playerSelection = "Scissors";
            playRound();
        });
    }
}

// Player and computer face off in a round
function playRound() {
    if (gameStart == true) {
        roundCounter++;
        counterDisplay();
        computerPlay();

        // winner is decided
        if (playerSelection == computerSelection) {
            tieRound();
        } else if (playerSelection == "Rock" && computerSelection == "Paper") {
            loseRound();
        } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
            winRound();
        } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
            loseRound();
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            winRound();
        } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
            loseRound();
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            winRound();
        }

        // Counters are modified based on winner and round
        // $("#round").html("Round= " + roundCounter);
        // $("#counter").html(" &nbsp;&nbsp; Player Score = " + playerScore + " &nbsp;&nbsp;Computer Score = " + computerScore);
        counterDisplay();

        // End game if a player wins 3 rounds
        if (playerScore >= 3) {
            $("#round").text("You won! 🏆");
            gameOver();
        } else if (computerScore >= 3) {
            $("#round").text("Computer won! 🥈");
            gameOver();
        }
    }
}

// functions to show counters and round
function counterDisplay() {
    $("#round").html("Round = " + roundCounter);
    $("#counter").html(" &nbsp;&nbsp; Player Score = " + playerScore + " &nbsp;&nbsp;Computer Score = " + computerScore);

}


// Display changes showing winner of round
function winRound() {
    $("#" + roundCounter).text("Round = " + roundCounter + ": You won " + playerSelection + " beats " + computerSelection);
    playerScore++;
}

function loseRound() {
    $("#" + roundCounter).text("Round = " + roundCounter + ": You lost " + playerSelection + " loses to " + computerSelection);
    computerScore++;
}

function tieRound() {
    $("#" + roundCounter).text("Round = " + roundCounter + ": It's a draw " + playerSelection + " vs " + computerSelection);
}


// Buttons become non reactive and play again button loads
function gameOver() {
    gameStart = false;
    $("#playAgain").html("<button class='rounded-pill btn btn-lg btn-warning'>Play Again</button> ");
}

// Restart Game conditions, counters back to zero. Buttons are useable again
$("#playAgain").click(function () {
    playerScore = 0;
    computerScore = 0;
    roundCounter = 0;
    $("#round").html("Round = " + roundCounter);
    $("#counter").html(" &nbsp;&nbsp; Player Score = " + playerScore + " &nbsp;&nbsp;Computer Score = " + computerScore);
    $("#playAgain").html("");
    $("h4").text("");
    gameStart = true;
});