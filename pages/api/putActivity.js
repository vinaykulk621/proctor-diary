import dbConnect from "../../utils/dbConnection";
import jwt from "jsonwebtoken"

export default async function (req, res) {
    const { ...props } = req.body;
    console.log(props);
    const { db } = await dbConnect()
    const { cookies } = req
    const token = cookies.ourSiteJwt
    const { email } = jwt.decode(token)
    try {
        console.log("ho raha hai");
        const data = {
            usn: usn,
            name: studentName,
            email,
            proctor: "Jack",
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
        return res.json({ message: "success" })
    } catch (e) {
        res.status(405).json({ message: "data Not Found" })
    }
}