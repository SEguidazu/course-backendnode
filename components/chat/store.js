const Model = require("./model");

function addChat(chat) {
  const newChat = new Model(chat);
  return newChat.save();
}

function getChats(userId) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId !== null) {
      filter = { users: userId };
    }

    const chats = Model.find(filter)
      .populate("users", {
        _id: true,
        name: true,
      })
      .catch((err) => {
        reject(err);
      });

    resolve(chats);
  });
}

async function removeChat(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addChat,
  list: getChats,
  remove: removeChat,
};
