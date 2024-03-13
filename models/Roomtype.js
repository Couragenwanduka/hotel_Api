import mongoose from 'mongoose';


const roomtypes= mongoose.Schema({
    
    name:{
        type:String,
        required:true
    }
});
const roomtype= mongoose.model('RoomType',roomtypes);

export default roomtypes;