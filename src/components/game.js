import { board, currentPlayer } from '../data';
import { updateCell, resetBoard } from '../dom';

export const handleCellClick = (event) => {
    const id = event.target.getAttribute('data-id');

    if (!board[id] && !checkWinner(board)) {
        board[id] = currentPlayer;
        updateCell(id, currentPlayer);
        if (checkWinner(board)) {
            setTimeout(() => alert(currentPlayer + " wins!"), 50);
        } else if (board.every(cell => cell)) {
            setTimeout(() => alert("It's a draw!"), 50);
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    }
}

export const handleRestart = () => {
    board.fill(null);
    resetBoard();
    currentPlayer = 'X';
}

const checkWinner = (board) => {
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
