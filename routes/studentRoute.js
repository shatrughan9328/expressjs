const express=require('express');
const routes=express.Router();

routes.get('/all',(req,res)=>{
    res.json("Student route api is called");
})

module.exports=routes;

