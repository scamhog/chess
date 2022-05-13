import Knight from "../src/models/Knight";
import Position from "../src/models/Position";

let knight = new Knight('White', "G", 1);
describe('testing Knight movements', () => {
    it('should return true, movement allowed', () => {
        expect(knight.canMove(new Position("H", 3))).toBe(true);
    });
    it('should return true, movement allowed', () => {
        expect(knight.canMove(new Position("F", 3))).toBe(true);
    });
    it("Shouldn't move to the same place", () => {
        let position = new Position("G", 1);
        expect(knight.canMove(position)).toBe(false);
    });
    it("Shouldn't move L more than 2", () => {
        let position = new Position("H", 4);
        expect(knight.canMove(position)).toBe(false);
    });
});