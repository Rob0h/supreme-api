import Grail from "../../models/grail";

const getGrail = (grailId: number): Promise<Grail> => (
    Grail.query()
        .findOne("id", grailId)
);

const postGrail = (name: string): Promise<Grail> => (
    Grail.query()
        .insert({ name })
);

export {
    getGrail,
    postGrail,
};
