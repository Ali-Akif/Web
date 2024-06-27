// Rock Paper Scissors Game

/* 
    1: getComputerChoice()
    2: getHumanChoice()
    3: humanScore, computerScore
    4: playRound(humanChoice, computerChoice)
    5: playGame() 
*/

// Functions

function getComputerChoice() {
    const number = getRandomInt();
    return numberToChoice(number);
}

function getUserChoice() {
    const userInput = prompt(`Enter your choice:
0 for Rock 
1 for Paper 
2 for Scissors`);

    if (userInput === null) {
        return "Give me something to choose man";
    }

    const userChoice = numberToChoice(Number(userInput));
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    const roundWinner = findWinner(humanChoice, computerChoice);
    if (roundWinner) {
        humanScore += 1;
        return "You won!";
    } else {
        computerScore += 1;
        return "You lost!";
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const winner = playRound(getUserChoice(), getComputerChoice());
        console.log(winner);
        console.log(`Your score is: ${humanScore}\nComputer score is: ${computerScore}`);
    }
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

playGame();
