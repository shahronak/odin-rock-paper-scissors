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

// Play a 5 round game of rock paper scissors and collect a player prompt for each round
function game() {
    let playerChoice;
    let computerChoice;
    let result;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5 ; i++) {
        computerChoice = getComputerChoice();
        playerChoice = prompt("Round " + (i+1) + ": Choose Rock, Paper, or Scissors");
        result = playRound(playerChoice, computerChoice);
        if (result == "tie") {
            console.log ("You Tied!");
        }
        else if (result == "win") {
            console.log ("You Win! " + playerChoice + " beats " + computerChoice);
            playerScore++;
        }
        else if (result == "lose") {
            console.log ("You Lose! " + computerChoice + " beats " + playerChoice);
            computerScore++;
        }
        else {
            console.log ("You entered an incorrect choice. Enter rock, paper, or scissors.")
            i--;
        }
    }

    if (playerScore > computerScore) {
        console.log ("You win this game!");
    }
    else if (playerScore < computerScore) {
        console.log ("You lose this game!");
    }
    else {
        console.log ("You tied this game!")
    }
}

game();