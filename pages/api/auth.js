import { serialize } from "cookie"

export default async function (req, res) {

    const { token } = req.body
    console.log("recieved token" + token);

    console.log("setting up token");
    res.setHeader("Set-Cookie", serialize("loggedIn", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
    }));
    console.log("hogaya cookie");

    res.send({ err: false })
    return res.json({ data: email });
}
