const express = require("express");

const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", function (req, res) {
  controller
    .getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((err) => {
      response.error(req, res, "Unexpected Error", 500, err);
    });
});

router.post("/", function (req, res) {
  const { body } = req;

  controller
    .addMessage(body.user, body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((err) => {
      response.error(req, res, "Unexpected Error", 400, err);
    });
});

module.exports = router;
