import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parse'

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16k"}))  //give json data and i have put limit
app.use(express.urlencoded({extended:true})) // it encode the url data like space etc
app.use(express.static("public"))
app.use(cookieParser())
export { app }
