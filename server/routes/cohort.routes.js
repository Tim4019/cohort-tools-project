const express = require('express');
const router = express.Router();
const Cohort = require('../models/Cohort.model');


// all cohorts
router.get('/', async (req, res) => {
  try {
    const cohorts = await Cohort.find();
    res.json(cohorts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Create cohort
router.post('/', async (req, res) => {
  try {
    const newCohort = new Cohort(req.body);
    await newCohort.save();
    res.json(newCohort);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// cohort by ID 
router.get('/:cohortId', async (req, res) => {
  try {
    const cohort = await Cohort.findById(req.params.cohortId);
    res.json(cohort);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// updt cohort
router.put('/:cohortId', async (req, res) => {
  try {
    const cohort = await Cohort.findByIdAndUpdate(req.params.cohortId, req.body, { new: true });
    res.json(cohort);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete cohort
router.delete('/:cohortId', async (req, res) => {
  try {
    const cohort = await Cohort.findByIdAndDelete(req.params.cohortId);
    res.json(cohort);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;