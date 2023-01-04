import dbConnect from "../../../utils/dbConnection";
import Students from '../../../models/student'
import jwt from 'jsonwebtoken';

dbConnect()
export default async function (req, res) {
    try {
        const { cookies } = req;
        const token = cookies.OursiteJWT;
        if (!token) {
            return res.json({ message: "Invalid token!" });
        }
        const { email } = jwt.decode(token)
        const user = await Students.find({ email })
        if (user) {
            const studentLocal = user[0]['localAddress']
            return res.json({ studentLocal })
        }
    } catch (e) {
        console.log(e);
    }
    return res.json({ "mess": "dail" })
}