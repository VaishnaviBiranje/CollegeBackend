import express from "express";
import Faculty from "../models/Faculty.js";

const router = express.Router();

// Get all faculty
router.get("/", async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.json(faculties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get faculty by department
router.get("/department/:deptName", async (req, res) => {
  try {
    const deptName = req.params.deptName;
    const faculties = await Faculty.find({ department: deptName });
    res.json(faculties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new faculty
router.post("/", async (req, res) => {
  const faculty = new Faculty(req.body);
  try {
    const savedFaculty = await faculty.save();
    res.status(201).json(savedFaculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
