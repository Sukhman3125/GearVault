import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(config.mongoUri);

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;