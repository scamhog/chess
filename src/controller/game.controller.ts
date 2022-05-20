import * as express from "express";
import { inject } from "inversify";
import { controller, httpGet, response } from "inversify-express-utils";
import { GameService } from "../service/game.service";

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
            })
    }
}