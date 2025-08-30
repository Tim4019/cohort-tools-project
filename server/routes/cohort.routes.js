const express = require('express');
const router = express.Router();
const Cohort = require('../models/Cohort.model');

// CREATE cohort
router.post('/', async (req, res) => {
  try {
    const newCohort = new Cohort(req.body);
    await newCohort.save();
    return res.status(201).json(newCohort); 
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// READ all cohorts
router.get('/', async (req, res) => {
  try {
    const cohorts = await Cohort.find();
    return res.status(200).json(cohorts); 
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Read coh by ID
router.get('/:cohortId', async (req, res) => {
  try {
    const cohort = await Cohort.findById(req.params.cohortId);
    if (!cohort) return res.status(404).json({ error: 'Cohort not found' });
    return res.status(200).json(cohort); 
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Upd cohort
router.put('/:cohortId', async (req, res) => {
  try {
    const cohort = await Cohort.findByIdAndUpdate(
      req.params.cohortId,
      req.body,
      { new: true, runValidators: true }
    );
    if (!cohort) return res.status(404).json({ error: 'Cohort not found' });
    return res.status(200).json(cohort); 
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Del cohort
router.delete('/:cohortId', async (req, res) => {
  try {
    const cohort = await Cohort.findByIdAndDelete(req.params.cohortId);
    if (!cohort) return res.status(404).json({ error: 'Cohort not found' });
    return res.status(200).json({ message: 'Deleted successfully' }); 
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
