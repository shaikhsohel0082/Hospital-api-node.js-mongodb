import mongoose from "mongoose";
import bcrypt from "bcrypt";

const doctorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

doctorSchema.pre("save", async function (next) {
  const doctor = this;
  if (!doctor.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(doctor.password, salt);
  doctor.password = hash;

  next();
});

doctorSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
