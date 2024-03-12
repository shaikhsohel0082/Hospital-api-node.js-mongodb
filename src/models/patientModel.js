import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
