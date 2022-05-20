import { initialPositions } from "../utils/constants";
import { Color, GameStatus } from "../utils/types";
import Piece from "./Piece";

export default class Game {

    constructor(
        private piecesPositions: string[][],
        private pieces:Array<Piece>,
        private piecesCaptured:Array<Piece>,
        private turn: Color,
        private status: GameStatus
    ) { }

    getCaptured():Array<Piece>{
        return this.piecesCaptured;
    }

    getPiecesPositions(): string[][] {
        return this.piecesPositions;
    }

    getPieces(): Piece[] {
        return this.pieces;
    }

    getTurn(): Color {
        return this.turn;
    }

    getStatus(): GameStatus {
        return this.status;
    }

    restart(): boolean {
        this.status = "ReadyToPlay";
        this.turn = "White";
        this.piecesPositions = initialPositions;
        return true;
    }

}