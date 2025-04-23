import express from "express";
import bodyParser from "body-parser";
import schoolRoutes from "./routes/schoolRoutes.js";
import { ApiError } from "./utils/ApiError.js";

const app = express();

app.use(bodyParser.json());

app.use("/api", schoolRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ message: err.message, errors: err.errors });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default app;
