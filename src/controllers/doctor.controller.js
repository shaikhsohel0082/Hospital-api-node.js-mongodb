import Doctor from "../models/doctorModel.js";
import jwt from "jsonwebtoken";

const registerDoctor = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingDoctor = await Doctor.findOne({ username });

    if (existingDoctor) {
      return res
        .status(400)
        .json({ message: "Doctor already exists with this username" });
    }

    const newDoctor = new Doctor({ username, password });
    await newDoctor.save();

    res.status(201).json({ message: "Doctor registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const loginDoctor = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = await Doctor.findOne({ username });

    if (!doctor || !doctor.comparePassword(password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ doctorId: doctor._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { registerDoctor, loginDoctor };
