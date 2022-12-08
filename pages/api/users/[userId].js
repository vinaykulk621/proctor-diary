import dbConnect from '../../../utils/dbConnection'
import { createSingleUser, getSingleUser } from '../../../utils/user/users'

export default async (req, res) => {
    dbConnect().catch(() => res.status(405).json({ message: "fialure" }))

    const { method } = req

    switch (method) {
        case 'GET':
            getSingleUser(req, res)
            break;
        case 'POST':
            createSingleUser(req, res)
            break;
    }

}