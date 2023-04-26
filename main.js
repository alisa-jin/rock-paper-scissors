const resultsDiv = document.getElementById('results')

// create a function that returns rock, paper, or scissors
//Math.random() a number 1 - 3: 1 = rock , 2 = paper, 3 = scissors --> is making a object annoying?

function getComputerChoice() {
  const resultObj = {
    0: 'rock',
    1: 'paper',
    2: 'scissors',
  }
  const key = Math.floor(Math.random() * 3)
  console.log(resultObj[key])
  return resultObj[key]
}

// create a function that plays a single round of Rock Paper Scissors
// takes two parameters - (playerSelection, computerSelection)
function playRound(playerSelection, computerSelection) {
  // make arguments case sesitive for player selection --> .toLowerCase()
  console.log('player selection: ' + playerSelection)
  console.log('computer selection: ' + computerSelection)
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') return 'Draw! Rock and Rock are the same.'
    if (computerSelection === 'paper') return 'You Lose! Paper beats Rock.'
    if (computerSelection === 'scissors') return 'You Win! Rock beats Scissors'
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') return 'You Win! Paper beats Rock.'
    if (computerSelection === 'paper')
      return 'Draw! Paper and Paper are the same.'
    if (computerSelection === 'scissors')
      return 'You Lose! Scissors beats Paper.'
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') return 'You Lose! Rock beats Scissors.'
    if (computerSelection === 'paper') return 'You Win! Scissors beats Paper.'
    if (computerSelection === 'scissors')
      return 'Draw! Scissors and Scissors are the same.'
  } else {
    return 'Error, wrong input. Please enter: rock, paper, or scissors'
  }
}

function displayResults(result) {
  resultsDiv.innerHTML = result
}

const rockBtn = document.getElementById('rock-btn')
rockBtn.onclick = () => {
  displayResults(playRound('rock', getComputerChoice()))
}
const paperBtn = document.getElementById('paper-btn')
paperBtn.onclick = () => {
  displayResults(playRound('paper', getComputerChoice()))
}
const scissorsBtn = document.getElementById('scissors-btn')
scissorsBtn.onclick = () => {
  displayResults(playRound('scissors', getComputerChoice()))
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt('Choose rock, paper, or scissors: ')
//     console.log(playerSelection)
//     let computerSelection = getComputerChoice()
//     console.log(computerSelection)
//     console.log(playRound(playerSelection, computerSelection))
//   }
// }

// game()
