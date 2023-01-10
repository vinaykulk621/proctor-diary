import dbConnect from "../../utils/dbConnection";

export default async function (req, res) {
    const client = await dbConnect()
    const db = client.db()
    try {
        const student = await db.collection("students").findOne({
            email: req.body.email
        })
        if (student) {
            // console.log("found someone");
            client.close()
            res.status(200).json(student)
        }
    } catch (e) {
        console.log(e);
        return { message: "Something went wrong" }
    }
    return { message: "error" }
}