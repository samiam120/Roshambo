console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice;
  let num = Math.floor(Math.random() * 3);

  num === 0
    ? (choice = "rock")
    : num === 1
    ? (choice = "paper")
    : (choice = "scissors");

    return choice.toLowerCase();
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
  let human = humanChoice;
  let computer = computerChoice;

  if(human === undefined){
    return;
  }
  if (human === computer) {
    str = "It's a draw!"
  }else{
    if((human === "rock" && computer === "paper") || 
        human === "paper" && computer === "scissors" ||
        human === "scissors" && computer === "rock"){
          str = "computer wins!"
          computerScore++;
    }else{
      str = "humans win!"
      humanScore++;
    }
  }
  console.log(`humans chose ${human}, and computer chose ${computer}. ${str}`);
  console.log(`human score: ${humanScore}`);
  console.log(`computer score: ${computerScore}`);
}
