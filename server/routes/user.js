//Useing the system libraries
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../model/user');

//get all products
router.get('/',(req,res,next)=>{
    User.find()
    .exec()
    .then((data)=>{
        res.json(data);
    })
    .catch(next);
});

//add a product
router.post('/',(req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then((data)=>{
        if(data.length >= 1){
            res.json({status:false,msg: "email already in use"});
        }else{
            bcrypt.genSalt(10,(err,salt)=>{
                if(err){
                    res.json({status:false,msg: "Error try again"});
                }else{
                    bcrypt.hash(req.body.password,salt,(err,hashPassword)=>{
                        if(err){
                            res.json({status:false,msg: "Error try again"});
                        }else{
                            const user = new User({
                                name: req.body.name,
                                email: req.body.email,
                                password: hashPassword,
                                phone: req.body.phone,
                                address:{
                                    street:req.body.address.street,
                                    houseNo:req.body.address.houseNo,
                                    city:req.body.address.city,
                                    province:req.body.address.province,
                                    country:req.body.address.country,
                                    postalCode:req.body.address.postalCode
                                } 
                            }); 
                            user.save()
                            .then((data)=>{
                                res.json({status:true,message:'User added successfully'});
                            })
                            .catch(next);                
                        }
                    });    
                }
            });
        }
    });
});

module.exports = router;
