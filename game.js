/* 
Problem
Have a player play Rock Paper Scissors with a computer. The computer randomly picks Rock, Paper, Scissors. 
The player is prompted for rock paper scissors selection. 

Plan
Randomly select computer choice
Collect player choice
Evaluate who wins
Return string
Run 

Functions
Get Computer Choice
Get Player Choice
Play Round

Loop 5 Play Rounds and keep score
*/

let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;


// Randomly select a computer choice for rock, paper, and scissors
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Play a round based on the player and computer choice
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "tie";
    }
    else if (
        (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper")
        ) {
        return "win";
    } 
    else if (
        (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock")
        ) {
        return "lose";
    } 
    else {
        return "invalid game";
    }
}

function game() {

}