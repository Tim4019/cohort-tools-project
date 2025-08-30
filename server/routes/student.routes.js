const express = require('express');
const router = express.Router();
const Student = require('../models/Student.model');

// CREATE student
router.post('/', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    return res.status(201).json(newStudent); 
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// READ all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    return res.status(200).json(students); 
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// read students by cohort
router.get('/cohort/:cohortId', async (req, res) => {
  try {
    const students = await Student.find({ cohort: req.params.cohortId });
    return res.status(200).json(students); 
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Read student by ID
router.get('/:studentId', async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);
    if (!student) return res.status(404).json({ error: 'Student not found' }); 
    return res.status(200).json(student);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Updt student
router.put('/:studentId', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.studentId,
      req.body,
      { new: true, runValidators: true }
    );
    if (!student) return res.status(404).json({ error: 'Student not found' }); 
    return res.status(200).json(student); 
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Delt student
router.delete('/:studentId', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.studentId);
    if (!student) return res.status(404).json({ error: 'Student not found' }); 
    return res.status(200).json({ message: 'Deleted successfully' }); 
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
