import Piece from "./Piece";
import Position from "./Position";

const move_module = 8;

export default class Queen extends Piece {

    canMove(position: Position): boolean {

        let forward = this.isForward(position, move_module);
        let sideward = this.isSideward(position, move_module);
        let ismodule = this.ismodule(position, move_module);
        let ismoduleDiagonal = this.ismoduleDiagonal(position);

        return (forward || sideward || (!(forward && sideward) && ismoduleDiagonal)) && ismodule;
    }
}