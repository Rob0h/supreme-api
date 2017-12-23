import { postGrail }from "../../lib/grails/service";

const postGrailHandler = async (req, h) => {
    const { name } = req.payload;
    const createdGrail = await postGrail(name);
    return createdGrail;
};

module.exports = {
    method: "POST",
    path: "/grails",
    handler: postGrailHandler,
};
