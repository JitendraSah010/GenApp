import UserModel from "../model/userModel.js";
import bcrypt from 'bcryptjs';

const home = async (req,res)=>{
    try {
        res.status(200).send("This is the home page");
    } catch (error) {
        res.status(400).send( { message: "Error in accessing the home page"} );
    }

}

// ===================================Registration====================================
const register = async (req,res)=>{
    try {
        const { userName, name, email, phone, password } = req.body;
        
        const userExist = await UserModel.findOne( {$or: [{ email: email }, { userName: userName }]});
        if(userExist){
            return res.status(400).json( { message: "user already exist" } );
        }

        const registetrUser = await UserModel.create({userName, name, email, phone, password });
        res.status(201).json({
            message: "user created successfully",
            token: await registetrUser.generateToken(),
            userId: registetrUser._id.toString()
        });

    } catch (error) {
        res.status(400).send( { message: "User registration Failed.Internal Server Error"} );
    }
}

// ========================================login=====================================
const login = async (req,res, next)=>{
    try {
        const {userName, email, password } = req.body;

        const userExists = await UserModel.findOne( {$and: [{ email: email }, { userName: userName }]} );
        
        if(!userExists){
            return res.status(401).json( {message: "User does not exist. Register Now"} );
        }
        // const loginUser = await bcrypt.compare( password, userExists.password);
        const loginUser = await userExists.comparePassword(password);
        if(loginUser){
            res.status(200).json( {
                message:"login successful",
                token: await userExists.generateToken(),
                userId: userExists._id.toString()
            } )
        }else{
            const status = 400;
            const message = " Invalid username or email or password";
            const err = { status, message };
            next(err);

            // res.status(400).json({message: "Invalid username, email, password"});
        }
        
    } catch (error) {
        const status = 400;
        const message = "Login Failed. Internal server error";
        const err = { status, message };
        next(err);
        // res.status(400).json({mesage:"Login Failed. Internal server error"});
    }

}

// ===============================verify user(protected route from backend)===============================
const verifyUser = (req, res)=>{
    try {
        const userDetails = req.user;
        res.status(200).json({userDetails});

    } catch (error) {

        res.status(401).send({message:"Internal server error in user verification"})
    }
}





export {home, register, login, verifyUser};