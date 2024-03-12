import express from "express";
import registerPatient from "../controllers/patient.controller.js";

const patientRoutes = express.Router();

patientRoutes.post("/register", registerPatient);

export default patientRoutes;
