module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "programmer",
  database: "taskmanager",
  synchronize: true,
  logger: "advanced-console",
  logging: "all",
  cache: true,
  dropSchema: false,
  entities: ["dist/models/*.js"],
};
