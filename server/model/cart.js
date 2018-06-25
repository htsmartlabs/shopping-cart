const mongoose = require('../config/database');

const cartSchema = new mongoose.Schema({
    user_id:{type:mongoose.Schema.ObjectId},
    product:[{_id:false,product_id:{type:mongoose.Schema.ObjectId},quantity:{type:Number}}],
    cost:{type:Number}
});

const cartModel = mongoose.model('cart',cartSchema);

module.exports = cartModel;
