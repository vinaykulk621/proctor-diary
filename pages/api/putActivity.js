/** @format */

import dbConnect from "../../utils/dbConnection";

export default async function (req, res) {
  const { duration } = req.body;
  const data = req.body;
  const client = await dbConnect();
  const db = client.db();
  try {
    console.log("ho raha hai");
    const res = await db.collection("activityPoints").insertOne({
      ...data,
      proctor: "Jack",
      status: "pending",
      points: Math.floor(duration / 4),
    });
    console.log(res);
    console.log("hogaya");
    return res.json({ message: "success" });
  } catch (e) {
    res.status(405).json({ message: "data Not Found" });
  }
}
