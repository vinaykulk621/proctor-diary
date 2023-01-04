import jwt from "jsonwebtoken"

export default async function (req, res) {
    const { cookies } = req;

    const token = cookies.OursiteJWT;

    if (!token) {
        return res.json({ message: "Invalid token!" });
    }

    const { email } = jwt.decode(token)
    return res.json({ data: email });
}
