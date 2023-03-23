import dotenv from 'dotenv';
import express from 'express';

const app = express();

dotenv.config({ path: '.env' });
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(port, () => console.info(`Listening at http://localhost:${port}`));
