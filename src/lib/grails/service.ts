import Grail from "../../models/grail";

const getGrail = (grailId: number) => (
    Grail.query()
        .findOne("id", grailId)
);

const postGrail = (name: string) => (
    Grail.query()
        .insert({ name })
);

export {
    getGrail,
    postGrail,
};
