
function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber  < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:").toLowerCase();
}


function playGame() {

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
    }

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

console.log(`Final score: Human ${humanScore} - Computer ${computerScore}`);

if (humanScore > computerScore) {
    console.log("You win!");
} else if (computerScore > humanScore) {
    console.log("Computer wins! you lose :(");
} else {
    console.log("It's a tie!");
}

}

playGame();