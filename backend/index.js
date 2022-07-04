import Express  from "express";
import dbModel from "./models/db.js";
import dotenv from "dotenv";
import cors from 'cors';
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './swagger.json' assert {type:'json'}
import studentRouter from './routes/studentRouter.js'
import userRouter from './routes/userRouter.js'
const app = Express();
dotenv.config();
app.use(Express.json())
app.use(cors());
app.get('/',(req,res)=>{
    res.status(200).send("Welcome STUN")
})
app.use('/student',studentRouter);
app.use('/user',userRouter);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument))
const port = process.env.PORT|| 3500;

app.listen(port,()=>{
    console.log(`Listening ${port}`); 
})