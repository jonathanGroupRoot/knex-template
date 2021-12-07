const { env } = process;

export const appConfig = {
    // Mysql Connection
    mysqlConnection: env.MYSQL_CONNECTION,
};
