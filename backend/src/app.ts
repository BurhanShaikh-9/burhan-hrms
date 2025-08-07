import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { dbConnection } from './controller/database';
// import './types/index'
dbConnection()
const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const routeModules = [
  require('./routes/user'),
  require('./routes/signin'),
];

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript Express!');
});


routeModules.forEach((routeModule) => {
  app.use('/api/', routeModule);
});

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port} ⚡️`);
});
