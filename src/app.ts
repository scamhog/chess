import './controller/game.controller';
import express, { Application, Request, Response, NextFunction } from 'express';
import { Container } from 'inversify';
import { GameRepository } from './repository/game.repository';
import { GameService } from './service/game.service';
import { InversifyExpressServer } from 'inversify-express-utils';
import bodyParser from 'body-parser';

const container = new Container();
container.bind<GameRepository>(GameRepository).toSelf();
container.bind<GameService>(GameService).toSelf();

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

const server: InversifyExpressServer = new InversifyExpressServer(container, null, null, app);
server.build();

export default app;