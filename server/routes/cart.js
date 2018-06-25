//Useing the system libraries
const express = require('express');
const router = express.Router();
const guard = require('../config/guard');

const Cart = require('../model/cart');

//get all bills
router.get('/',(req,res,next)=>{
    Cart.find()
    .exec()
    .then((data)=>{
        res.json(data);
    })
    .catch(next);
});

//add a bill
router.post('/',(req,res,next)=>{
    const cart = new Cart({
        user_id:req.body.user_id,
        product:req.body.product,
        cost:req.body.cost
    });
    cart.save()
    .then((data)=>{
        res.json({ status:true, message:'Bill created successfully' });
    })
    .catch(next);
});

//update the bill based on id
router.put('/:id',(req,res,next)=>{
    if(!objId.isValid(req.params.id))
        return res.json({ status:false, message:'Error invalid product id' });
    const cart = {
        user_id:req.body.user_id,
        product:req.body.product,
        cost:req.body.cost
    }
    Cart.findByIdAndUpdate(req.params.id, product, {new: true})
    .exec()
    .then((data)=>{
        res.json({ status:true, message:'Cart updated successfully' });
    })
    .catch(next);
});

//delete the bill based on id
router.delete('/:id',(req,res,next)=>{
    if(!objId.isValid(req.params.id))
        return res.json({ status:false, message:'Error invalid product id' });

    Cart.findByIdAndRemove(req.params.id)
    .exec()
    .then((data)=>{
        res.json(data);
//        res.json({ status:true, message:'Cart deleted successfully' });
    })
    .catch(next);
});

module.exports = router;
