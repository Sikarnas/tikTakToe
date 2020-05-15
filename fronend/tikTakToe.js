const axios = require('axios');

const allCells = Array.from(document.getElementsByClassName('cell'));

const updateBoard = async (data) => {
  updateCells(data);
  updateLog(data);

  if (data.won === null) {
    console.log(data)
    updateTitle('Tie');
  } else if (data.won) {
    updateTitle(`${data.playerTurn} won`);
    removeEventListeners();
  } else {
    updateTitle(`${data.playerTurn} turn`);
  }
}

const bootstrap = async () => {
  const { data } = await axios.get('http://localhost:4555/getBoard');
  addEventListeners();
  updateBoard(data);
}

const onCellClick = async (e) => {
  const cell = allCells[e.target.id[1]];
  if (cell.innerText == '') {
    const { data } = await axios.post('http://localhost:4555/move', {
      value: e.target.id[1], 
    });
  updateBoard(data);
  } 
}

const updateCells = (data) => {
  Object.keys(data.playerMoves).forEach(player => {
    data.playerMoves[player].forEach((move) => {
      document.getElementById(`c${move}`).innerText = player;
    });
  });
}

const updateTitle = (text) => {
  document.getElementById('turn').innerText = text;
}

const updateLog = (data) => {
  document.getElementById('log').innerText = `X moves: ${data.playerMoves['X']}, O moves: ${data.playerMoves['O']}`
}

const addEventListeners = () => {
  allCells.forEach(cell => cell.addEventListener('click', onCellClick));
}

const removeEventListeners = () => {
  allCells.forEach(cell => cell.removeEventListener('click', onCellClick));
}

bootstrap();