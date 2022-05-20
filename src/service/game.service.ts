import { inject, injectable } from "inversify";
import { GameEntity } from "../entity/Game.entity";
import { GameRepository } from "../repository/game.repository";
import { ComonService } from "../shared/service/common.service";
import { GameServiceInterface } from "./game.service.interface";

@injectable()
export class GameService extends ComonService<GameEntity, GameRepository> implements GameServiceInterface {

    constructor(repository: GameRepository) {
        super(repository);
    }

}