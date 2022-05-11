import Pawn from "../src/models/Pawn";
import Position from "../src/models/Position";

let pawn = new Pawn('White', "A", 2);
describe('testing pawn movements', () => {
    it('should return true, movement allowed 1 forward', () => {
        expect(pawn.canMove(new Position("A", 3))).toBe(true);
    });
    it('should return true, movement allowed 2 forward initial', () => {
        expect(pawn.canMove(new Position("A", 4))).toBe(true);
    });
    it("Shouldn't move to two steps no first move", () => {
        pawn.setNoFirtsMove();
        let position = new Position("A", 4);
        expect(pawn.canMove(position)).toBe(false);
    });
    it("Shouldn't move sideward", () => {
        let position = new Position("B", 2);
        expect(pawn.canMove(position)).toBe(false);
    });
    it("Shouldn't move backward", () => {
        let position = new Position("A", 1);
        expect(pawn.canMove(position)).toBe(false);
    });
});