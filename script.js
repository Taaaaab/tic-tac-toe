const container = document.querySelector('#container');
const gridContainer = document.querySelector('#gridContainer');
const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');
const box5 = document.querySelector('#box5');
const box6 = document.querySelector('#box6');
const box7 = document.querySelector('#box7');
const box8 = document.querySelector('#box8');
const box9 = document.querySelector('#box9');
const newGameBtn = document.querySelector('#newGameBtn');

const gameBoard = () => {
  let boardArray = ['X','O','X','O','O','X','X','O','X'];
      box1.textContent = `${boardArray[0]}`;
      box2.textContent = `${boardArray[1]}`;
      box3.textContent = `${boardArray[2]}`;
      box4.textContent = `${boardArray[3]}`;
      box5.textContent = `${boardArray[4]}`;
      box6.textContent = `${boardArray[5]}`;
      box7.textContent = `${boardArray[6]}`;
      box8.textContent = `${boardArray[7]}`;
      box9.textContent = `${boardArray[8]}`;

  const gameBoardReset = (boardArray) => {
    boardArray = ['','','','','','','','','',];
    console.log(boardArray);
    box1.textContent = `${boardArray[0]}`;
    box2.textContent = `${boardArray[1]}`;
    box3.textContent = `${boardArray[2]}`;
    box4.textContent = `${boardArray[3]}`;
    box5.textContent = `${boardArray[4]}`;
    box6.textContent = `${boardArray[5]}`;
    box7.textContent = `${boardArray[6]}`;
    box8.textContent = `${boardArray[7]}`;
    box9.textContent = `${boardArray[8]}`;
  };
  
  newGameBtn.addEventListener('click', () => {
    gameBoardReset(boardArray);
  });
  return {gameBoardReset};

};
gameBoard();

const player = (name, team) => {

};

