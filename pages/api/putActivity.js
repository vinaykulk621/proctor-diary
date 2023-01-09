import dbConnect from "../../utils/dbConnection";
import jwt from "jsonwebtoken"

export default async function (req, res) {
    const { duration } = req.body;
    const data = req.body
    const { cookies } = req
    const { db } = await dbConnect()
    const token = cookies.loggedIn
    const { email } = jwt.verify(token, process.env.SECRET)
    try {
        console.log("ho raha hai");
        const res = await db.collection("activityPoints").insertOne({
            ...data,
            email,
            proctor: "Jack",
            status: "pending",
            points: Math.floor(duration / 4),
        })
        console.log(res);
        console.log("hogaya");
        return res.json({ message: "success" })
    } catch (e) {
        res.status(405).json({ message: "data Not Found" })
    }
}