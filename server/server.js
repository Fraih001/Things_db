const { sequelize, Thing } = require('./database.js');
const express = require('express');
const path = require('path');
const app = express();

app.set('json spaces', 2);

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
