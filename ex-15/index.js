const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const requestTime = (req, res, next) => {
  const message = `Request: ${req.hostname} ${Date.now()}`;
  console.log(message);

  next();
};

app.use(requestTime);

app.get("/", (req, res) => {
  console.log("GET");
  res.json({
    status: 200,
    message: "Este request/response está OK",
  });
});

app.get("/hello", (req, res) => {
  res.json({
    status: 200,
    message: "Este request/response está OK",
  });
});

app.listen(port);
