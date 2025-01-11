import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
    
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://menganipavan143:pavan@assignment.jkw3z.mongodb.net/?retryWrites=true&w=majority&appName=Assignment")
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}




export default connectDB