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
            const studentContact = user[0]['contact']
            return res.json({ studentContact })
        }
    } catch (e) {
        console.log(e);
    }
    return res.json({ "mess": "dail" })
}