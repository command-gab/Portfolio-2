// sets intial score to 0
let botScore = 0,
  playerScore = 0;

// event listener for the options
document.getElementById("rock").onclick = playerThrowsRock;
document.getElementById("paper").onclick = playerThrowsPaper;
document.getElementById("scissors").onclick = playerThrowsScissors;

//commands for when players select an option
function playerThrowsRock() {
  console.log("rock")
  let botsWeapon = getRandomWeapon(); 
  checkWhoWon(botsWeapon, "rock");
}

function playerThrowsScissors() {
  console.log("scissors")
  let botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, "scissors");
}

function playerThrowsPaper() {
  console.log("paper")
  let botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, "paper");
}

function getRandomWeapon() {
  let randomNumber = Math.random();
  let botsWeapon = "rock";
  if (randomNumber < 0.33) {
    botsWeapon = "scissors";
  } else if (randomNumber < 0.6666) {
    botsWeapon = "paper";
  }
  return botsWeapon;
}

//checks who won
function checkWhoWon(botsWeapon, playersWeapon) {
  if (botsWeapon == playersWeapon) {
    displayCompleteMessage("It's a tie!");
  } else if (
    (botsWeapon == "scissors" && playersWeapon == "paper") ||
    (botsWeapon == "paper" && playersWeapon == "rock") ||
    (botsWeapon == "rock" && playersWeapon == "scissors")
  ) {
    increaseBotScore();
  } else {
    
    increasePlayerScore();
  }
}
function increaseBotScore() {
  botScore += 1;
  document.getElementById("computerScore").innerHTML = botScore;
  displayCompleteMessage("Sorry, you're a loser!");
}

// THIS FUNCTION NEEDS WORK:
function increasePlayerScore() {
  playerScore += 1;
  document.getElementById("humanScore").innerHTML = playerScore;
  displayCompleteMessage("You win, period!");
}

function displayCompleteMessage(msg) {
  document.getElementById("status").innerHTML = msg;
}
