/** @format */

import dbConnect from "../../utils/dbConnection";

export default async function (req, res) {
  const client = await dbConnect();
  const db = client.db();
  try {
    const activity = await db.collection("activityPoints").find({}).toArray();
    if (activity) {
      // console.log("api", activity);
      client.close();
      res.json(activity);
    }
  } catch (e) {
    console.log(e);
    return { message: "Something went wrong" };
  }
  return { message: "error" };
}
