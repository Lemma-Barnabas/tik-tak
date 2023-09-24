import { handleCellClick } from '../dom.js';

export const startGame = () => {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
}
