const mongoose = require('../config/database');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    imagePath:{
        type:String,
        required: true
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    }
});

const productModel = mongoose.model('product',productSchema);

module.exports = productModel;