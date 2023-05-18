const db = require("mongoose");
const Model = require("./model");

const uri =
  "mongodb+srv://seguidazu:yA6F1flTSNmjJsZz@cluster0.z1vnevp.mongodb.net/telegrom?retryWrites=true&w=majority";

db.Promise = global.Promise;
db.connect(uri)
  .then(() => {
    console.log("[db] connected successfully");
  })
  .catch((err) => {
    console.error("[dbError]", err);
  });

function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  const messages = await Model.find();
  return messages;
}

module.exports = { add: addMessage, list: getMessages };
