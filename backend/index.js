const express = require('express');
const cors = require('cors');
const tikTakToe = require('./tikTakToe');

const app = express();
app.use(cors(), express.json());
const port = 4555;
app.listen(port, () => console.log(`Http server is running on port ${port}`));

app.get('/getBoard', (req, res) => {
  res.json(tikTakToe.getBoard());
});

app.post('/move', (req, res) => {
  res.json(tikTakToe.move(req.body.value));
});