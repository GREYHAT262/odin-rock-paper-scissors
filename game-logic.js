function getComputerChoice() {
    // Randomly generate num (0, 1 or 2)
    let num = Math.floor(Math.random() * 3);

    /*
      Map each num to a choice
      0 -> Rock | 1 -> Paper | 2 -> Scissors
    */
    switch (num) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice() {
    // Prompt user for input
    let choice = prompt("Rock, paper or scissors?");
    return choice;
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        // Make humanChoice case-insensitive
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase();
        let choiceCombi = humanChoice.concat(" ", computerChoice);

        // Determine winner of round
        switch (choiceCombi) {
            case "Rock Rock":
            case "Paper Paper":
            case "Scissors Scissors":
                console.log("It's a tie!");
                break;
            case "Rock Paper":
            case "Paper Scissors":
            case "Scissors Rock":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
                break;
            case "Rock Scissors":
            case "Paper Rock":
            case "Scissors Paper":
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
                break;
        }
    }

    // Initialize scores to 0
    let humanScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    // Declare winner of game
    if (humanScore > computerScore) {
        console.log("Congratulations! You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose! Better luck next time!");
    } else {
        console.log("It's a tie! Try again!");
    }
}

playGame();