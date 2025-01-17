const mongoose = require('mongoose');
const schema = mongoose.schema;

const userScehma = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required: true,
    },
})
const userModel = mongoose.model('users', userScehma);
module.exports = userModel;
