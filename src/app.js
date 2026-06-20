const express = require("express")

const app = express();

const PORT = 7777;

app.get("/",(req,res)=>{
 res.send("hello from homepage")
})

app.get("/hello",(req,res)=>{
  res.send("hello hello hello")
})
app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`)
});