import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/../client`));

app.listen(PORT, () => {
  console.log('we hear you');
});
