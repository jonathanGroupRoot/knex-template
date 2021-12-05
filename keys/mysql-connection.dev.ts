export const development = {
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
