// src/handlers/dom.js

import { board, currentPlayer, togglePlayer } from './data.js';
import { disableClick } from '../src/events/Listener.js';
import { checkWinner } from './init.js';  // Assuming you have a function for this, adjust if not

export const handleCellClick = (event) => {
    const cell = event.target;
    const index = parseInt(cell.getAttribute('data-id'));

    if (!board[index]) {
        board[index] = currentPlayer;
        updateCell(index);
        
        if (checkWinner(board)) { // assuming you have a function to check for a winner
            setTimeout(() => {
                alert(currentPlayer + " Lost");
                disableClick();
            }, 50);
        } else if (board.every(cell => cell)) {
            setTimeout(() => {
                alert("It's a draw!");
                disableClick();
            }, 50);
        }

        togglePlayer();  // Switch to the other player
        updateCurrentPlayerDisplay();
    }
}

export const updateCell = (index) => {
    const cell = document.querySelector(`[data-id="${index}"]`);
    cell.innerText = board[index];
}

export const updateCurrentPlayerDisplay = () => {
    const display = document.getElementById('current-player');
    display.innerText = `Current Player: ${currentPlayer}`;
}

