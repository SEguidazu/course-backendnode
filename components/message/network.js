const express = require("express");

const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", function (req, res) {
  const filterMessages = req.query.user || null;

  controller
    .getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((err) => {
      response.error(req, res, "[Unexpected Error]", 500, err);
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
      response.error(req, res, "[Unexpected Error]: " + err, 400, err);
    });
});

router.patch("/:id", function (req, res) {
  const { id } = req.params;
  const { message } = req.body;

  controller
    .updateMessage(id, message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "[Unexpected Error]: " + err, 500, err);
    });
});

router.delete("/:id", function (req, res) {
  const { id } = req.params;

  controller
    .deleteMessage(id)
    .then(() => {
      response.success(req, res, `${id} message deleted successfully`, 200);
    })
    .catch((err) => {
      response.error(req, res, "[Unexpected Error]: " + err, 400, err);
    });
});

module.exports = router;
