import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (req,res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_STRING);
        console.log("database is connected successfully");
    } catch (error) {
        console.log("db connection failed", error);
        res.status(400).json({message: "database connection failed"});
        process.exit(0);
    }
}

export default connectDB;


