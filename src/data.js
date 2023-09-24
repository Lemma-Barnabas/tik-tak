
export let board = [null, null, null, null, null, null, null, null, null];
export let currentPlayer = 'X';




export const togglePlayer = () => {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}
