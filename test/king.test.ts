import King from "../src/models/King";
import Position from "../src/models/Position";

let king = new King('White', "E", 1);
describe('testing king movements', () => {
    it('should return true, movement allowed', () => {
        expect(king.canMove(new Position("E", 2))).toBe(true);
    });
    it("Shouldn't move to the same place", () => {
        let position = new Position("E", 1);
        expect(king.canMove(position)).toBe(false);
    });
    it("Should move one place to the left", () => {
        let position = new Position("D", 1);
        expect(king.canMove(position)).toBe(true);
    });
    it("Shouldn't move forward more than 1 space", () => {
        let position = new Position("E", 3);
        expect(king.canMove(position)).toBe(false);
    });
    it("Shouldn't move sideward more than 1 space", () => {
        let position = new Position("C", 1);
        expect(king.canMove(position)).toBe(false);
    });
});