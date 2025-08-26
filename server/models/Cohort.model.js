const mongoose = require('mongoose');

const cohortSchema = new mongoose.Schema(
  {
    cohortSlug: { type: String, trim: true },
    cohortName: { type: String, required: true, trim: true },
    program: { type: String, trim: true },
    format: { type: String, trim: true },
    campus: { type: String, trim: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
    inProgress: { type: Boolean, default: false },
    programManager: { type: String, trim: true },
    leadTeacher: { type: String, trim: true },
    totalHours: { type: Number, default: 360 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cohort', cohortSchema);
