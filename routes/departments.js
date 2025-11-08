import express from "express";
import Department from "../models/Department.js";
const router = express.Router();

// Get all departments
router.get("/", async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new department
router.post("/", async (req, res) => {
  const department = new Department(req.body);
  try {
    const savedDept = await department.save();
    res.status(201).json(savedDept);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
