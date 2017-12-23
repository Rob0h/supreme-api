const { getGrail } = require("../../lib/grails/service");

const getGrailHandler = async(req, h) => {
    const { grailId } = req.params;
    const grail = await getGrail(grailId);
    return grail;
};

module.exports = {
    method: "GET",
    path: "/grails/{grailId}",
    handler: getGrailHandler,
};
