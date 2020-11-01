var express = require('express');
var mongoose = require('mongoose');
const bodyparser= require('body-parser');
const cors= require('cors');
//('dotenv/config');
var app = express();

app.use(cors());
app.use(bodyparser.json());
//Import Routes
const studentsRoute = require('./Routes/Students');
const departmentRoute = require('./Routes/Departments');

app.use('/Students', studentsRoute);
app.use('/Departments', departmentRoute);
//Routes
app.get('/', (req, res) => {
  res.send('check!');
});

//Connect to db
mongoose.connect('mongodb://127.0.0.1:27017/SMS',()=>{console.log("Connected to db")});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});