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
      
      const playerSelection = (playerO, playerX) => {
        box1.addEventListener('click', () => {
          if (playerO.getTeam === 'teamO' && boardArray[0] === '') {
            boardArray = ['O','','','','','','','','',];
            box1.textContent = `${boardArray[0]}`;
          } else;
        });
        box2.addEventListener('click', () => {
          if (boardArray[1] === '') {
            boardArray = ['','O','','','','','','','',];
            box2.textContent = `${boardArray[1]}`;
          } else;
        });
        box3.addEventListener('click', () => {
          if (boardArray[2] === '') {
            boardArray = ['','','O','','','','','','',];
            box3.textContent = `${boardArray[2]}`;
          } else;
        });
        box4.addEventListener('click', () => {
          if (boardArray[3] === '') {
            boardArray = ['','','','O','','','','','',];
            box4.textContent = `${boardArray[3]}`;
          } else;
        });
        box5.addEventListener('click', () => {
          if (boardArray[4] === '') {
            boardArray = ['','','','','O','','','','',];
            box5.textContent = `${boardArray[4]}`;
          } else;
        });
        box6.addEventListener('click', () => {
          if (boardArray[5] === '') {
            boardArray = ['','','','','','O','','','',];
            box6.textContent = `${boardArray[5]}`;
          } else;
        });
        box7.addEventListener('click', () => {
          if (boardArray[6] === '') {
            boardArray = ['','','','','','','O','','',];
            box7.textContent = `${boardArray[6]}`;
          } else;
        });
        box8.addEventListener('click', () => {
          if (boardArray[7] === '') {
            boardArray = ['','','','','','','','O','',];
            box8.textContent = `${boardArray[7]}`;
          } else;
        });
        box9.addEventListener('click', () => {
          if (boardArray[8] === '') {
            boardArray = ['','','','','','','','','O',];
            box9.textContent = `${boardArray[8]}`;
          } else;
        });
      };
      
      const player = (name, team) => {
        const getName = name;
        const getTeam = team;
      };
        
      const playerO = player('Owen', 'teamO');
      const playerX = player('Dougie', 'teamX');
        
  playerSelection(playerO, playerX);

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


