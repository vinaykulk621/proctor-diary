import dbConnect from "../../utils/dbConnection";
import jwt from 'jsonwebtoken';

export default async function (req, res) {
    try {
        const { db } = await dbConnect()
        const { cookies } = req;
        const token = cookies.loggedIn;
        const { email } = jwt.decode(token)
        console.log(email);
        const user = await db.collection("students").find({
            email: email
        }).toArray()
        const student = user[0]
        return res.json({ student })
    } catch (e) {
        console.log(e);
    }
    res.json({ "mess": "dail" })
}

