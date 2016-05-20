import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>I am from the babel built server</h1>');
});

app.listen(PORT, () => {
  console.log('we hear you');
});
