import { GameEntity } from "../entity/Game.entity";
import CrudRepository from "../shared/repository/crud.repository.interface";

export interface GameRepositoryInerface extends CrudRepository<GameEntity>{

}