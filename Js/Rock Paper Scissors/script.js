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

console.log(getComputerChoice())