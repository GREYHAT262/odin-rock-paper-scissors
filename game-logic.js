function getComputerChoice() {
    // Randomly generate num (0, 1 or 2)
    let num = Math.floor(Math.random() * 3);

    /*
      Map each num to a choice
      0 -> Rock | 1 -> Paper | 2 -> Scissors
    */
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    // Prompt user for input
    let choice = prompt("Rock, paper or scissors?");
    return choice;
}

let humanScore = 0;
let computerScore = 0;