import express from "express";
import doctorRoutes from "./doctorRouter.js";
import patientRoutes from "./patientRouter.js";
import reportRoutes from "./reportRouter.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const mainRouter = express.Router();

mainRouter.use("/doctors", doctorRoutes);
mainRouter.use("/patients", authMiddleware, patientRoutes);
mainRouter.use("/reports", authMiddleware, reportRoutes);

export default mainRouter;
