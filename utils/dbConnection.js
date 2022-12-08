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