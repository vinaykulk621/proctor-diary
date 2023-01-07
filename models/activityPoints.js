import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
    name: String,
    usn: String,
    activityName: String,
    location: String,
    date: Date,
    duration: Number,
    activitypoint: Number,
    status: String,
})
module.exports = mongoose.models.activityPoint || mongoose.model('activityPoint', ActivitySchema)