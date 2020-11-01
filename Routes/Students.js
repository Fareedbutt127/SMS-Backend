const express = require ('express');
const Students = require('../models/Students');
const router = express.Router();
const model= require('../models/Students');

router.get('/', async(req, res) => {
  try{
    const students = await model.find();
    res.json(students);

  }
  catch(err)
  {
    res.json({message:err});
  }
    
  });

 
    router.post('/', (req,res)=> {
      console.log(req.body);
    const Students=new model({
    Name: req.body.Name,
    Gender: req.body.Gender,
    DOB: req.body.DOB,
    Email: req.body.Email,
    ContactNo: req.body.ContactNo
    
      });
      Students.save()
        .then (data =>{
          res.json(data);
        })
        .catch(err=>
         {
           res.json({message: err})
          });         

  });

   //Delete Post

   router.delete('/:studentId', async(req,res) =>
   {
 console.log('test');
     try{
       const removedStudents=await model.remove({_id: req.params.studentId});
       res.json(removedStudents);
     }
     catch (err)
     {
       res.json({message:err});
     }
 });

 //Update a post 

 router.patch('/:studentId', async(req,res) =>
 {
console.log('test');
   try{
     const updatedStudents=await model.updateOne({_id: req.params.studentId},
      {$set:{
        Name: req.body.Name,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        Email: req.body.Email,
        ContactNo: req.body.ContactNo
        
          }});
     res.json(updatedStudents);
   }
   catch (err)
   {  
     res.json({message:err});
   }
});



   module.exports = router;
  