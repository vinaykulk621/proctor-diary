import dbConnect from "../../utils/dbConnection";

export default async function (req, res) {
    const client = await dbConnect()
    const db = client.db()
    try {
        const proctor = await db.collection("proctors").findOne({
            email: req.body.email
        })
        if (proctor) {
            client.close()
            return res.status(200).json(proctor)
        }
    } catch (e) {
        console.log(e);
        return { message: "Something went wrong" }
    }
    return { message: "error" }
}