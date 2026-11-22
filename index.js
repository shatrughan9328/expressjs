
const express=require('express');                                                                         
const app=express(); // server crreated
app.use('/api/user',require('./routes/userRoute'));
app.use('/api/student',require('./routes/studentRoute'));
app.listen(5000,()=>{
    console.log("server is running on http://localhost:5000");
})