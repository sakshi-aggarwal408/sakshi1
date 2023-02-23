const express=require('express');
const app1=express();
const bodyparser=require('body-parser')
const routepath=require('./route'); 
const mongoose=require('mongoose');
const cors=require('cors');
const url=('mongodb://localhost:27017/frontend');

mongoose.connect(url).then((res)=>{
    if(res)
    {
        try{
            console.log("database connected")
        }
        catch(err){
            console.log(err)
        }
    }
})
app1.use(cors());

 app1.use(bodyparser.urlencoded({extended:false}))
 app1.use(bodyparser.json())
app1.use('',routepath);
const port=process.env.express||5000;
app1.listen(port,()=>{
    try{
        console.log("server created",port)
    }
    catch(err){
    console.log(err)
    }
})