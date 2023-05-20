const statusMessage = {
  200: "Done",
  201: "Created",
  400: "Invalid format",
  500: "Internal error",
};

exports.success = function (req, res, message, status = 200) {
  if (!message) {
    message = statusMessage[status];
  }

  res.status(status).send({
    error: "",
    body: message,
  });
};

exports.error = function (req, res, message, status = 500, details) {
  if (!message) {
    message = statusMessage[status];
  }

  if (details) {
    console.error("[detailsError]:", details);
  }

  res.status(status).send({
    error: message,
    body: "",
  });
};
