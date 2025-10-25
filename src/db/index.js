import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB host: ${connectionInstance.connection.host}`)
        // console.log(connectionInstance, 'connection alll')

    } catch (err) {
        console.error("MONGOSB connection error", err);
        process.exit(1)
    }
}
export default connectDB;