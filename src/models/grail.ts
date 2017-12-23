import { Model } from "objection";

class Grail extends Model {
    static get tableName() {
        return "grail";
    }

    readonly id: number;
    name: string;
}

export default Grail;
