function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return (choices[Math.floor(Math.random() * choices.length)])
}

function playRound(playerChoice, computerChoice) {
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

let computerScore = 0
let playerScore = 0

do {
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
}