import express from "express";
import {
  registerDoctor,
  loginDoctor,
} from "../controllers/doctor.controller.js";

const doctorRoutes = express.Router();

doctorRoutes.post("/register", registerDoctor);
doctorRoutes.post("/login", loginDoctor);

export default doctorRoutes;
