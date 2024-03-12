import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class Mongoose{
    constructor(url){
        this.url=url
    }

    async connect(){
        try{
            await mongoose.connect(this.url);
            console.log('Connected to MongoDB');
        }catch(error){
           console.log('Error connecting to MongoDB',error);
           throw error;
        }
    }
}

const connectDB= async()=>{
    const db= new Mongoose(process.env.mongodb)
    await db.connect();
};

export default connectDB;