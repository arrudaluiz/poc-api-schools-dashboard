import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config({ path: '.env' });
const port: number = Number(process.env.PORT) || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('ok');
});

app.listen(port, () => console.info(`Listening at http://localhost:${port}`));
