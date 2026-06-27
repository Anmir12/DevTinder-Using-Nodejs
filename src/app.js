const express = require("express");

const app = express();

const PORT = 7777;

app.use("/user", (req, res, next) => {
  // res.send("request handler 1");
  console.log("req handler 1 executed");
  console.log(req.query);
  next();
});

app.use("/user",(req,res,next)=>{
  res.send("req handler 2 is executed");
  console.log("req handler 2");
  next();
})

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
