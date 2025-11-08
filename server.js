import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schema + Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// API endpoint to receive form data
app.post("/api/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving message" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
