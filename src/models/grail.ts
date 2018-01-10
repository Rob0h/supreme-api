import { Model } from "objection";

class Grail extends Model {
    static get tableName() {
        return "grail";
    }

    public readonly id: number;
    public name: string;
}

export default Grail;
