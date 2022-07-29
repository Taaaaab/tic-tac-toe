const container = document.querySelector('#container');
const gridContainer = document.querySelector('#gridContainer');
const displayMessage = document.querySelector('#displayMessage');
const newGameBtn = document.querySelector('#newGameBtn');
let boardArray = ['','','','','','','','',''];

const gameBoard = () => {  
};
gameBoard();

const player = (name, team) => {
  return {name, team};
};

const player1 = player('Dougie', 'teamX');
const player2 = player('Mr. B', 'teamO');

let gameActive = true;
let currentPlayer = 'X';
const winningMessage = () => `Player ${currentPlayer} wins!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
displayMessage.innerHTML = currentPlayerTurn();

function handleCellPlayed(clickedCell, clickedCellIndex) {

};
function handlePlayerChange() {

};
function handleResultValidation() {

};
function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;

  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  );
 
  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  };

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();

};

document.querySelectorAll('.grid-item').forEach(cell => cell.addEventListener('click', handleCellClick));


