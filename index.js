var randomNumber;
var computerSelection;
var playerSelection;
var RoundCounter = 1;
var wins = 0;
var losses = 0;
var playerScore = 0;
var computerScore = 0;

$("#counter").text(" Player= " + playerScore + "     Round " + RoundCounter + "     Computer= " + computerScore);
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


function playRound() {
    RoundCounter++;
    $("#counter").text(" Player= " + playerScore + "     Round " + RoundCounter + "     Computer= " + computerScore);
    computerPlay();
    if (playerSelection == computerSelection) {
        $("#winner").text("It's a draw " + playerSelection + " vs " + computerSelection);
        
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        $("#winner").text("You lost " + playerSelection + " loses to " + computerSelection);
        computerScore++;

    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        $("#winner").text("You won " + playerSelection + " beats " + computerSelection);
        playerScore++;

    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        $("#winner").text("You lost " + playerSelection + " loses to " + computerSelection);
        computerScore++;

    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        $("#winner").text("You won " + playerSelection + " beats " + computerSelection);
        playerScore++;

    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        $("#winner").text("You lost " + playerSelection + " loses to " + computerSelection);
        computerScore++;

    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        $("#winner").text("You won " + playerSelection + " beats " + computerSelection);
        playerScore++;
    }
    $("#counter").text(" Player= " + playerScore + "   Round " + RoundCounter + "   Computer= " + computerScore);
    if (playerScore>=3){
        $("#winner").text("You won best 3 out of 5 rounds");
        gameOver();
    }
    else if(computerScore>=3){
        $("#winner").text("Computer won best 3 out 5 rounds");
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
    computerScore =0;
    playerScore = 0;
}

function game() {
    playerChoose();
}