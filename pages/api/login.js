import jwt from "jsonwebtoken";
import dbConnect from "../../utils/dbConnection";


export default async function (req, res) {
    const { db } = await dbConnect()
    let { email, password } = req.body;
    console.log({ email, password });
    try {
        const user = await db.collection("users").find({
            $and: [
                {
                    email: req.body.email
                },
                {
                    password: req.body.password
                },
            ]
        })
        if (user) {
            console.log("userFound");
            console.log("token created");
            res.json({
                email: email,
                user: "student",
            })
            console.log("fuck");
        } else {
            return null
        }
    } catch (e) {
        return null
    }
}
