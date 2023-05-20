const express = require("express");
const app = express();
const server = require("http").Server(app);

const bodyParser = require("body-parser");
const socket = require("./socket");
const db = require("./db");
const router = require("./network/routes");

db(
  "mongodb+srv://seguidazu:yA6F1flTSNmjJsZz@cluster0.z1vnevp.mongodb.net/telegrom?retryWrites=true&w=majority"
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

socket.connect(server);

router(app);

app.use("/app", express.static("public"));

server.listen(3000, function () {
  console.log("la aplicacion esta escuchando en http://localhost:3000");
});
