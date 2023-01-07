import dbConnect from "../../utils/dbConnection";
import activityPoint from '../../models/activityPoints'

dbConnect()
export default async function (req, res) {
    const { usn, name, activity, location, date, hours } = req.body;
    try {
        console.log("ho raha hai");
        const data = {
            usn: usn,
            name: name,
            activityName: activity,
            location: location,
            date: date,
            duration: hours,
            activityPoints: 1,
            status: "pending",
        }
        const res = await activityPoint.insertOne(data)
        console.log(res);
        console.log("hogaya");
        res.json({ message: "success" })
    } catch (e) {
        res.status(405).json({ message: "data Not Found" })
    }
}