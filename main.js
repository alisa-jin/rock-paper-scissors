// create a function that returns rock, paper, or scissors
//Math.random() a number 1 - 3: 1 = rock , 2 = paper, 3 = scissors --> is making a object annoying?

function getComputerChoice() {
  const resultObj = {
    0: 'rock',
    1: 'paper',
    2: 'scissors',
  }
  let key = Math.floor(Math.random() * 3)
  console.log(resultObj[key])
  return resultObj[key]
}

// create a function that plays a single round of Rock Paper Scissors
// takes two parameters - (playerSelection, computerSelection)
function playRound(playerSelection, computerSelection) {
  // make arguments case sesitive for player selection --> .toLowerCase()
  playerSelection = playerSelection.toLowerCase()

  //test cases for each scenario

  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'rock':
        return 'Draw! Rock and Rock are the same.'

      case 'paper':
        return 'You Lose! Paper beats Rock.'

      case 'scissors':
        return 'You Win! Scissors beat Paper.'
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        return 'You Win! Scissors beat Paper.'

      case 'paper':
        return 'Draw! Paper and Paper are the same.'

      case 'scissors':
        return 'You Lose! Scissors beats Paper.'
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'rock':
        return 'You Lose! Rock beats Scissors.'

      case 'paper':
        return 'You Win! Scissors beats Paper.'

      case 'scissors':
        return 'Draw! Scissors and Scissors are the same.'
    }
  } else {
    return 'Error, wrong input. Please enter: rock, paper, or scissors'
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Choose rock, paper, or scissors: ')
    console.log(playerSelection)
    let computerSelection = getComputerChoice()
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection))
  }
}

game()
