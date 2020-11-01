const { DYNAMIC_TYPE } = require('@angular/compiler');
const mongoose= require('mongoose');

const StudentsSchema = mongoose.Schema({

    Name: 
    {
        type: String,
        required: true
    },

    Gender:
{
    type: String
}
,

    DOB:
{
    type: String,
    required: true

}
,
    Email:
{
    type: String
    
}
,
    ContactNo:
{
    type: String,
    required: true
}
,
    date:
    {
        type: Date,
        default: Date.now
    }
    
});

module.exports= mongoose.model('students', StudentsSchema);