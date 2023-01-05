import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import dbConnect from "../../utils/dbConnection";
import User from '../../models/user'

const secret = process.env.SECRET;

dbConnect()
export default async function (req, res) {
    const { email, password } = req.body;
    const user = await User.find({ email, password })
    if (!user) {
        return res.json({ status: 'Not able to find the user' })
    } else {
        const token = sign(
            {
                email
            },
            secret
        );

        const serialised = serialize("ourSiteJwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
        });

        res.setHeader("Set-Cookie", serialised);
        res.redirect("/profile")
    }
}
