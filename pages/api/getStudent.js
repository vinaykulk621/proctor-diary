import dbConnect from "../../utils/dbConnection";
import student from '../../models/student'
import jwt from 'jsonwebtoken';

dbConnect()
export default async function (req, res) {
    try {
        const { cookies } = req;
        const token = cookies.ourSiteJwt;
        if (!token) {
            return res.json({ message: "Invalid token!" });
        }
        const { email } = jwt.decode(token)
        const user = await student.find({ email })
        if (user) {
            const student = user[0]
            return res.json({ student })
        }
    } catch (e) {
        console.log(e);
    }
}