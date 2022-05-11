import Bishop from "../src/models/Bishop";
import Position from "../src/models/Position";

let bishop = new Bishop('White', "F", 1);
describe('testing bishop movements', () => {
    it('should return true, movement allowed diagonal', () => {
        expect(bishop.canMove(new Position("C", 4))).toBe(true);
    });
    it("Shouldn't move to the same place", () => {
        let position = new Position("F", 1);
        expect(bishop.canMove(position)).toBe(false);
    });
    it("Shouldn't move forward", () => {
        let position = new Position("F", 3);
        expect(bishop.canMove(position)).toBe(false);
    });
    it("Shouldn't move sideward", () => {
        let position = new Position("D", 1);
        expect(bishop.canMove(position)).toBe(false);
    });
});