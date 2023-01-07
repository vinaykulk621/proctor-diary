import dbConnect from "../../utils/dbConnection";

export default async function (req, res) {
    const { usn, name, activityName, location, date, duration } = req.body;
    console.log(usn, name, activityName, location, date, duration);
    const { db } = await dbConnect()
    try {
        console.log("ho raha hai");
        const data = {
            usn: usn,
            name: name,
            activityName: activityName,
            location: location,
            date: date,
            duration: duration,
            activityPoints: 1,
            status: "pending",
        }
        const res = await db.collection("activityPoints").insertOne(data)
        console.log(res);
        console.log("hogaya");
        res.json({ message: "success" })
    } catch (e) {
        res.status(405).json({ message: "data Not Found" })
    }
}