import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import dbConnect from "../../utils/dbConnection";


export default async function (req, res) {
    const secret = process.env.SECRET;
    const { db } = await dbConnect()
    const { usn, email, password } = req.body;
    console.log({ usn, email, password });
    try {
        const user = await db.collection("users").find({
            $and: [
                {
                    email:
                    {
                        $eq: email
                    },
                },
                {
                    password:
                    {
                        $eq: password
                    }
                },
                {
                    usn:
                    {
                        $eq: usn
                    }
                }
            ]
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
            console.log("hogaya token" + token);
            res.setHeader("Set-Cookie", serialize("ourSiteJwt", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 30,
                path: "/",
            }));
            console.log("hogaya cookie");
            res.send({ err: false })
            console.log("aiyla");
        }
    } catch (e) {
        console.log(e);
        res.json({ err: true })
        console.log("nahi yaar");
    }

    return res.json({ err: true })
}
