
const mongoose= require('mongoose');

const DepartmentsSchema = mongoose.Schema({

    DepartmentName:
    {
    type: String,
    required:true
    }

});

module.exports= mongoose.model('departments',DepartmentsSchema) ;


