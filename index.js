import express from 'express';
import dotenv from 'dotenv';
import connectDb from '../src/config/mongodb.js';
import router from '../src/routes/routes.js';

dotenv.config();

const app = express();

connectDb();

const Port= process.env.PORT ||5000

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/',router)
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
});
