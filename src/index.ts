import { connect } from "mongoose";
import config from "./config";
import app from "./server";

connect(config.secrets.dbUrl).then(() => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.port}`
  );
  app.listen(config.port);
});
