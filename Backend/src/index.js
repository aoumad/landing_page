const express=require("express")
const app=express() // it will start express.js
const path=require("path")
const port = 4000;

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})