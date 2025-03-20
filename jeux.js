let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
let gameActive = true;

const winningCombinations = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];


function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            cells[a].textContent !== '' &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            gameActive = false;
            setTimeout(() => alert(`Le joueur ${cells[a].textContent} a gagné !`), 100);
            return true;
        }
    }
    return false;
}

function isDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}

document.addEventListener("DOMContentLoaded", () => {
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (gameActive && cell.textContent === '') {
                cell.textContent = currentPlayer; 

                if (checkWinner()) {
                    return; 
                }

                if (isDraw()) {
                    gameActive = false;
                    setTimeout(() => alert("Match nul !"), 100);
                    return;
                }

                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});