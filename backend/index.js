const express = require('express');
const cors = require('cors');
const tikTakToe = require('./tikTakToe');

const app = express();
app.use(cors(), express.json());
app.listen(4555, () => console.log('Http server is running on port 3000'));

app.get('/getBoard', (req, res) => {
  res.json(tikTakToe.getBoard());
});

app.post('/move', (req, res) => {
  res.json(tikTakToe.move(req.body.value));
});