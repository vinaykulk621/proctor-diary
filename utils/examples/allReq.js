import Users from "../../models/user"

export async function getReq(req, res) {
    try {
        const users = await Users.find({})
        if (!users) {
            return res.status(404).json({ message: "data not found" })
        }
        res.status(200).json(users)
    } catch (e) {
        res.status(405).json({ message: "data Not Found" })
    }
}
export async function postReq(req, res) {
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
export async function putReq(req, res) {
    try {
        const { _id } = req.query;
        const formData = req.body;
        if (_id && formData) {
            const user = await Users.findByIdAndUpdate(_id, formData);
            res.status(200).json(user)
        }
        res.status(404).json({ error: "User Not Selected...!" })
    } catch (error) {
        res.status(404).json({ error: "Error While Updating the Data...!" })
    }
}
export async function deleteUser(req, res) {
    try {
        const { _id } = req.query;
        if (_id) {
            const user = await Users.findByIdAndDelete(_id)
            return res.status(200).json(user)
        }
        res.status(404).json({ error: "User Not Selected...!" })
    } catch (error) {
        res.status(404).json({ error: "Error While Deleting the User...!" })
    }
}
export async function getSingleUserReq(req, res) {
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
