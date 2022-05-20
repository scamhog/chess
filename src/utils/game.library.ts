import { GameEntity } from "../entity/Game.entity";
import Bishop from "../model/Bishop";
import Game from "../model/Game";
import King from "../model/King";
import Knight from "../model/Knight";
import Pawn from "../model/Pawn";
import Piece from "../model/Piece";
import Position from "../model/Position";
import Queen from "../model/Queen";
import Rook from "../model/Rook";
import { MovementVerifier } from "./movement.verifier";
import { Movement } from "./types";

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

    static verifyMovement(pieces: Piece[], movement: Movement, currentPositions: string[][]) {
        let foundedPiece: any = pieces.find((piece: any) => piece.id == movement.pieceId);
        let pieceCanMove: boolean = false;
        switch (foundedPiece.name) {
            case "Rook":
                const rook: Rook = new Rook(foundedPiece.color, foundedPiece.file, foundedPiece.rank,
                    foundedPiece.id, foundedPiece.name, foundedPiece.status);
                const rookMovementVerifier: MovementVerifier<Rook> =
                    new MovementVerifier(currentPositions, rook, movement);
                pieceCanMove = rookMovementVerifier.canMove();
                break;
            case "Bishop":
                const bishop: Bishop = new Bishop(foundedPiece.color, foundedPiece.file, foundedPiece.rank,
                    foundedPiece.id, foundedPiece.name, foundedPiece.status);
                const bishopMovementVerifier: MovementVerifier<Rook> =
                    new MovementVerifier(currentPositions, foundedPiece, movement);
                pieceCanMove = bishopMovementVerifier.canMove();
                break;
            case "Pawn":
                const pawn: Pawn = new Pawn(foundedPiece.color, foundedPiece.file, foundedPiece.rank,
                    foundedPiece.id, foundedPiece.name, foundedPiece.status);
                const pawnMovementVerifier: MovementVerifier<Rook> =
                    new MovementVerifier(currentPositions, foundedPiece, movement);
                pieceCanMove = pawnMovementVerifier.canMove();
                break;
            case "Knight":
                const knight: Knight = new Knight(foundedPiece.color, foundedPiece.file, foundedPiece.rank,
                    foundedPiece.id, foundedPiece.name, foundedPiece.status);
                const knightMovementVerifier: MovementVerifier<Rook> =
                    new MovementVerifier(currentPositions, foundedPiece, movement);
                pieceCanMove = knightMovementVerifier.canMove();
                break;
            case "King":
                const king: King = new King(foundedPiece.color, foundedPiece.file, foundedPiece.rank,
                    foundedPiece.id, foundedPiece.name, foundedPiece.status);
                const kingMovementVerifier: MovementVerifier<Rook> =
                    new MovementVerifier(currentPositions, foundedPiece, movement);
                pieceCanMove = kingMovementVerifier.canMove();
                break;
            case "Queen":
                const queen: Queen = new Queen(foundedPiece.color, foundedPiece.file, foundedPiece.rank,
                    foundedPiece.id, foundedPiece.name, foundedPiece.status);
                const queenMovementVerifier: MovementVerifier<Rook> =
                    new MovementVerifier(currentPositions, foundedPiece, movement);
                pieceCanMove = queenMovementVerifier.canMove();
                break;
            default:
                break;
        }
    }
}
