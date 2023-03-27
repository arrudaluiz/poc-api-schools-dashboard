import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Application, Request, Response, NextFunction } from 'express';
import db from '../models';

const app: Application = express();

app.use(async (req: any, res: Response, next: NextFunction) => {
  req.context = {
    models: db.models,
    user: {},
    sequelize: db.sequelize
  };
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config({ path: '.env' });
const port: number = Number(process.env.PORT) || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('ok');
});

app.listen(port, () => console.info(`Listening at http://localhost:${port}`));
