import * as express from "express";
import { inject } from "inversify";
import { controller, httpGet, response, httpPost, requestBody } from "inversify-express-utils";
import { GameEntity } from "../entity/Game.entity";
import Game from "../model/Game";
import { GameService } from "../service/game.service";
import { GameLibrary } from "../utils/game.library";

@controller('/game')
export class GameController {

    constructor(@inject(GameService) private service: GameService) { }

    @httpGet('/')
    getList(@response() response: express.Response) {
        return this.service.findAll()
            .then(gamesResponse => {
                return response.status(200).json(gamesResponse);
            })
            .catch(error => {
                return response.status(500).json(error);
            });
    }

    @httpGet('/restart')
    restartGame(@response() response: express.Response) {
        return this.service.findAll()
            .then(gamesResponse => {
                let gameEntity: GameEntity = gamesResponse[0];
                const gameModel = new Game([], [], [], 'Black', 'ReadyToPlay');
                gameModel.restart();
                gameEntity = GameLibrary.convertModelToEntity(gameModel, gameEntity.id);
                return this.service.update(gameEntity, gameEntity.id)
                    .then(() => {
                        return response.status(200).json(gameEntity);
                    })
                    .catch(error => {
                        return response.status(500).json(error);
                    })
            })
            .catch(error => {
                return response.status(500).json(error);
            });
    }

    @httpPost('/move-piece')
    movePiece(@requestBody() body: express.Request, @response() response: express.Response) {
        console.log(body);
    }
}