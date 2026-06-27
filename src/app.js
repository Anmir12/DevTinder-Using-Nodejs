const express = require("express");

const app = express();

const PORT = 7777;

// app.use("/admin",(req,res,next)=>{

// })

app.get("/admin/getAllData",(req,res,next)=>{
   
  const token = "xyz";
  
  const isAdminAuthorized = token === "xyz"
  console.log("checking admin authorization")
  if(isAdminAuthorized){
    res.send("sending all admin data")
  }

else{
  res.status(401).send("authorization failed");
}
})


app.delete("/admin/deleteAllData",(req,res,next)=>{
 
    const token = "xyz";
  
  const isAdminAuthorized = token === "xyz"
  console.log("checking admin authorization")
  if(isAdminAuthorized){
    res.send("deleting all admin data")
  }

else{
  res.status(401).send("authorization failed");
}

})



app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
