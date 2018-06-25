//Useing the system libraries
const express = require('express');
const router = express.Router();
const objId = require('mongoose').Types.ObjectId;
const guard = require('../config/guard');

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

//get product based on id
router.get('/:id',(req,res,next)=>{
    if(!objId.isValid(req.params.id))
    return res.json({status:false,message:'Error invalid product id'});
    Product.findById(req.params.id)
    .exec()
    .then((data)=>{
        res.json(data);
    })
    .catch(next);
});

//add a product
router.post('/',guard,(req,res,next)=>{
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


//update the product based on id
router.put('/:id',guard,(req,res,next)=>{
    if(!objId.isValid(req.params.id))
        return res.json({status:false,message:'Error invalid product id'});
    const product = {
        name:req.body.name,
        description:req.body.description,
        imagePath:req.body.imagePath,
        price:req.body.price,
        quantity:req.body.quantity
    }
    Product.findByIdAndUpdate(req.params.id,product,{new: true})
    .exec()
    .then((data)=>{
        res.json({status:true,message:'Product updated successfully'});
    })
    .catch(next);
});

//delete the product based on id
router.delete('/:id',guard,(req,res,next)=>{
    if(!objId.isValid(req.params.id))
        return res.json({status:false,message:'Error invalid product id'});
    Product.findByIdAndRemove(req.params.id)
    .exec()
    .then((data)=>{
        res.status(201).json({status:true,message:'Product deleted successfully'});
    })
    .catch(next);
});

module.exports = router;
