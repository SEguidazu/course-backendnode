const express = require("express");

const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", function (req, res) {
  controller
    .getUsers()
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch((err) => {
      response.error(req, res, "[Unexpected Error]" + err, 500, err);
    });
});

router.post("/", function (req, res) {
  const { body } = req;

  controller
    .addUser(body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, "[Unexpected Error]: " + err, 500, err);
    });
});

module.exports = router;
