function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return (choices[Math.floor(Math.random() * choices.length)])
}

function playRound(playerChoice, computerChoice=getComputerChoice()) {
    let playerChoiceLower = playerChoice.toLowerCase()
    if  (computerChoice == playerChoiceLower) {
        return "tie"
    } else if (computerChoice == 'rock' && playerChoiceLower == 'scissors') {
        return "computer"
    } else if (computerChoice == 'paper' && playerChoiceLower == 'rock') {
        return "computer"
    } else if (computerChoice == 'scissors' && playerChoiceLower == 'paper') {
        return "computer"
    } else {
        return "player"
    }
}

function getWinner(computerScore, playerScore) {
    if (computerScore > playerScore){
        return 'Computer wins, you lose!'
    } else {
        return 'You win, computer loses!'
    }
}


let computerScore = 0
let playerScore = 0


const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () => {
    let outcome=playRound('rock');
    if (outcome == 'player') {
        playerScore+=1
    } else if (outcome == 'computer') {
        computerScore+=1
    }
    document.getElementById('scoreboard').innerHTML = 'Player score: ' + playerScore + 'Computer score:' + computerScore
    if (computerScore == 5 || playerScore == 5) {
        document.getElementById('scoreboard').innerHTML = getWinner(computerScore, playerScore)

    }

});

paperBtn.addEventListener('click', () => {
    let outcome=playRound('paper');
    if (outcome == 'player') {
        playerScore+=1
    } else if (outcome == 'computer') {
        computerScore+=1
    }
    if (computerScore == 5 || playerScore == 5) {
        document.getElementById('scoreboard').innerHTML = getWinner(computerScore, playerScore)

    }
});

scissorsBtn.addEventListener('click', () => {
    let outcome=playRound('scissors');
    if (outcome == 'player') {
        playerScore+=1
    } else if (outcome == 'computer') {
        computerScore+=1
    }
    document.getElementById('scoreboard').innerHTML = 'Player score: ' + playerScore + 'Computer score:' + computerScore
    if (computerScore == 5 || playerScore == 5) {
        document.getElementById('scoreboard').innerHTML = getWinner(computerScore, playerScore)

    }
});



/*do {
    let computerChoice = getComputerChoice()
    let playerChoice = prompt("rock, paper, scissors?")
    let outcome = playRound(playerChoice, computerChoice)
    if (outcome == 'player') {
        playerScore += 1
    } else if (outcome == 'computer') {
        computerScore += 1
    }
    console.log(playerChoice, computerChoice, playerScore, computerScore)

} while (computerScore < 5 && playerScore < 5)

if (computerScore > playerScore) {
    console.log("computer wins", computerScore, playerScore)
} else {
    console.log("playerScore", playerScore, computerScore)
} */