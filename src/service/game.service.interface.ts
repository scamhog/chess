import { GameEntity } from "../entity/Game.entity";
import { CommonServiceInterface } from "../shared/service/common.service.interface";

export interface GameServiceInterface extends CommonServiceInterface<GameEntity> {

    resetGame(game: GameEntity, id: any): Promise<GameEntity>;

}