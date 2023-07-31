import dotenv from "dotenv";
import Knex from "Knex";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const knex = Knex({
  client: "postgres",
  connection: {
    host: DB_HOST,
    port: parseInt(DB_PORT as string, 10),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  },
  pool: {
    min: 2,
    max: 10,
  },
});
export const onDatabaseConnect = async () => knex.raw("SELECT 1");

export default knex;
