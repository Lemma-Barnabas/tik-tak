/*export let board = Array(9).fill(null);
export let currentPlayer = 'X';

*/
export let board = [null, null, null, null, null, null, null, null, null];
export let currentPlayer = 'X';

// data/data.js


export const togglePlayer = () => {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}
