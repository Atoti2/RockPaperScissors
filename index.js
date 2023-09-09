let playerScore = 0;
let compScore = 0;
const player = document.querySelectorAll("div.player div");
let computerPoint = document.querySelector(".computerPoints");
let playerPoint = document.querySelector(".playerPoints");
let winner = document.querySelector(".winner");
let win = false
let result = document.querySelector(".result")

function newGameFunction(){
  window.location.reload(true);
}

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
  win = false
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore += 1;
    res = `You win ${computerSelection} beats ${playerSelection}<br>
                            Player point: ${playerScore}
                            <br>Computer point: ${compScore}`;


  } else if (playerSelection == computerSelection) {
    res = `It's a tie! You both chose ${playerSelection}<br>
        Player point: ${playerScore}
        Computer point: ${compScore}`;
  } else {
    compScore += 1;
    res = `You lose! ${computerSelection} beats ${playerSelection}<br>
                            Player point: ${playerScore}
                            <br>Computer point: ${compScore}`;
  }
  checkWinner()
  result.innerHTML = res
  return;
}

function checkWinner(){
    if(playerScore == 5){
        win = true
        winner.textContent = "Player wins!";
        disableButtons();
        if(win){
          document.querySelector('.newGame').style.visibility = "visible"
        }
    }
    else if(compScore == 5){
        win = true
        winner.textContent = "Computer wins!";
        disableButtons();
        if(win){
          document.querySelector('.newGame').style.visibility = "visible"
        }
    }
}



function getPlayerChoice(e) {
  let playerSelection = e.target.id;
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection.toLowerCase());
}
