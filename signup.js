//signup code
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const database = module.exports = () =>{
    const connnectionParams = {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }
    try {
        mongoose.connect('mongodb+srv://mongodb:45lNtien0EKpVB3D@cluster0.etnatcj.mongodb.net/sample_airbnb?retryWrites=true&w=majority')
        console.log("connected");
    } catch (error) {
        console.log("error",error);
    }
}
database();

app.listen(8083,()=>{
    console.log("running on 8083")
})