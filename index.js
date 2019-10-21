
var randomNumber;
var computerSelection;
var playerSelection;
var levelCounter = 0;
var wins = 0;
var losses = 0;

computerPlay();
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

function playRound() {
    levelCounter++;
    
    if (playerSelection == computerSelection){
        alert("It's a draw " + playerSelection + " vs " + computerSelection);
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("You lost " + playerSelection + " loses to " + computerSelection);
        youLost();
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("You won " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert("You lost " + playerSelection + " loses to " + computerSelection);
        youLost();
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("You won " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert("You lost " + playerSelection + " loses to " + computerSelection);
        youLost();
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert("You won " + playerSelection + " beats " + computerSelection);
    }
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



function youLost(){
    level = 0;
    losses++;
    started = "no";
}