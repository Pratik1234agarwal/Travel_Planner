var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.get("/", function (req, res) {
    res.sendFile("dist/index.html");
  });
  