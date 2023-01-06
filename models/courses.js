import mongoose from "mongoose";

const CoursesSchema = new mongoose.Schema({
    semester: String,
    department: String,
    subjects: [
        {
            courseCode: String,
            courseName: String,
            credits: Number,
            attempt: Number,
            type: String,
            electedCourse: Boolean
        },
    ],
})
module.exports = mongoose.models.course || mongoose.model('course', CoursesSchema)