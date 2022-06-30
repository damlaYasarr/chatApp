const jwt=require('jsonwebtoken')
//burası jwt kontrol verify edilir
const jwttoken=(req,res, next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1]
        const decodedToken=jwt.verify(token,'secretKey')
        decodedToken=req.body.authorization
        next();
    }catch(error){
        if (error.name === "TokenExpiredError") {
             res.status(401).json({
                message: 'token expired',
                status: -1
            })
        } else if (error.name === "JsonWebTokenError") {
             res.status(401).json({
                message: 'unvalid token',
                status: -1
            })
        } else {
             res.status(401).json({
                message: 'unstatus',
                status: -1
            })
        }
    }
}
module.exports={jwttoken}
