const express=require('express');
const routes=express.Router();
// get api

routes.get('/all',(req,res)=>{
    res.json("User route api is called");
});

routes.post('/all',(req,res)=>{
    res.json("User post api is called");
});

routes.put('/all',(req,res)=>{
    res.json("User put api is called");
});

routes.patch('/all',(req,res)=>{
    res.json("User patch api is called");
});

routes.delete('/all',(req,res)=>{
    res.json("User delete api is called");
});

module.exports=routes;
