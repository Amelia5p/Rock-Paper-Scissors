 // Variables for the game and choices
 
const choices = ["rock", "paper", "scissors"];
const buttons = document.getElementsByClassName("control-btn");
let playerScore = 0;
let computerScore = 0;
const playerImage= document.getElementById("player-image")
const computerImage= document.getElementById("computer-image")
const playerDiv = document.getElementById("player-div");
const computerDiv = document.getElementById("computer-div");


// Hide computer and player divs

computerDiv.classList.add("hidden");
playerDiv.classList.add("hidden");


// Buttons event listener
 
for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");

        // Show computer and player divs
        playerDiv.classList.remove("hidden");
        computerDiv.classList.remove("hidden");

        playGame(playerChoice);
    });
}


// Get random computer choice function

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
//  h1 element that I can change the inner html of if i win or loose 
        document.getElementById("win-or-lose").innerHTML = "It's a draw!";
    }
    else if (
(playerChoice === "rock" && computerChoice === "scissors") ||
(playerChoice === "scissors" && computerChoice === "paper") ||
(playerChoice === "paper" && computerChoice === "rock")
) {
playerScore++;
document.getElementById("player-score").textContent = playerScore;
//  h1 element that i can change the inner html of if i win or loose 
document.getElementById("win-or-lose").innerHTML = "You Win!";

} else {
computerScore++;
document.getElementById("computer-score").textContent = computerScore;
// h1 element that i can change the inner html of if i win or loose 
document.getElementById("win-or-lose").innerHTML = "You lose!";
}

checkWinner();
}
/* Function to check winner, reset score once computer or player wins 3 games, 
  Function to delay alert*/
 
 
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
    



