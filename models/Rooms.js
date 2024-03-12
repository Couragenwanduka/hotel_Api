import mongoose from "mongoose";

const room=mongoose.Schema({

    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    roomtype:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const rooms = mongoose.model("Room", room);

export default rooms;