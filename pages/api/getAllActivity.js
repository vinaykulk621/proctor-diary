import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import dbConnect from "../../utils/dbConnection";

export default async function (req, res) {
    try {
        const client = await dbConnect()
        const db = client.db()
        
        const token = cookies().get("ouSiteJwt")
        if (!token) {
            return { message: "Invalid  token" }
        }
        const { Email } = jwt.decode(token)
        let activity = await db.collection("activityPoints").find({ email: Email }).toArray();
        return { activity }
    } catch (e) {
        console.log(e);
    }
    return { activity: "sdkj, " }
}