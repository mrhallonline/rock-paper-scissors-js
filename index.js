
var randomNumber;
var computerSelection;
var playerSelection;
var levelCounter = 0;

computerPlay();

function playRound() {
    levelCounter++;
    
    if (playerSelection == computerSelection){
        console.log("It's a draw " + playerSelection + " vs " + computerSelection);
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lost " + playerSelection + " loses to " + computerSelection);
        youLost();
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You won " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lost " + playerSelection + " loses to " + computerSelection);
        youLost();
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You won " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lost " + playerSelection + " loses to " + computerSelection);
        youLost();
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You won " + playerSelection + " beats " + computerSelection);
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


    $("#rock").click(function () {
        playerSelection = "rock";
        playRound();
       
        // console.log(playerSelection);
    });
    
    $("#paper").click(function () {
        playerSelection = "paper";
        playRound();
        
        // console.log(playerSelection);
    });
    $("#scissors").click(function () {
        playerSelection = "scissors";
        playRound();
   
        // console.log(playerSelection);
    });


function youLost(){
    level = 0;
    started = "no";

}