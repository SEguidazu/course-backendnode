const dotenv = require("dotenv");
dotenv.config();

const config = {
  host: process.env.HOST || "http://localhost",
  port: process.env.PORT || 3000,
  publicRoute: process.env.PUBLIC_ROUTE || "/app",
  staticRoute: process.env.STATIC_ROUTE || "/public",
  mongodbUser: process.env.MONGODB_USER,
  mongodbPass: process.env.MONGODB_PASS,
  mongodbCluster: process.env.MONGODB_CLUSTER,
  mongodbCollection: process.env.MONGODB_COLLECTION,
};

module.exports = config;
