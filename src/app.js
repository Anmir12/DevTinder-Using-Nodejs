const express = require("express");

const app = express();

const PORT = 7777;

app.get("/user", (req, res) => {
  res.send("hello from homepage");
});
app.post("/user", (req, res) => {
  res.send({
    name:"anmir",
    id:786
  });
  console.log("user add succesfully")
});
app.put("/user", (req, res) => {
  res.send("user updated succesfully");
  console.log("user updated succesfully")

});

app.delete("/user",(req,res)=>{
  res.send("user deleted succesfully")
  console.log("user deleted succesfully")

})
app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
