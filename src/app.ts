import 'reflect-metadata';
import './controller/game.controller';
import { Application, Request, Response, NextFunction } from 'express';
import { Container } from 'inversify';
import { GameRepository } from './repository/game.repository';
import { GameService } from './service/game.service';
import { InversifyExpressServer } from 'inversify-express-utils';

const container = new Container();
container.bind<GameRepository>(GameRepository).toSelf();
container.bind<GameService>(GameService).toSelf();

const server: InversifyExpressServer = new InversifyExpressServer(container);
const app: Application = server.build();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello');
});

export default app;