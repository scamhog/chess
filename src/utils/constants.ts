import Pawn from "../model/Pawn";
import Piece from "../model/Piece";

export const initialPositions:string[][] = [
    ["A1","B1","C1","D1","E1","F1","G1","H1"],
    ["A2","B2","C2","D2","E2","F2","G2","H2"],
    ["  ","  ","  ","  ","  ","  ","  ","  "],
    ["  ","  ","  ","  ","  ","  ","  ","  "],
    ["  ","  ","  ","  ","  ","  ","  ","  "],
    ["  ","  ","  ","  ","  ","  ","  ","  "],
    ["A7","B7","C7","D7","E7","F7","G7","H7"],
    ["A8","B8","C8","D8","E8","F8","G8","H8"]
];

export const initialPieces: Piece[] = [
    new Pawn('White','A',2,'A2',"Pawn",'FirstMove'),
    new Pawn('White','B',2,'B2',"Pawn",'FirstMove'),
    new Pawn('White','C',2,'C2',"Pawn",'FirstMove'),
    new Pawn('White','D',2,'D2',"Pawn",'FirstMove'),
    new Pawn('White','E',2,'E2',"Pawn",'FirstMove'),
    new Pawn('White','F',2,'F2',"Pawn",'FirstMove'),
    new Pawn('White','G',2,'G2',"Pawn",'FirstMove'),
    new Pawn('White','H',2,'H2',"Pawn",'FirstMove'),

    new Pawn('White','A',1,'A1',"Rook",'FirstMove'),
    new Pawn('White','B',1,'B1',"Knight",'FirstMove'),
    new Pawn('White','C',1,'C1',"Bishop",'FirstMove'),
    new Pawn('White','D',1,'D1',"Queen",'FirstMove'),
    new Pawn('White','E',1,'E1',"King",'FirstMove'),
    new Pawn('White','F',1,'F1',"Bishop",'FirstMove'),
    new Pawn('White','G',1,'G1',"Knight",'FirstMove'),
    new Pawn('White','H',1,'H1',"Rook",'FirstMove'),

    new Pawn('Black','A',7,'A7',"Pawn",'FirstMove'),
    new Pawn('Black','B',7,'B7',"Pawn",'FirstMove'),
    new Pawn('Black','C',7,'C7',"Pawn",'FirstMove'),
    new Pawn('Black','D',7,'D7',"Pawn",'FirstMove'),
    new Pawn('Black','E',7,'E7',"Pawn",'FirstMove'),
    new Pawn('Black','F',7,'F7',"Pawn",'FirstMove'),
    new Pawn('Black','G',7,'G7',"Pawn",'FirstMove'),
    new Pawn('Black','H',7,'H7',"Pawn",'FirstMove'),

    new Pawn('White','A',8,'A8',"Rook",'FirstMove'),
    new Pawn('White','B',8,'B8',"Knight",'FirstMove'),
    new Pawn('White','C',8,'C8',"Bishop",'FirstMove'),
    new Pawn('White','D',8,'D8',"Queen",'FirstMove'),
    new Pawn('White','E',8,'E8',"King",'FirstMove'),
    new Pawn('White','F',8,'F8',"Bishop",'FirstMove'),
    new Pawn('White','G',8,'G8',"Knight",'FirstMove'),
    new Pawn('White','H',8,'H8',"Rook",'FirstMove')
]