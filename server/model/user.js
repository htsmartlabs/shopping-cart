const mongoose = require('../config/database');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },phone:{
        type:String,
        required: true,
    },
    admin:{
        type:Boolean,
        required:true
    },
    address:{
        street:{ type: String },
        houseNo:{ type:String },
        city:{ type:String },
        province:{ type:String },
        country:{ type:String },
        postalCode:{ type:String }
    }
});

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;