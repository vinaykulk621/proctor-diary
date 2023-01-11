import dbConnect from "../../utils/dbConnection";

export default async function (req, res) {
    try {
        const client = await dbConnect()
        const db = client.db()
        const { Email } = req.body
        let activity = await db.collection("activityPoints").find({ email: Email }).toArray();
        return { activity }
    } catch (e) {
        console.log(e);
    }
    return { activity: "sdkj, " }
}