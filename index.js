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
        playerSelection = "rock";
        playRound();
    });

    $("#paper").click(function () {
        playerSelection = "paper";
        playRound();
    });

    $("#scissors").click(function () {
        playerSelection = "scissors";
        playRound();
    });

}


function playRound() {
    RoundCounter++;
    $("#counter").text(" Player= " + playerScore + "     Round " + RoundCounter + "     Computer= " + computerScore);
    computerPlay();
    if (playerSelection == computerSelection) {
        alert("It's a draw " + playerSelection + " vs " + computerSelection);
        
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("You lost " + playerSelection + " loses to " + computerSelection);
        computerScore++;

    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("You won " + playerSelection + " beats " + computerSelection);
        playerScore++;

    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert("You lost " + playerSelection + " loses to " + computerSelection);
        computerScore++;

    } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("You won " + playerSelection + " beats " + computerSelection);
        playerScore++;

    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert("You lost " + playerSelection + " loses to " + computerSelection);
        computerScore++;

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert("You won " + playerSelection + " beats " + computerSelection);
        playerScore++;
    }
    $("#counter").text(" Player= " + playerScore + "   Round " + RoundCounter + "   Computer= " + computerScore);
    
}


function computerPlay() {
    
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerSelection = "rock";
    }
    if (randomNumber === 1) {
        computerSelection = "paper";
    }
    if (randomNumber === 2) {
        computerSelection = "scissors";
    }
}

// function youLost() {
//     Round = 0;
//     losses++;
//     started = "no";
// }

function game() {
    playerChoose();
}