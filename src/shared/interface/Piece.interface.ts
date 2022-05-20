import Position from "../../model/Position";

export interface IPiece{
    moveTo(position: Position):void;

    isForward(position: Position, module: number): boolean;

    isSideward(position: Position, module: number): boolean;

    ismodule(position: Position, module: number):boolean;

    ismoduleDiagonal(position: Position):boolean;

    canMove(position: Position): boolean;
}