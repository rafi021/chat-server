import mongoose from "mongoose";
import config from "../config/config";

export const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB..." + config.mongoUri);
        await mongoose.connect(config.mongoUri!);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed");
        console.error(error);
        process.exit(1);
    }
}