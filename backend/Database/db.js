import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/auth-app`)
        console.log('DB Connected');

    } catch (error) {
        console.log('DB connection error', error);
        
    }
}

export default connectDB;