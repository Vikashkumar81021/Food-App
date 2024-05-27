import Jwt, { decode } from "jsonwebtoken";

export const authMiddleware=async(req,res,next)=>{
  try {
    const token=req.headers["authrozation"].split(" ")[1]
    Jwt.verify(token,process.env.JWT_SECRETKEY,(err,decodeURI)=>{
        if(err){
            return res.status(401).send({
                success:false,
                message:"unAuthorize User"
            })  
        }else{
            req.body.id=decode.id
            next()
        }
    })
    
  } catch (error) {
     res.status(500).send({
        success:false,
        message:"Error In auth API",
        error
     })
  }
}