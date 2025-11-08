import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: String,
  department: String,
  email: String,
  designation: String,
  image: String
});

export default mongoose.model("Faculty", facultySchema);
