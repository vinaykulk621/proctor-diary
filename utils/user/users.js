import Users from "../../models/user"

export async function getSingleUser(req, res) {
    try {
        const { _id } = req.body
        if (_id) {
            const user = await Users.findById(_id)
            return res.status(200).json({ user: user })
        }
    } catch (e) {
        res.status(405).json({ message: "data Not Found" })
    }
}

export default async function createSingleUser(req, res) {
    try {
        const users = req.body
        if (!users) {
            return res.status(404).json({ message: "data not inserted" })
        }
        Users.create(users, (err, data) => {
            res.status(200).json(data)
        })
    } catch (e) {
        res.status(405).json({ message: "data Not Found" })
    }
}


