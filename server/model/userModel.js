import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema( {
    userName : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : Number,
        required : true,
    },
    password : {
        type: String,
        required: true
    },
    isAdmin : {
        type: Boolean,
        default : false
    }

} )

// hash password before storing into db.
userSchema.pre("save", async function(next){
    const data = this;
    if(!data.isModified("password") ){
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash( data.password, saltRound );
        data.password = hasedPassword;
    } catch (error) {
        console.log(error);
    }
} )

// generate JWT token
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign(
            {
                userId : this._id.toString(),
                email: this.email,
                userName: this.userName,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d"
            }
        )
        
    } catch (error) {
        console.error(error);
    }
}

// compare password
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}

const UserModel = new mongoose.model ( "user", userSchema );

export default UserModel;
