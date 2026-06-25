const express = require("express");

const app = express();

const PORT = 7777;

app.use(
  "/user",
  (req, res, next) => {
    res.send("request handler 1");
    console.log("req handler 1 executed");
    next();
  },
  (req, res) => {
    res.send("request handler 2");
    console.log("request handler 2 executed");
  },
);

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
