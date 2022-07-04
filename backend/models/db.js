import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const url = process.env.DB;
const connection = mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{ console.log("Connected to the db successfully")})
.catch((err)=> console.log("Failed to connect to the db",err.message))
export default connection