const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try{
        if(req.headers.autharization){
            const token = req.headers.autharization.split(" ")[1];
            const decode = jwt.verify(token,'tapas');    
            if(decode){
                next();
            }else{
                return res.json({status:false,message:'Auth failed'});    
            }    
        }else{
            return res.json({status:false,message:'Auth failed'});    
        }
    }catch(error){
        console.log(error);
        return res.json({status:false,message:'Auth failed'});
    }
}