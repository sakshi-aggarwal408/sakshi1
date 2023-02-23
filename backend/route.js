const express=require('express');
const Schema=require('./Schema')
//const bcrypt1=require('bcrypt');
const router=express.Router();
// post request
router.post('/post',async(req,res)=>{
    
    let{title,body}=req.body
    try{
         let store=new Schema({title,body});
        // let saltData=await bcrypt1.genSalt(10)
        // store.password=await bcrypt1.hash(store.password,saltData);
        let sav1= await store.save();
        res.status(201).json({
            status:true,
            data:{
                sav1
            }
         })
        }
         catch(err){
             console.log(err)
         }
})




//get request

router.get('/get',async(req,res)=>{
    await Schema.find({},(err,result)=>{
        if(err)
        {
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
    
    
})

//delete api
 router.delete('/del/:id', async(req,res)=>{
        try{
      let id=req.params.id
 
        await Schema.findByIdAndDelete(id)
        res.send('delete data')
        }
        catch(err)
        {
            res.send(err)
        }

    })
//delete all
    router.delete('/del', async(req,res)=>{
        
        await Schema.deleteMany();
        res.send('delete data')

    })

module.exports=router;