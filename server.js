const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");
const router = require("./network/routes");

db(
  "mongodb+srv://seguidazu:yA6F1flTSNmjJsZz@cluster0.z1vnevp.mongodb.net/telegrom?retryWrites=true&w=majority"
);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("la aplicacion esta escuchando en http://localhost:3000");
