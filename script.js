const container = document.querySelector('#container');
const gameBox = document.querySelector('#gameBox');

const gameBoard = () => {
    let myArray = [];

        gameBox.textContent = myArray;
};
gameBoard();


const Player = (name, team) => {
    const getTeam = () => team;
    const getName  = () => name;
    const win = () => {
        console.log('You Win!');
    }
    const score = score => {
        score += 1;
        if (score >= 3) {
          win();
        }
      };
    
    const attack = enemy => {
      if (getTeam < enemy.getTeam()) {
        score(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (attack >= enemy.getTeam()) {
        enemy.score(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, score, getTeam, getName};
  };
  
  const playerO = Player('jim', 10);
  const playerX = Player('jeff', 5);
  playerO.attack(playerX);
