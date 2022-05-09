import Piece from "./Piece";
import Position from "./Position";

export default class King extends Piece {

    private module: number = 1;

    canMove(position: Position): boolean {
        return this.isForward(position, this.module) || this.isSideward(position, this.module) 
        || (!this.isForward(position, this.module) && !this.isSideward(position, this.module));
    }
}