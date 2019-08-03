
let playerWins = 0;
let computerWins = 0;

//playRound(e,computerPlay())

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function computerPlay () {
  let x = getRndInt(1,3);
  switch (x){
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "sissors";
      break;
    }
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    return "It's a tie!"
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      computerWins++;
      return "You lose! Paper beats rock!"
    } else {
      playerWins++;
      return "You win! Rock beats sissors!"
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "sissors") {
      computerWins++;
      return "You lose! Sissors beats papper!"
    } else {
      playerWins++;
      return "You win! Paper beats rock!"
    }
  } else {
    if (computerSelection == "rock") {
      computerWins++;
      return "You lose! Rock beats sissors!"
    } else {
      playerWins++;
      return "You win! Sissors beats papper!"
    }
  }
}

function game (e) {
    let display = document.querySelector('#results');
    if(playerWins == 5){
      display.textContent = 'You win the game!';
      return;
    }else if(computerWins == 5) {
      display.textContent = 'The computer wins the game!';
      return;
    }

    
    display.textContent = playRound(e.target.id, computerPlay());
}

let btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener('click', game);
});