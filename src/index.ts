import 'reflect-metadata';
import { randomUUID } from "crypto";
import app from "./app";
import { AppDataSource } from "./data-source"
import { GameEntity } from "./entity/Game.entity";
import Game from "./model/Game";
import { GameLibrary } from "./utils/game.library";

export default AppDataSource.initialize().then(async () => {

    // let ggame = new Game([], [], [], 'White', 'ReadyToPlay');
    // ggame.restart();
    // let game = GameLibrary.convertModelToEntity(ggame);

    // AppDataSource.manager.getRepository(GameEntity).save(game);

    app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
}).catch(error => console.log(error));
