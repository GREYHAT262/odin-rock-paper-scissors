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