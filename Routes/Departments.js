const express = require ('express');
const  model  = require('../models/Departments');

const router = express.Router();

router.get('/', async (req, res) =>
 {
  try{
    const departments = await model.find();
    res.json(departments);

  }
  catch(err)
  {
    res.json({message:err});
  }
  });

router.post('/',(req,res)=> {
console.log(req.body);

const Departments=new model({
DepartmentName:req.body.DepartmentName

});

Departments.save()
        .then (data =>{
          res.json(data);
        })
        .catch(err=>
         {
           res.json({message: err})
          });
        });
        //Specific Department 
        router.get('/:departmentID', async (req,res) => 
        {
          try{
            const findDepartment= await model.findById(req.params.departmentID);
            res.json(findDepartment);
          }
          catch(err)
          {
            err.json({message: err});
          }
        });
        
        //Delete Department 
           
           router.delete('/:departmentId', async(req,res) =>
          {
           console.log('test');
           try{
           const removeddepartment=await model.remove({_id: req.params.departmentId});
           res.json(removeddepartment);
          } 
            catch (err)
          {
            res.json({message:err});
          }


        });

        //Update Department
        router.patch('/:departmentId', async(req,res) =>
 {
console.log('test');
   try{
     const updateddepartment=await model.updateOne({_id: req.params.departmentId},
      {$set: {DepartmentName: req.body.DepartmentName} });
     res.json(updateddepartment);
   }
   catch (err)
   {  
     res.json({message:err});
   }
});

  module.exports = router;
