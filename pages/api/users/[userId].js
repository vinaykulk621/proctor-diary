import dbConnect from '../../../utils/dbConnection'
import { getReq, postReq } from '../../../utils/examples/allReq'

export default async (req, res) => {
    dbConnect().catch(() => res.status(405).json({ message: "fialure" }))

    const { method } = req

    switch (method) {
        case 'GET':
            getSingleUserReq(req, res)
            break;
        case 'POST':
            postReq(req, res)
            break;
        case 'PUT':
            res.status(200).json({ method, name: 'PUT' })
            break;
        case 'DELETE':
            res.status(200).json({ method, name: 'DELETE' })
            break;
    }

}