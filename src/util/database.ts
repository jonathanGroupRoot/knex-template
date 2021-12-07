/* eslint-disable @typescript-eslint/no-var-requires */
import knex from "knex";

// eslint-disable-next-line import/no-dynamic-require
const connection = {
    client: "mysql2",
    connection: {
        host: "localhost",
        user: "root",
        password: "root",
        database: "ancarxtemplate",
        timezone: "-03:00",
    },
    migrations: {
        directory: "./migrations",
    },
    seeds: {
        directory: "./seeds",
    },
};
export const database = knex(connection);
