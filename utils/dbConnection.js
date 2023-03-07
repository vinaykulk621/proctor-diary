/** @format */

import { MongoClient } from "mongodb";
let uri = process.env.MONGO_URI;
export default async function connectToDatabase() {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
}
