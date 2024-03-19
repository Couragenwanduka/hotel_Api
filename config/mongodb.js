import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


async function connectDB(){
    try{
      await mongoose.connect("mongodb+srv://courageobunike:D83o0LN1AEz9akJI@cluster0.qvxr3zn.mongodb.net/");
      console.log('Connected to MongoDB');
    }catch(error){
        console.log('Error connecting to MongoDB',error);
        throw error;
    }
}
export default connectDB;
