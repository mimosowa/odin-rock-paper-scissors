
function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber  <= 0.33) {
        return "rock";
    } else if (randomNumber <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
  console.log(getComputerChoice());

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:").toLowerCase();
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore, computerScore);