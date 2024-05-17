console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice;
  let num = Math.floor(Math.random() * 3);

  return num === 0
    ? (choice = "rock")
    : num === 1
    ? (choice = "paper")
    : (choice = "scissors");
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?").toUpperCase();
  if (choice !== "ROCK" && choice !== "PAPER" && choice !== "SCISSORS") {
    console.error("invalid selection");
  } else {
    return choice.toLowerCase();
  }
}

function playRound(humanChoice, computerChoice) {
    
}
//paper beats rock
//rock beats scissors
//scissors beats paper
