import * as Knex from 'knex';
import { Model } from "objection";

const knexConfig = require("../../Knexfile");

let dbConnection = knexConfig.development;
if (process.env.SEMAPHORE) {
    let dbConnection = knexConfig.semaphore;
}

const knex = Knex(dbConnection);
Model.knex(knex);