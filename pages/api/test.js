import dbConnect from "../../utils/dbConnection";

export default async (req, res) => {
    dbConnect()
    res.json({ test: "test-successfull" })
}