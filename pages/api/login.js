import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import dbConnect from "../../utils/dbConnection";


export default async function (req, res) {
    const secret = process.env.SECRET;
    const { db } = await dbConnect()
    const { email, password } = req.body;
    console.log({ email, password });
    try {
        const user = await db.collection("users").find({
            $and: [
                {
                    email: email,
                },
                {
                    password: password
                }
            ]
        })
        if (!user) {
            return res.json({ status: 'Not able to find the user' })
        } else {
            console.log("found person");
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
            console.log("hogaya");
            res.setHeader("Set-Cookie", serialised);
            console.log("aiyla");
        }
    } catch (e) {
        console.log(e);
        console.log("nahi yaar");
    }
    console.log("galat baat");
    res.json({ "message": "something bad happened" })
    console.log("bohot galat baat");
}
