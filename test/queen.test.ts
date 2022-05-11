import Position from "../src/models/Position";
import Queen from "../src/models/Queen";

let queen = new Queen('White', "D", 1);
describe('testing queen movements', () => {
    it('should return true, movement allowed', () => {
        expect(queen.canMove(new Position("D", 5))).toBe(true);
    });
    it("Shouldn't move to the same place", () => {
        let position = new Position("D", 1);
        expect(queen.canMove(position)).toBe(false);
    });
    it("Should move three place to the RIGTH", () => {
        let position = new Position("G", 1);
        expect(queen.canMove(position)).toBe(true);
    });
    it("Shouldn't move incorrect cell", () => {
        let position = new Position("E", 3);
        expect(queen.canMove(position)).toBe(false);
    });
});