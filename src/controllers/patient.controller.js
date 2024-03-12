import Patient from "../models/patientModel.js";
import Doctor from "../models/doctorModel.js";

const registerPatient = async (req, res) => {
  try {
    const { phoneNumber, name } = req.body;
    const existingPatient = await Patient.findOne({ phoneNumber });

    if (existingPatient) {
      return res.json(existingPatient); // Return existing patient info
    }

    const newPatient = new Patient({ phoneNumber, name });
    await newPatient.save();

    res.status(201).json(newPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default registerPatient ;
