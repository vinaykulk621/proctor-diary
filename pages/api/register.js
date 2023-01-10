import dbConnect from "../utils/dbConnection";


export default async function handler(req, res) {
    const client = await dbConnect()
    const db = client.db()
    const { email, password } = req.body

    try {
        const user = await db.collection("users").insertOne({
            email: email,
            password : password
        });

        return res.status(201).json({ code: 'User not created' })
    } catch (error) {
        res.status(400).json({ status: 'Not able to create a new user.' })
    }
}