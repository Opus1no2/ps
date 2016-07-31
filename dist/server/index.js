'use strict';

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const staticsPath = path.join(__dirname, "../client");
const viewsPath = path.join(staticsPath, "views");

app.set("views", viewsPath)
  .set("view engine", "pug")
  .use(express.static(staticsPath))
  .use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", require("./routes/index"))
  .get("/user/profiles", require("./routes/profiles"));

app.listen(8888, () => {
  console.log('app listening on 8888');
});
