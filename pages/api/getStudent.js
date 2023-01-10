import dbConnect from "../../utils/dbConnection";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';


export default async function (req, res) {
    const { db } = await dbConnect()
    try {
        const token = cookies().get("loggedIn");
        if (!token) {
            return { message: "Invalid token!" }
        }
        const { email } = jwt.decode(token)
        console.log(email);
        const user = await db.collection("students").find({
            email: email
        }).toArray()
        if (user) {
            const student = user[0]
            console.log(student);
            return { student }
        }
    } catch (e) {
        console.log(e);
        return { message: "Something went wrong" }
    }
    return { message: "error" }
}