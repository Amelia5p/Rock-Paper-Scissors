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