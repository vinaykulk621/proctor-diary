import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import dbConnect from "../../utils/dbConnection";


export default async function (req, res) {
    const secret = process.env.SECRET;
    const { db } = await dbConnect()
    const { email, password } = req.body;
    console.log({ email, password });
    try {
        const user = await db.collection("users").find({
            email: email,
        })
        if (!user) {
            return res.json({ err: true })
        } else {
            console.log("found person");
            const token = jwt.sign(
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
            console.log("hogaya");
            console.log(serialised);
            res.setHeader("Set-Cookie", serialised);
            return res.json({ err: false })
            console.log("aiyla");
        }
    } catch (e) {
        console.log(e);
        res.json({ "message": "something bad happened" })
        console.log("nahi yaar");
    }
    console.log("galat baat");
    console.log("bohot galat baat");
}
