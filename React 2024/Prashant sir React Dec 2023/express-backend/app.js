const express = require("express");
const app = express();
const items = require("./items.json");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get("/", (req, res) => {
  res.status(200).json(items);
});

app.get("/abc/edf", (req, res) => {
  console.log(req.query.edf);
  res.status(200).json(items);
});
app.listen(8000, () => {
  console.log("listening on port 8000");
});
