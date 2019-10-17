
var randomNumber;
var shoot;
var computerSelection;
computerPlay();
var levelCounter = 0;

function startGame(){
    playRound();
}

function playRound(playerSelection, computerSelection) {
    levelCounter++;
    playerChoose();
    computerPlay();
}

function round(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
            console.log("It's a draw " + playerSelection + " vs " + computerSelection);
    }
    if (playerSelection === "rock" && computerSelection === "paper");{
        console.log("You lost " + playerSelection + " loses to " + computerSelection);
        youLost();
    }
    if (playerSelection === "rock" && computerSelection === "scissors");{
        console.log("You won " + playerSelection + " beats " + computerSelection);
    }
    if (playerSelection === "paper" && computerSelection === "scissors");{
        console.log("You lost " + playerSelection + " loses to " + computerSelection);
        youLost();
    }
    if (playerSelection === "paper" && computerSelection === "rock");{
        console.log("You won " + playerSelection + " beats " + computerSelection);
    }
    if (playerSelection === "scissors" && computerSelection === "rock");{
        console.log("You lost " + playerSelection + " vs " + computerSelection);
        youLost();
    }
    if (playerSelection === "scissors" && computerSelection === "paper");{
        console.log("You won " + playerSelection + " vs " + computerSelection);
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
    console.log(computerSelection);
}

function playerChoose () {
    $("#rock").click(function () {
        playerSelection = "rock";
        console.log(playerSelection);
    });
    
    $("#paper").click(function () {
        playerSelection = "paper";
        console.log(playerSelection);
    });
    $("#scissors").click(function () {
        playerSelection = "scissors";
        console.log(playerSelection);
    });
}

function youLost(){
    level = 0;
    started = "no";

}