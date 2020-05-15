let currentPlayer = 'X';

const winingSequences = [
  ['0','1','2'],
  ['3','4','5'],
  ['6','7','8'],
  ['0','4','8'],
  ['2','4','6'],
  ['0','3','6'],
  ['1','4','7'],
  ['2','5','8'],
];

let playerMoves = {
  X: [],
  O: [],
};

const getBoard = () => {
  return { playerMoves, playerTurn: currentPlayer };
};

const resetBoard = () => {
  playerMoves = { X: [], O: []};
};

const move = (value) => {
  updateMoves(value);
  const prevPlayerMoves =  { ...playerMoves };

  if (playerMoves[currentPlayer].length >= 3 && checkIfWon(currentPlayer, playerMoves, winingSequences)) { 
    resetBoard();
    return { playerTurn: currentPlayer, playerMoves: prevPlayerMoves, won: true };
  } if (playerMoves['X'].length == 5){
    resetBoard();
    return { playerMoves: prevPlayerMoves, won: null };
  } else {
    currentPlayer == 'X' ?  currentPlayer = 'O' : currentPlayer = 'X';
    return { playerMoves, playerTurn: currentPlayer, won: false };
  }
};

const updateMoves = (move) => {
  playerMoves[currentPlayer] = [...playerMoves[currentPlayer], move];
};

const checkIfWon = (player, moves, winingCombos) => {
  for (const winingCombo of winingCombos) {
    for (let i = 0; i < 3; i++) {
      if (!moves[player].includes(winingCombo[i])) {
        break;
      }
      if (i == 2) {
        return true
      }
    }
  }
  return false;
};

module.exports = {
  checkIfWon,
  getBoard,
  move,
};


