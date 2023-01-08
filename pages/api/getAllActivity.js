import dbConnect from "../../utils/dbConnection";

export default async function (req, res) {
    try {
        const { db } = await dbConnect()
        let activity = await db.collection("activityPoints").find({
            proctor: "Jack"
        }).toArray();
        // console.log(activity);
        return res.json(activity)
    } catch (e) {
        console.log(e);
    }
    res.json({ activity: "sdkj, " })
}