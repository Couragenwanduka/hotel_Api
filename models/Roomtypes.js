import mongoose from 'mongoose';


const roomtypes= mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});
const Roomtype= mongoose.model('RoomType',roomtypes);

export default Roomtype;