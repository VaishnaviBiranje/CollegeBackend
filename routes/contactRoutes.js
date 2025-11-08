import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error saving message" });
  }
});

export default router;
