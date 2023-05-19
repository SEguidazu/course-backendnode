const Model = require("./model");

function addUser(user) {
  const newUser = new Model(user);
  return newUser.save();
}

function getUsers() {
  return Model.find();
}

async function updateName(id, name) {
  const foundUser = await Model.findOne({
    _id: id,
  });

  foundUser.name = name;

  const updatedUser = await foundUser.save();
  return updatedUser;
}

async function removeUser(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addUser,
  list: getUsers,
  updateName,
  remove: removeUser,
};
