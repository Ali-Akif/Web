// Rock Paper Scissors Game

/* 
    1: getComputerChoice()
    2: playRound(humanChoice, computerChoice)
    3: playGame() 
*/


// Functions

function getComputerChoice() {
    const number = getRandomInt();
    return numberToChoice(number);
}

function playRound(humanChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');

    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a tie!";
    } else {
        const roundWinner = findWinner(humanChoice, computerChoice);
        if (roundWinner) {
            humanScore += 1;
            resultDiv.textContent = "You won!";
        } else {
            computerScore += 1;
            resultDiv.textContent = "You lost!";
        }
    }

    scoreDiv.textContent = `Your score is: ${humanScore} | Computer score is: ${computerScore}`;

    if (humanScore === 5) {
        resultDiv.textContent = "Congratulations! You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultDiv.textContent = "Sorry, you lost the game!";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[number] || "Invalid choice";
}

function findWinner(choice1, choice2) {
    const winningCombinations = {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper'
    };

    return winningCombinations[choice1] === choice2;
}

// Code
let humanScore = 0;
let computerScore = 0;

document.getElementById('rock').addEventListener('click', () => playRound('Rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click', () => playRound('Paper', getComputerChoice()));
document.getElementById('scissors').addEventListener('click', () => playRound('Scissors', getComputerChoice()));
