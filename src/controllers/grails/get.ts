import { getGrail } from "../../lib/grails/service";
import Grail from "../../models/grail";

const getGrailHandler = async (req): Promise<Grail> => {
    const { grailId } = req.params;
    const grail = await getGrail(grailId);
    return grail;
};

module.exports = {
    method: "GET",
    path: "/grails/{grailId}",
    handler: getGrailHandler,
};
