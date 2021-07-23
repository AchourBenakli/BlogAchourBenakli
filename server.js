const express = require('express');
const path = require('path')
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(express.static('client/build'))

app.get('/api/blog', (req, res) => {
  res.send({
    msg: 'Hello dark order minus2'
  })
});

app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log('hello world')
});