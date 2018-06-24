//Useing the system libraries
const express = require('express');
const router = express.Router();

const Product = require('../model/product');

//get all products
router.get('/',(req,res,next)=>{
    Product.find()
    .exec()
    .then((data)=>{
        res.json(data);
    })
    .catch(next);
});

//add a product
router.post('/',(req,res,next)=>{
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        imagePath: req.body.imagePath,
        price: req.body.price,
        quantity: req.body.quantity
    });
    product.save()
    .then((data)=>{
        res.json({status:true,message:'Product added successfully'});
    })
    .catch(next);
});

module.exports = router;
