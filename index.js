var randomNumber;
var computerSelection;
var playerSelection;
var roundCounter = 0;
var wins = 0;
var losses = 0;
var playerScore = 0;
var computerScore = 0;

$("#round").html("Round " + roundCounter);
$("#counter").html(" &nbsp;&nbsp; Player Score = " + playerScore + " &nbsp;&nbsp;Computer Score = " + computerScore);
game();

function playerChoose() {
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

//🗿📄✂
function playRound() {
    roundCounter++;
    $("#round").html("Round " + roundCounter);
    $("#counter").html(" &nbsp;&nbsp; Player Score = " + playerScore + " &nbsp;&nbsp;Computer Score = " + computerScore);
    computerPlay();

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
    $("#round").html("Round " + roundCounter);
    $("#counter").html(" &nbsp;&nbsp; Player Score = " + playerScore + " &nbsp;&nbsp;Computer Score = " + computerScore);

    if (playerScore >= 3) {
        $("#winner").text("You won best 3 out of 5");
        gameOver();
    } else if (computerScore >= 3) {
        $("#winner").text("Computer won best 3 out 5");
        gameOver();
    }
}


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

function gameOver() {
    Round = 0;
    computerScore = 0;
    playerScore = 0;
}

function game() {
    playerChoose();
}

function winRound() {
    $("#" + roundCounter).text("Round " + roundCounter + ": You won " + playerSelection + " beats " + computerSelection);
    playerScore++;
}

function loseRound() {
    $("#" + roundCounter).text("Round " + roundCounter + ": You lost " + playerSelection + " loses to " + computerSelection);
    computerScore++;
}

function tieRound() {
    $("#" + roundCounter).text("Round " + roundCounter + ": It's a draw " + playerSelection + " vs " + computerSelection);
}