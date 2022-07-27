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
let boardArray = ['','','','','','','','',''];

const gameBoard = () => {  
      box1.textContent = `${boardArray[0]}`;
      box2.textContent = `${boardArray[1]}`;
      box3.textContent = `${boardArray[2]}`;
      box4.textContent = `${boardArray[3]}`;
      box5.textContent = `${boardArray[4]}`;
      box6.textContent = `${boardArray[5]}`;
      box7.textContent = `${boardArray[6]}`;
      box8.textContent = `${boardArray[7]}`;
      box9.textContent = `${boardArray[8]}`;
  
  newGameBtn.addEventListener('click', () => {
    boardArray = ['','','','','','','','','',];
    box1.textContent = `${boardArray[0]}`;
    box2.textContent = `${boardArray[1]}`;
    box3.textContent = `${boardArray[2]}`;
    box4.textContent = `${boardArray[3]}`;
    box5.textContent = `${boardArray[4]}`;
    box6.textContent = `${boardArray[5]}`;
    box7.textContent = `${boardArray[6]}`;
    box8.textContent = `${boardArray[7]}`;
    box9.textContent = `${boardArray[8]}`;
  });

};
gameBoard();

const playerO = {name:'Owen', team:'teamO'};        
const playerX = {name:'Dougie', team:'teamX'};

const playerSelection = (player) => {       
  box1.addEventListener('click', () => { 
    if ((player.team === 'teamO') && (boardArray[0] === '')) {
      boardArray[0] = ['O'];
      box1.textContent = `${boardArray[0]}`;
    };
  });
  box2.addEventListener('click', () => { 
    if ((player.team === 'teamO') && (boardArray[1] === '')) {
      boardArray[1] = ['O'];
      box2.textContent = `${boardArray[1]}`;
    };
  });
  box3.addEventListener('click', () => { 
    if ((player.team === 'teamO') && (boardArray[2] === '')) {
      boardArray[2] = ['O'];
      box3.textContent = `${boardArray[2]}`;
    };
  });
  box4.addEventListener('click', () => { 
    if ((player.team === 'teamO') && (boardArray[3] === '')) {
      boardArray[3] = ['O'];
      box4.textContent = `${boardArray[3]}`;
    };
  });
  box5.addEventListener('click', () => { 
    if ((player.team === 'teamO') && (boardArray[4] === '')) {
      boardArray[4] = ['O'];
      box5.textContent = `${boardArray[4]}`;
    };
  });
  box6.addEventListener('click', () => { 
    if ((player.team === 'teamO') && (boardArray[5] === '')) {
      boardArray[5] = ['O'];
      box6.textContent = `${boardArray[5]}`;
    };
  });
  box7.addEventListener('click', () => { 
    if ((player.team === 'teamO') && (boardArray[6] === '')) {
      boardArray[6] = ['O'];
      box7.textContent = `${boardArray[6]}`;
    };
  });
  box8.addEventListener('click', () => { 
    if ((player.team === 'teamO') && (boardArray[7] === '')) {
      boardArray[7] = ['O'];
      box8.textContent = `${boardArray[7]}`;
    };
  });
  box9.addEventListener('click', () => { 
    if ((player.team === 'teamO') && (boardArray[8] === '')) {
      boardArray[8] = ['O'];
      box9.textContent = `${boardArray[8]}`;
    };
  });
    
};  
playerSelection(playerO);



