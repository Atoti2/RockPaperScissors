let playerScore = 0;
let compScore = 0;
const player = document.querySelectorAll("div.player div");
let computerPoint = document.querySelector(".computerPoints");
let playerPoint = document.querySelector(".playerPoints");
let winner = document.querySelector(".winner");

player.forEach((button) => {
  button.addEventListener("click", getPlayerChoice);
});

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
  player.forEach((button) => {
    button.removeEventListener("click", getPlayerChoice);
  });
}

function playRound(computerSelection, playerSelection) {
  let result;
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore += 1;
    result = `You win ${computerSelection} beats ${playerSelection}<br>
                            Player point: ${playerScore}
                            <br>Computer point: ${compScore}`;


  } else if (playerSelection == computerSelection) {
    result = `It's a tie! You both chose ${playerSelection}<br>
        Player point: ${playerScore}
        Computer point: ${compScore}`;
  } else {
    compScore += 1;
    result = `You lose! ${computerSelection} beats ${playerSelection}<br>
                            Player point: ${playerScore}
                            <br>Computer point: ${compScore}`;
  }
  checkWinner()
  result = document.querySelector(".result").innerHTML = result;
  return;
}

function checkWinner(){
    if(playerScore == 5){
        winner.textContent = "Player wins!";
        disableButtons();
    }
    else if(compScore == 5){
        winner.textContent = "Computer wins!";
        disableButtons();
    }
}

function getPlayerChoice(e) {
  let playerSelection = e.target.id;
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection.toLowerCase());
}
