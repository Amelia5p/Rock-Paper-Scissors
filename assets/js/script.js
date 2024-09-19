/**
 * Variables for the game and choices
 */

const choices = ["rock", "paper", "scissors"];
const buttons = document.getElementsByClassName("control-btn");
let playerScore = 0;
let computerScore = 0;
const playerImage= document.getElementById("player-image")
const computerImage= document.getElementById("computer-image")

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
    
    playerImage.src = `assets/images/${playerChoice}.png`;
    playerImage.alt = playerChoice;

    let computerChoice = computerRandomChoice(); 
    
    computerImage.src = `assets/images/${computerChoice}.png`;
    computerImage.alt = computerChoice;
    

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
    checkWinner();

    }

  
/**
 * Function toCheck winner, reset score once computer or player wins 3, 
 * Function to delay alert
 *
 */


function checkWinner() {
    if (playerScore === 3) {
    setTimeout(function() {
    alert("You won the game!");
    resetScores();
    }, 500); 
    
    } else if (computerScore === 3) {
    setTimeout(function() {
    alert("The computer won the game!");
    resetScores();
    }, 500); 
            }
        }

function resetScores() {
        playerScore = 0;
        computerScore = 0;
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
    }
    



