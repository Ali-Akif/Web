// Functions
function getRandomInt() {

    let int = Math.floor(Math.random() * 3);
    return int
  }
  
 function NumberToChoice(number) {
    let choice;
    switch (number) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
        default:
            choice = "invalid choice";
            break;
    }
    return choice;
 } 
 
function getComputerChoice() {
    let number = getRandomInt();
    let computerChoice = NumberToChoice(number);
    return computerChoice;
}

function getUserChoice() {
    let userInput = prompt(`0 for Rock 
1 for Paper 
2 for Scissors`);

    if (userInput === null) {
        return "Give me something to choose man"
    }

    let userChoice = NumberToChoice(Number(userInput));
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    let roundWinner = findWinner(humanChoice, computerChoice);
    if (roundWinner === 1) {
        humanScore +=1
        return "You won!"
    } else {
        computerScore += 1;
        return "You lost!"
    };

}

function findWinner(choice1, choice2) {
    const winningCombinations = {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper'
    };

    let winner = undefined;

    if (choice1 === choice2) {
        return "It's a tie!";
    }

    if (winningCombinations[choice1] === choice2) {
        winner = 1
    } else {
        winner = 0
    }
    return winner
}


function playGame() {
}

// Code
let humanScore = 0
let computerScore = 0

console.log(playRound(getUserChoice(), getComputerChoice()))