import { board } from './data.js';
import { startGame } from '../src/handlers/start.js';
import { restartGame } from '../src/handlers/restart.js';

startGame();
console.log("Game started");


document.getElementById('restart').addEventListener('click', restartGame);

export const checkWinner = (board) => {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            return true;
        }
    }
    return false;
}
