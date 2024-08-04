import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    try {
      await mongoose.connect(process.env.MONGODB_URI || "");
      console.log("Database connected succesfully.");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  } catch (error) {
    console.error("Error connecting to database--->>>", error);
  }
};

export const disconnectFromDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log("Closed database connection");
  } catch (error) {
    console.error("Error connecting to database--->>>", error);
  }
};
