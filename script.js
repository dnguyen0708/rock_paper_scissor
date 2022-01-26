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