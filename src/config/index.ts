import dotenv from "dotenv";
import merge from "lodash.merge";

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const stage = process.env.STAGE || "local";

let envConfig;

if (stage === "production") {
  envConfig = require("./production").default;
} else if (stage === "testing") {
  envConfig = require("./testing").default;
} else {
  envConfig = require("./local").default;
}

const config = {
  stage,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  dbTest: process.env.DB_TEST,
  secrets: {
    jwt: process.env.JWT_SECRET,
    dbUrl: process.env.DATABASE_URL,
  },
};

export default merge(config, envConfig);
