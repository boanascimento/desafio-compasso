//Install express server
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/dist/desafio-compasso'));

app.listen(process.env.PORT || 4203);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/desafio-compasso/index.html'));
});
