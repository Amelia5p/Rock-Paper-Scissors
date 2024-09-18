/**
 * Variables for the game and choices
 */

const choices = ["rock", "paper", "scissors"];
const buttons = document.getElementsByClassName("control-btn");
let playerScore = 0;
let computerScore = 0;

/**
 * Buttons event listener
 */

for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * Get random computer choice function
 */

function computerRandomChoice() {
    const randomSelection = Math.floor(Math.random() * 3);
    return choices[randomSelection];
}

/**
 * Main function
 */

function playGame(playerChoice) {
    let computerChoice = computerRandomChoice();  // Use the correct function to get computer's choice

    // Determine the result
    if (playerChoice === computerChoice) {
        alert(`It's a draw! You both chose ${playerChoice}`);
        console.log(`Player choice: ${playerChoice}`); 
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        playerScore++;
        document.getElementById("player-score").textContent = playerScore;
        alert(`You Win! ${playerChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
        alert(`You Lose! ${computerChoice} beats ${playerChoice}`);
    }
}

