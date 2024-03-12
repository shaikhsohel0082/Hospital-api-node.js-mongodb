import Patient from "../models/patientModel.js";
import Doctor from "../models/doctorModel.js";
import Report from "../models/reportModel.js";

const createReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const doctorId = req.user.doctorId;
    console.log(doctorId);

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const newReport = new Report({ doctor, patient, status, date: new Date() });
    await newReport.save();

    res.status(201).json(newReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getAllReports = async (req, res) => {
  try {
    const { id } = req.params;
    const reports = await Report.find({ patient: id }).sort({ date: 1 }); // Sorting by date in ascending order

    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// List all reports of all patients filtered by status
const getReportsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const reports = await Report.find({ status }).sort({ date: 1 }); // Sorting by date in ascending order

    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createReport, getAllReports, getReportsByStatus };
