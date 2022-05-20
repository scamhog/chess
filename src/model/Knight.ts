import Piece from "./Piece";
import Position from "./Position";

export default class Knight extends Piece {

    canMove(position: Position): boolean {
        // The difference between ranks & file are 2 & 1 respectively OR
        // The difference between ranks & file are 1 & 2 respectively
        return (Math.abs(this.position.getRank() - position.getRank()) == 2 &&
            Math.abs(this.position.getFile() - position.getFile()) == 1) ||
            (Math.abs(this.position.getRank() - position.getRank()) == 1 &&
            Math.abs(this.position.getFile() - position.getFile()) == 2
        );
    }
}