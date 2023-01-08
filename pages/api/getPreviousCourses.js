import dbConnect from "../../utils/dbConnection";

export default async function (req, res) {
    try {
        const { db } = await dbConnect()
        const courses = await db.collection("courses").find({
            semester: { $not: { $eq: 5 } }
        }, { semester: -1 }).toArray();
        return res.json(courses)
    } catch (e) {
        console.log(e);
    }
}

