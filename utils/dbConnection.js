import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    mongoose.set("strictQuery", false);
    const db = await mongoose.connect(process.env.MONGO_URI)
    console.log("Database Hot!!");
    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;