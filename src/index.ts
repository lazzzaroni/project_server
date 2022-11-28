import { connect, connection } from "mongoose";
import config from "./config";
import app from "./server";

connection.syncIndexes();

connect(config.secrets.dbUrl).then(() => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.port}`
  );
  app.listen(config.port);
});
