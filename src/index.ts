import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await app.listen(PORT);
    console.log(`🚀  server running at port: ${PORT}`);
  } catch {
    console.log("Not able to run server");
  }
};

start();
