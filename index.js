import express from "express";
import 'dotenv/config'
import eventRouter from "./routes/routes.js";
import mongoose from "mongoose";
import expressOasGenerator from 'express-oas-generator'
import { dbConnect } from "./config/db.js";
import cors from 'cors'


// await mongoose.connect(process.env.Mongo_url)


//creating server
const eventApp = express()

expressOasGenerator.handleResponses(eventApp, {
  alwaysServerDocs: true,
  tags: ['events'],
  mongooseModels: mongoose.modelNames(),
})
dbConnect()

eventApp.use(cors())
eventApp.use(express.json())
eventApp.use(express.static('events'));
eventApp.use(eventRouter)
expressOasGenerator.handleRequests();
eventApp.use((req, res) => res.redirect('/api-docs/'));

//listening to server
const PORT = process.env.PORT || 8999
eventApp.listen(8999, () => {
  console.log(`App is listening to ${PORT}`)
})


export default eventApp