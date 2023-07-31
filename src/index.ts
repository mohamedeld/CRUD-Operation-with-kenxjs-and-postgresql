import { onDatabaseConnect } from "./config/knex";

onDatabaseConnect()
  .then(() => console.log("database is connected"))
  .catch((error) => console.log(error));
