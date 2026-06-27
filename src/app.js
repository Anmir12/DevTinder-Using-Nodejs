const express = require("express");

const app = express();

const PORT = 7777;

app.use("/admin", (req, res, next) => {
  const token = "xyz";

  const isAdminAuthorized = token === "xyz";

  if (!isAdminAuthorized) {
    res.status(401).send("admin authentication failed");
  } else {
    next();
  }
});

app.get("/admin/getAllData", (req, res, next) => {
  res.send("sending all admin data");
});

app.delete("/admin/deleteAllData", (req, res, next) => {
  res.send("deleting all admin data");
});



app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
