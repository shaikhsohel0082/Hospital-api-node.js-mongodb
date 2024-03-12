import express from "express";
import {
  createReport,
  getAllReports,
  getReportsByStatus,
} from "../controllers/report.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const reportRoutes = express.Router();

// Create a new report
reportRoutes.post("/:id/create_report", authMiddleware, createReport);

// List all reports of a patient (oldest to latest)
reportRoutes.get("/:id/all_reports", authMiddleware, getAllReports);

// List all reports of all patients filtered by status
reportRoutes.get("/:status", authMiddleware, getReportsByStatus);

export default reportRoutes;
