const Model = require("./model");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterChat !== null) {
      filter = { chat: filterChat };
    }

    const messages = Model.find(filter)
      .populate("user", {
        _id: true,
        name: true,
      })
      .catch((err) => {
        reject(err);
      });

    resolve(messages);
  });
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });

  foundMessage.message = message;

  const newMessage = await foundMessage.save();
  return newMessage;
}

async function removeMessage(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText,
  remove: removeMessage,
};
