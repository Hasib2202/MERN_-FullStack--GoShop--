import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGODB_URI){
    throw new Error('Please set MONGODB_URI in the environment variable');
}

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI) 
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('MongoDB connection failed');
        process.exit(1);
    }
}

export default connectDB;