import { board, currentPlayer } from '../data.js';
import { updateCell, updateCurrentPlayerDisplay } from '../dom.js';



// src/events/restartGame.js


export const restartGame = () => {
    // Reset the board data
    for (let i = 0; i < board.length; i++) {
        board[i] = null;
    }

    // Reset the board display
    for (let i = 0; i < board.length; i++) {
        updateCell(i);
    }

    // Set the current player back to 'X'
    currentPlayer = 'X';
    updateCurrentPlayerDisplay();
};

// Assuming you have a restart button in your HTML, you can attach the event listener:
document.getElementById('restart').addEventListener('click', restartGame);
