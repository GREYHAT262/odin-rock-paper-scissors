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

function playGame() {
    function playRound(e) {
        // Get choices
        let humanChoice = e.target.className;
        let computerChoice = getComputerChoice();

        // Make humanChoice case-insensitive
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase();
        let choiceCombi = humanChoice.concat(" ", computerChoice);

        // Access div element to display results
        const result = document.querySelector('.round-result');

        // Determine winner of round
        switch (choiceCombi) {
            case "Rock Rock":
            case "Paper Paper":
            case "Scissors Scissors":
                result.textContent = "It's a tie!";
                break;
            case "Rock Paper":
            case "Paper Scissors":
            case "Scissors Rock":
                result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
                computerScore++;
                break;
            case "Rock Scissors":
            case "Paper Rock":
            case "Scissors Paper":
                result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                humanScore++;
                break;
        }

        // Display running score
        const scoreboard = document.querySelector('.scoreboard');
        scoreboard.textContent = `You: ${humanScore}, Opponent: ${computerScore}`;

        // Declare winner of game and end game
        const outcome = document.querySelector('.game-result');

        if (humanScore == 5) {
            outcome.textContent = "Congratulations! You win!";
            buttons.forEach(button => button.removeEventListener('click', playRound));
        } else if (computerScore == 5) {
            outcome.textContent = "You lose! Better luck next time!";
            buttons.forEach(button => button.removeEventListener('click', playRound));
        }
    }

    // Initialize scores to 0
    let humanScore = 0;
    let computerScore = 0;

    // Add event listener to each button to call playRound with correct player choice
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', playRound));
}

playGame();