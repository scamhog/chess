import { IPiece } from "../shared/interface/Piece.interface";
import { Color, File, PieceStatus, Rank } from "../utils/types";
import Position from "./Position";

export default abstract class Piece implements IPiece {
    protected position!: Position;

    constructor(
        private readonly color: Color,
        private file: File,
        private rank: Rank,
        private id: string,
        private name: string,
        private status: PieceStatus) {
        this.position = new Position(file, rank);
    }

    moveTo(position: Position) {
        this.position = position;
    }

    isForward(position: Position, module: number = 8): boolean {
        return position.getFile() == this.position.getFile();
    }

    isSideward(position: Position, module: number = 8): boolean {
        return position.getRank() == this.position.getRank();
    }

    ismodule(position: Position, module: number) {
        let diffModuleRank = Math.abs(position.getRank() - this.position.getRank());
        let diffModuleFile = Math.abs(position.getFile() - this.position.getFile());
        return (diffModuleFile > 0 && diffModuleFile <= module) || (diffModuleRank > 0 && diffModuleRank <= module);
    }

    ismoduleDiagonal(position: Position) {
        let diffModuleRank = Math.abs(position.getRank() - this.position.getRank());
        let diffModuleFile = Math.abs(position.getFile() - this.position.getFile());
        return diffModuleFile == diffModuleRank;
    }

    abstract canMove(position: Position): boolean;
}