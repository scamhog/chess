import { GameEntity } from "../entity/Game.entity";
import Game from "../model/Game";

export class GameLibrary {
    static convertEntityToModel(gameEntity: GameEntity): Game {
        return new Game(gameEntity.piecesPositions, gameEntity.pieces,
            gameEntity.piecesCaptured, gameEntity.turn, gameEntity.status);
    }

    static convertModelToEntity(game: Game, id: any): GameEntity {
        const gameEntity: GameEntity = new GameEntity();
        gameEntity.id = id;
        gameEntity.pieces = game.getPieces();
        gameEntity.piecesCaptured = game.getCaptured();
        gameEntity.piecesPositions = game.getPiecesPositions();
        gameEntity.status = game.getStatus();
        gameEntity.turn = game.getTurn();
        return gameEntity;
    }
}
