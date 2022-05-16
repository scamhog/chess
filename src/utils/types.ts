export type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Color = 'Black' | 'White';
export type GameStatus = "ReadyToPlay" | "Playing" | "Check" | "Checkmate";
export type PieceStatus = "FirstMove" | "Captured" | "Check" | "OnBoard";
export type ResponseEntity = {
    data: Object | null,
    message: string,
    error: string | null,
    code: number
}