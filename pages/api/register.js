import dbConnect from "../utils/dbConnection";


export default async function handler(req, res) {
    const { db } = await dbConnect()
    try {
        const user = await db.collection("users").create(req.body);
        res.redirect('/')
        if (!user) {
            return res.json({ "code": 'User not created' })
        }
    } catch (error) {
        res.status(400).json({ status: 'Not able to create a new user.' })
    }
}