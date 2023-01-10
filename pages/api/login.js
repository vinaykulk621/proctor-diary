import { serialize } from "cookie";
import jwt from "jsonwebtoken";
import dbConnect from "../../utils/dbConnection";


export default async function (req, res) {
    const client = await dbConnect()
    const db = client.db()
    // console.log(req.body.email);
    try {
        console.log(req.body.email, "in API");
        const user = await db.collection("users").findOne({
            email: req.body.email
        })
        if (user) {
            console.log(user);
            console.log("userFound");
            console.log("token created");
            const token = jwt.sign(
                {
                    email: req.body.email,
                    user: "student"
                },
                process.env.SECRET
            )
            const serialised = serialize("ourSiteJwt", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 30,
                path: "/",
            });

            res.setHeader("Set-Cookie", serialised);
            res.redirect("/profile")
            res.send(true)
            // return res.status(200).send({
            //     email: email,
            //     user: "student",
            //     acccessToken: token
            // })
            // console.log("fuck");
        } else {
            return null
        }
    } catch (e) {
        return null
    }
}
