import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import Piece from "../model/Piece";
import { Color, GameStatus } from "../utils/types";

@Entity('Game')
export class GameEntity {

    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    piecesPositions!: string[][];

    @Column()
    pieces!: Array<Piece>;

    @Column()
    piecesCaptured!: Array<Piece>;

    @Column()
    turn!: Color;

    @Column()
    status!: GameStatus;
}