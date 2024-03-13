import express from "express";
import mongoose from "mongoose";
import mainRouter from "./src/routes/mainRouter.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

<<<<<<< HEAD
mongoose
  .connect(MONGODB_URI)
=======
mongoose.connect(MONGODB_URI)
>>>>>>> aad02acbfd6b6644b54b8f5ce6befe3cad51838e
  .then(() => {
    console.log("Connected to MongoDB");
    app.use(express.json());
    app.use("/api", mainRouter);
     app.get("/", (req, res) => {
      res.send("Welcome to Hospital Managment API ");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error.message));
