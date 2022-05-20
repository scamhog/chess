import { File, Rank } from "../utils/types";

export default class Position {
    constructor(private file: File, private rank: Rank) { }
    getFile() {
        return this.file.charCodeAt(0);
    }
    getRank() {
        return this.rank;
    }
}