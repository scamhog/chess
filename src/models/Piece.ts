import { Color, File, Rank } from "../utils/types";
import Position from "./Position";

export default abstract class Piece {
    protected position!: Position;

    constructor(private readonly color: Color, private file: File, private rank: Rank) {
        this.position = new Position(file, rank);
    }

    moveTo(position: Position) {
        this.position = position;
    }

    isForward(position: Position, module: number = 8): boolean {
        // let diffModule = Math.abs(position.getRank() - this.position.getRank());
        return position.getFile() == this.position.getFile();// && (diffModule > 0 && diffModule <= module);
    }

    isSideward(position: Position, module: number = 8): boolean {
        // let diffModule = Math.abs(position.getFile() - this.position.getFile());
        return position.getRank() == this.position.getRank();// && (diffModule > 0 && diffModule <= module);
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