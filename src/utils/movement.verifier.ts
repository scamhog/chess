import Piece from "../model/Piece";
import { Movement } from "./types";

export class MovementVerifier<M extends Piece>{

    constructor(private currentPositions: string[][], private piece: M, private movement: Movement) { }

    canMove(): boolean {
        return this.piece.canMove(this.movement.position);
    }

}