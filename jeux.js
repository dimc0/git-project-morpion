let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
let gameActive = true;

const winningCombinations = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];


const playerImages = {
    'X': '/image/croix.png', 
    'O': '/image/cercle.png',    
};

function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            cells[a].innerHTML !== '' &&
            cells[a].innerHTML === cells[b].innerHTML &&
            cells[a].innerHTML === cells[c].innerHTML
        ) {
            gameActive = false;
            cells[a].classList.add("win");
            cells[b].classList.add("win");
            cells[c].classList.add("win");
            return true;
        }
    }
    return false;
}

function isDraw() {
    return [...cells].every(cell => cell.innerHTML !== '');
}

document.addEventListener("DOMContentLoaded", () => {
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (gameActive && cell.innerHTML === '') {
                const img = document.createElement('img');
                img.src = playerImages[currentPlayer];
                img.alt = currentPlayer;
                img.style.width = "100%";  
                img.style.height = "100%";

                cell.appendChild(img);

                if (checkWinner()) {
                    return; 
                }

                if (isDraw()) {
                    gameActive = false;
                    return;
                }

                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});