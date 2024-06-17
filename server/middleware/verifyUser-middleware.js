import jwt from 'jsonwebtoken';
import UserModel from '../model/userModel.js';

const verifyUserMiddleware = async(req,res, next)=>{
    const token = req.header("Authorization");
    const jwtToken = token.replace("Bearer", "").trim();

    if(!token){
        return res.status(401).json({message:"Unauthorised HTTP, token not provided"});
    }

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const userData = await UserModel.findOne({$and: [{email : isVerified.email}, {userName : isVerified.userName }] } ).select({password:0})
        req.user = userData;
        req.token = jwtToken;
        req.userId = userData._id;

        next();
        
    } catch (error) {
        return res.status(401).json({message:"Unauthorised user, invalid token"});
    }
}

export default verifyUserMiddleware;