const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String ,  required: true, trim: true },  
    email: { type: String, unique: true ,required: true, trim: true }, 
    phone: { type: String },       
    linkedinUrl: { type: String, default: "" },
    languages: { type: [String] }, 
    program: { type: String , trim: true },      
    background: { type: String, default: "" }, 
    image: { type: String, default: "https://i.imgur.com/r8bo8u7.png"}, 
    cohort: { type: mongoose.Schema.Types.ObjectId, ref: 'Cohort' }, 
    projects: { type: [String] },
});

module.exports = mongoose.model('Student', studentSchema);