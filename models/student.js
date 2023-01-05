import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    usn: String,
    email: String,
    contact: String,
    bloodGroup: String,
    dob: String,
    admissionType: String,
    localAddress: String,
    permanentAddress: String,
    personalEmail: String,
    semester: String,
    department: String,
    section: String
})
module.exports = mongoose.models.Students || mongoose.model('Students', studentSchema)