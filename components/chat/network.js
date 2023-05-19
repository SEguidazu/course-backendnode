const express = require("express");

const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/:userId", function (req, res) {
  const { userId } = req.params;

  controller
    .getChats(userId)
    .then((chats) => {
      response.success(req, res, chats, 200);
    })
    .catch((err) => {
      response.error(req, res, "[Unexpected Error]" + err, 500, err);
    });
});

router.post("/", function (req, res) {
  const { users } = req.body;

  controller
    .addChat(users)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, "[Unexpected Error]: " + err, 500, err);
    });
});

module.exports = router;
