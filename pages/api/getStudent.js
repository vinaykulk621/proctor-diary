import dbConnect from "../../utils/dbConnection";
import jwt from 'jsonwebtoken';

export default async function (req, res) {
    const { db } = await dbConnect()
    try {
        const { cookies } = req;
        const token = cookies.ourSiteJwt;
        if (!token) {
            return res.json({ message: "Invalid token!" });
        }
        const { email } = jwt.decode(token)
        const user = await db.collection("students").find({ email })
        if (user) {
            const student = user[0]
            return res.json({ student })
        }
    } catch (e) {
        console.log(e);
    }
}