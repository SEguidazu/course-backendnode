const config = {
  host: process.env.HOST || "http://localhost",
  port: process.env.PORT || 3000,
  publicRoute: process.env.PUBLIC_ROUTE || "/app",
  staticRoute: process.env.STATIC_ROUTE || "/public",
  mongodbUrl:
    process.env.MONGODB_URL ||
    "mongodb+srv://seguidazu:yA6F1flTSNmjJsZz@cluster0.z1vnevp.mongodb.net/telegrom?retryWrites=true&w=majority",
};

module.exports = config;
