import dbConnect from "../../utils/dbConnection";
import course from '../../models/courses'

dbConnect()
export default async function (req, res) {
    try {
        const courses = await course.find({})
        if (courses) {
            return res.json(courses)
        }
    } catch (e) {
        console.log(e);
    }
}