import Piece from "./Piece";
import Position from "./Position";

export default class Bishop extends Piece {

    private module: number = 8;

    canMove(position: Position): boolean {

        let forward = this.isForward(position, this.module);
        let sideward = this.isSideward(position, this.module);
        let ismodule = this.ismodule(position, this.module);
        let ismoduleDiagonal = this.ismoduleDiagonal(position);

        return (!(forward && sideward) && ismoduleDiagonal) && ismodule;
    }
}