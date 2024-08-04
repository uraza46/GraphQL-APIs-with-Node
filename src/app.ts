import cors from "cors";
import express from "express";
import router from "./routes";
import { ALLOWED_ORIGINS } from "./utils/constants";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: ALLOWED_ORIGINS }));

app.use("/api", router);

app.get("/", (req, res) => {
  return res.send({
    message: "GraphQL Node.js server is up at " + process.env.NODE_ENV + "!",
  });
});

export default app;
