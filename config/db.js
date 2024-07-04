import mongoose from "mongoose";
import 'dotenv/config'


const Mongo_uri = process.env.Mongo_url

export const dbConnect = () => {
  mongoose.connect(Mongo_uri).then(() => {
    console.log('Database Connected')
  })
}

