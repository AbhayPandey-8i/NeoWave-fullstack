import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully !!");
  } catch (error) {
    console.log("Database connection error:", error);
  }
};

export default databaseConnection;