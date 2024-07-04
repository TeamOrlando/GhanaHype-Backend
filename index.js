import express from "express";
import 'dotenv/config'
import eventRouter from "./routes/routes.js";
import mongoose from "mongoose";
import { dbConnect } from "./config/db.js";

// await mongoose.connect(process.env.Mongo_url)


//creating server
const eventApp = express()
eventApp.use(express.json())
const PORT = process.env.PORT || 8999

//calling db
dbConnect()


eventApp.use(eventRouter)
//listening to server
eventApp.listen(8999, () => {
  console.log(`App is listening to ${PORT}`)
})


export default eventApp