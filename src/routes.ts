import * as R from "ramda";
import * as traverse from "traverse";

const transformRoutes = routes => traverse(routes)
    .reduce((acc, x = {}) => {
        if (R.prop("method", x)) {
            acc.push(x);
        }
        return acc;
    }, []);

const routes = require("require-all")({
    dirname: `${__dirname}/controllers/`,
    recursive: true,
});

module.exports = transformRoutes(routes);
