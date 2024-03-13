import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


async function connectDB(){
    try{
      await mongoose.connect(process.env.mongodb);
      console.log('Connected to MongoDB');
    }catch(error){
        console.log('Error connecting to MongoDB',error);
        throw error;
    }
}
export default connectDB;