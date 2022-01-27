function computerPlay() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1: return 'Rock';
        case 2: return 'Paper';
        case 3: return 'Scissor';
    }
}
function win(player, comp) {
    return `You Win! ${player} beats ${comp}`;
}
function lose(player, comp) {
    return `You Lose! ${comp} beats ${player}`;
}
function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection.toLowerCase() === 'paper') {
            return lose(playerSelection, computerSelection);
        }
        else if (computerSelection.toLowerCase() === 'scissor') {
            return win(playerSelection, computerSelection);
        }
        else {
            return "Draw!!!";
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection.toLowerCase() === 'scissor') {
            return lose(playerSelection, computerSelection);
        }
        else if (computerSelection.toLowerCase() === 'rock') {
            return win(playerSelection, computerSelection);
        }
        else {
            return "Draw!!!";
        }
    }
    else if (playerSelection.toLowerCase() === 'scissor') {
        if (computerSelection.toLowerCase() === 'rock') {
            return lose(playerSelection, computerSelection);
        }
        else if (computerSelection.toLowerCase() === 'paper') {
            return win(playerSelection, computerSelection);
        }
        else {
            return "Draw!!!";
        }
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Choose Rock, Paper or Scissor: ");
        console.log(playRound(playerChoice, computerPlay()));
    }
}

const buttons = document.querySelectorAll(".rps");
const h1 = document.querySelector('.display');
const humanScore = document.querySelector('.human > span');
const compScore = document.querySelector('.computer > span');
const winner = document.querySelector('.winner-declaration > h1');
const playAgainBtn = document.createElement('button');
const reset = document.querySelector('.reset');

playAgainBtn.textContent = "Play Again";

function resetGame() {
    humanScore.textContent = 0;
    compScore.textContent = 0;
    winner.textContent = '';
    reset.removeChild(playAgainBtn);
    enableBtns();
}

function disableBtns() {
    buttons.forEach(b => {
        b.disabled = true;
    })
}

function enableBtns() {
    buttons.forEach(b => {
        b.disabled = false;
    })
}

function checkWin() {
    if (parseInt(humanScore.textContent) >= 5) {
        reset.appendChild(playAgainBtn);
        disableBtns();
        return "You Win, Let's GO!";
    }
    if (compScore.textContent >= 5) {
        reset.appendChild(playAgainBtn);
        disableBtns();
        return "Computer Win! You sUcK!";
    }
    return '';
}

buttons.forEach(b => {
    b.addEventListener('click', function (e) {
        h1.textContent = playRound(e.target.textContent, computerPlay());
        if (h1.textContent.toLocaleLowerCase().includes('win')) {
            humanScore.textContent = parseInt(humanScore.textContent) + 1;
        }
        else if (h1.textContent.toLocaleLowerCase().includes('lose')) {
            compScore.textContent = parseInt(compScore.textContent) + 1;
        }
        winner.textContent = checkWin()
    })
})

playAgainBtn.addEventListener('click', function (e) {
    resetGame();
})