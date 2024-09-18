/**
 * Constant variables for the game and choices
 */

const choices= ["rock", "paper", "scissors"];
const playerScore= document.getElementById("player-score")
const computerScore=document.getElementById("computer-score")


 /**
  * Buttons event listener
  */

 for (let button of buttons){
    button.addEventListener("click", function(){
        let playerChoice= this.getAttribute("data-value");
        playGame(playerChoice);
    });
 }

/**
 * Get random computer choice function
 */

function computerChoice(){
    const randomSelection= Math.floor(Math.random() * 3);
    return choices(randomSelection);
}

 /**
  * Main function
  */

 function playGame(playerChoice){
    computerSelection= computerChoice();

 } if (playerChoice === computerChoice){
        return alert `It's a draw!, you both chose ${playerChoice}`;
} else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
) {
    return `You Win! ${playerChoice} beats ${computerChoice}` 
} else {
     return `You Lose! ${computerChoice} beats ${playerChoice}`

}


