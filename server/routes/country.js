//Useing the system libraries
const express = require('express');
const router = express.Router();
const guard = require('../config/guard');

const Country = require('../model/country');

//get all countries
router.get('/',guard,(req,res,next)=>{
    Country.find()
    .exec()
    .then((data)=>{
        res.json(data);
    })
    .catch(next);
});

//add a Country
router.post('/',guard,(req,res,next)=>{

    const country = new Country({
        country:req.body.country,
        province:req.body.province 
    });
    country.save()
    .then((data)=>{
        res.json({status:true,message:'Country added successfully'});
    })
    .catch(next);
});

module.exports = router;
