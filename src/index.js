import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
    path: './env'
})

const port = process.env.PORT || 8000

connectDB()
    .then(() => {
        app.listen(port || 8000, () => {
            console.log(`server is running at port ${port}`)
        })
        app.on('error',()=>{console.error("ERROR:",error)
        throw error
        })
    })
    .catch((err) => { console.error("Mongo DB connected fail !!!!!!", err) })



// this is another way to connect db

// import express from 'express'
// const app = express()
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${ DB_NAME }`)
//         app.on("error",()=>{
//             console.error("ERROR:",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{console.log(`App is listen in port ${process.env.PORT}`)})

//     } catch (error) {
//         console.error("ERROR", error)
//         throw err
//     }
// })()