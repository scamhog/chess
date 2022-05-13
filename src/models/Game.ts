import { initialPositions } from "../utils/constants";
import { Color, GameStatus } from "../utils/types";
import Piece from "./Piece";

export default class Game {

    constructor(
        private piecesPositions: string[][],
        private pieces:Array<Piece>,
        private captured:Array<Piece>,
        private turn: Color,
        private status: GameStatus
    ) { }

    getCaptured():Array<Piece>{
        return this.captured;
    }

    getPiecesPositions(): string[][] {
        return this.piecesPositions;
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