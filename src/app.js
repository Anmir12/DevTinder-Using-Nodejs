const express = require("express");
const { adminAuth,userAuth } = require("./middlewears/auth");

const app = express();

const PORT = 7777;

app.use("/admin",adminAuth);

app.get("/user",userAuth,(req,res,next)=>{
 res.send("sending user data")
})
app.get("/admin/getAllData", (req, res, next) => {
  res.send("sending all admin data");
});

app.delete("/admin/deleteAllData", (req, res, next) => {
  res.send("deleting all admin data");
});



app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
