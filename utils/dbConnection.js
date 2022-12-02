import mongoose from "mongoose";

const connection = {}


async function dbConnect() {
    if (connection.isConnected) {
        return
    }
    const db = mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState
    console.log("database is on fire");
}

export default dbConnect