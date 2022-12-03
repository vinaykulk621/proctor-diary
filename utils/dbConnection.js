import mongoose from "mongoose"
const dbConnect = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        if (connection.readyState == 1) {
            console.log("Database Is On Fire")
        }
    } catch (errors) {
        return Promise.reject(errors)
    }
}
export default dbConnect;

// import mongoose from "mongoose";

// const connection = {}


// async function dbConnect() {
//     if (connection.isConnected) {
//         return
//     }
//     const db = mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })

//     connection.isConnected = db.connections[0].readyState
//     console.log("database is on fire");
// }

// export default dbConnect