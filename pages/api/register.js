import dbConnect from "../utils/dbConnection";
import User from '../models/user'

dbConnect()

export default async function handler(req, res) {
    try {
        const user = await User.create(req.body);
        res.redirect('/')
        if (!user) {
            return res.json({ "code": 'User not created' })
        }
    } catch (error) {
        res.status(400).json({ status: 'Not able to create a new user.' })
    }
}