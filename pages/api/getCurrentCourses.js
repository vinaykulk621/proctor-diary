/** @format */

import dbConnect from "../../utils/dbConnection";

export default async function (req, res) {
  try {
    const client = await dbConnect();
    const db = client.db();
    const courses = await db
      .collection("courses")
      .find({ semester: 5 })
      .toArray();
    return res.json(courses);
  } catch (e) {
    console.log(e);
  }
}
