const express = require("express");
const multer = require("multer");

const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();
const upload = multer({
  dest: "public/files/",
});

router.get("/", function (req, res) {
  const filterMessages = req.query.chat || null;

  controller
    .getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((err) => {
      response.error(req, res, "[Unexpected Error]", 500, err);
    });
});

router.post("/", upload.single("file"), function (req, res) {
  const { chat, user, message } = req.body;
  const file = req.file;

  controller
    .addMessage(chat, user, message, file)
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
