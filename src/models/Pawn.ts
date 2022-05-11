import Piece from "./Piece";
import Position from "./Position";

export default class Pawn extends Piece {

    private module: number = 2;
    private firstMove: boolean = true;

    setNoFirtsMove() {
        this.firstMove = false;
    }

    ismodule(position: Position, module: number): boolean {
        let diffModuleRank = position.getRank() - this.position.getRank();
        let diffModuleFile = position.getFile() - this.position.getFile();
        return (diffModuleFile > 0 || diffModuleRank > 0) && (diffModuleRank <= module && diffModuleFile <= module);
    }

    canMove(position: Position): boolean {

        if (!this.firstMove)
            this.module = 1;

        let forward = this.isForward(position, this.module);
        let ismodule = this.ismodule(position, this.module);

        return forward && ismodule;
    }
}