module.exports = {
    development: {
        client: "postgresql",
        connection: "postgres://postgres@127.0.0.1:5433/test",
        pool: {
            min: 2,
            max: 10,
        },
    },
    semaphore: {
        client: "postgresql",
        connection: "postgres://postgres@db:5432/test",
        pool: {
            min: 2,
            max: 10,
        },
    },
};
