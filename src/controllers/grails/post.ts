import { postGrail } from "../../lib/grails/service";
import Grail from "../../models/grail";

const postGrailHandler = async (req): Promise<Grail> => {
    const { name } = req.payload;
    const createdGrail = await postGrail(name);
    return createdGrail;
};

module.exports = {
    method: "POST",
    path: "/grails",
    handler: postGrailHandler,
};
