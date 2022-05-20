import { injectable } from "inversify";
import { GameEntity } from "../entity/Game.entity";
import Game from "../model/Game";
import { GameRepository } from "../repository/game.repository";
import { ComonService } from "../shared/service/common.service";
import { GameLibrary } from "../utils/game.library";
import { GameServiceInterface } from "./game.service.interface";

@injectable()
export class GameService extends ComonService<GameEntity, GameRepository> implements GameServiceInterface {

    constructor(repository: GameRepository) {
        super(repository);
    }

    resetGame(gameEntity: GameEntity, id: any): Promise<GameEntity> {
        const game: Game = new Game([], [], [], 'White', 'ReadyToPlay');
        game.restart();
        return this.repository.save(GameLibrary.convertModelToEntity(game, id));
    }
}