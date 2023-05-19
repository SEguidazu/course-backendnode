const db = require("mongoose");

db.Promise = global.Promise;

async function connect(url) {
  await db.connect(url);
  console.log("[db] connected successfully");
}
// console.error("[dbError]", err);

module.exports = connect;
