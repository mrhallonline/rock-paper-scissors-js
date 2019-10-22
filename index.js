var randomNumber;
var computerSelection;
var playerSelection;
var roundCounter = 0;
var wins = 0;
var losses = 0;
var playerScore = 0;
var computerScore = 0;
var gameStart = true;


$("#round").html("Round " + roundCounter);
$("#counter").html(" &nbsp;&nbsp; Player Score = " + playerScore + " &nbsp;&nbsp;Computer Score = " + computerScore);
game();

function playerChoose() {

    if (gameStart== true){
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

//🗿📄✂
function playRound() {
    if (gameStart==true){
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
        $("#round").text("You won! 🏆");
        gameOver();
    } else if (computerScore >= 3) {
        $("#round").text("Computer won! 🥈");
        gameOver();
    }}
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
    
    gameStart=false;
    $("#playAgain").html("<button class='rounded-pill btn btn-lg btn-outline-danger'>Play Again</button> ");
    
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


$("#playAgain").click(function(){
    playerScore=0;
    computerScore = 0;
    roundCounter = 0;
    $("#round").html("Round " + roundCounter);
    $("#counter").html(" &nbsp;&nbsp; Player Score = " + playerScore + " &nbsp;&nbsp;Computer Score = " + computerScore);
    $("#playAgain").html("");
    $("h4").text("");
    gameStart = true;

});
