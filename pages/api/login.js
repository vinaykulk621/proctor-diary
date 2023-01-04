import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import dbConnect from "../../utils/dbConnection";
import User from '../../models/user'
import { useRouter } from "next/router";

const secret = process.env.SECRET;

dbConnect()
export default async function handler(req, res) {
    const { email, password } = req.body
    const user = await User.find({ email, password })
    if (!user) {
        return res.json({ status: 'Not able to find the user' })
    }
    else {
        const token = jwt.sign(
            {
                email
            },
            secret
        );

        const serialised = serialize("OursiteJWT", token, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
        });
        res.setHeader("Set-Cookie", serialised);
        const router = useRouter()
        router.push("/profile")
    }
}
