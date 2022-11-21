import * as dotenv from "dotenv";
import config from "./config";
import app from "./server";

dotenv.config();

app.listen(config.port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.port}`
  );
});
