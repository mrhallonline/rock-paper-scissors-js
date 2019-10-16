// function playRound(playerSelection, computerSelection) {
// 	// your code here!
// }

// const playerSelection = 'rock'
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))



var randomNumber;
var shoot;
var computerSelection;
computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("Draw");
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
    console.log(shoot);
    console.log(randomNumber);
}