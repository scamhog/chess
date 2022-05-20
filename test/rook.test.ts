import Rook from "../src/models/Rook";
import Position from "../src/models/Position";

let rook = new Rook('White', "A", 1, "A1", "Rook", "FirstMove");
describe('testing rook movements', () => {
    it('should return true, movement allowed forward', () => {
        expect(rook.canMove(new Position("A", 4))).toBe(true);
    });
    it('should return true, movement allowed sideward', () => {
        expect(rook.canMove(new Position("E", 1))).toBe(true);
    });
    it("Shouldn't move to the same place", () => {
        let position = new Position("A", 1);
        expect(rook.canMove(position)).toBe(false);
    });
    it("Shouldn't move diagonal", () => {
        let position = new Position("B", 2);
        expect(rook.canMove(position)).toBe(false);
    });
});