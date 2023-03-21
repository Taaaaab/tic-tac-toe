const displayMessage: Element | null =
  document.querySelector(".display-message");
let gameActive: boolean = true;
let currentPlayer: string = "X";
let gameState: string[] = ["", "", "", "", "", "", "", "", ""];

const player = (name: string, team: string) => {
  return { name, team };
};

const player1 = player("Dougie", "teamX");
const player2 = player("Mr. B", "teamO");

const winningMessage = () => `Player ${currentPlayer} wins!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

if (displayMessage?.innerHTML != null) {
  displayMessage.innerHTML = currentPlayerTurn();
}

function handleCellPlayed(clickedCell: any, clickedCellIndex: number) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}
function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (displayMessage?.innerHTML) {
    displayMessage.innerHTML = currentPlayerTurn();
  }
}
const winningConditions: any[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function handleResultValidation() {
  let roundWon: boolean = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a: string = gameState[winCondition[0]];
    let b: string = gameState[winCondition[1]];
    let c: string = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    if (displayMessage?.innerHTML) {
      displayMessage.innerHTML = winningMessage();
    }
    gameActive = false;
    return;
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw && displayMessage?.innerHTML) {
    displayMessage.innerHTML = drawMessage();
    gameActive = false;
    return;
  }
  handlePlayerChange();
}
function handleCellClick(clickedCellEvent: Event) {
  const clickedCell: any = clickedCellEvent.target;

  const clickedCellIndex: number = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}
function handleRestartGame() {
  gameActive = true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  if (displayMessage?.innerHTML) {
    displayMessage.innerHTML = currentPlayerTurn();
  }
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
}

const cell = document
  .querySelectorAll<Element>(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));
const newGameBtn: Element | null =
  document.querySelector<Element>("#newGameBtn");
if (newGameBtn != null) {
  newGameBtn.addEventListener("click", handleRestartGame);
}
