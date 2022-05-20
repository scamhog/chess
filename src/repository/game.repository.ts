import { AppDataSource } from "../data-source";
import { GameEntity } from "../entity/Game.entity";
import { TypeormRepository } from "../shared/repository/typeorm.repository";
import { GameRepositoryInerface } from "./game.repository.interface";

export class GameRepository extends TypeormRepository<GameEntity> implements GameRepositoryInerface {
    constructor() {
        super(AppDataSource.getRepository(GameEntity));
    }
}