const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',(err)=>{
    !err ? console.log('Mongodb connected') : console.log(err);
});

module.exports = mongoose;