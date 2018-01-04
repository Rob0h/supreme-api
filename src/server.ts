import * as Hapi from 'hapi';
import * as Knex from 'knex';
import { Model } from "objection";

import * as routes from "./routes";

const knexConfig = require("../../Knexfile");
const knex = Knex(knexConfig.development);
Model.knex(knex);

const options = {
    port: process.env.PORT || 3000,
};

const server = new Hapi.Server(options);

server.route(routes);

async function startServer() {
    try {
        await server.start();
        console.log("Server is running");
    }
    catch(err) {
        console.log(err);
    }
};

startServer();
