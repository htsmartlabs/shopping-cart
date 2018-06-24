//Useing the system libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

//Adding the sub routes
const product = require('./routes/product');
const user = require('./routes/user');

//creating an express application
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

//base route
app.get('/',(req,res,next)=>{
    res.json({msg:'Welcome to my shop'});
})

//sending all products to product route
app.use('/product',product);
app.use('/user',user);

//error handling
app.use((error,req,res,next)=>{
    res.json({status:false,message:"error"});
});

app.listen(3000,()=>{
    console.log('Server has started on port 3000');
});