import room from "../models/Room.js";
import Roomtypes from "../models/Roomtype.js";

export const createRooomType= async(name)=>{
    try{
        const newRoomtype = new Roomtypes({
            name,
          })
          await newRoomtype.save();
    }catch(error){      
    console.log("Error: " + error);
    throw error; 
    }
}
export  const dataBaseCall= async(name)=>{
    try{
        const result = await room.findOne({name: name});
        return result;
    }catch(error){
        throw error
    }
}
export const createRoom = async (name, roomtype, description, price) => {
    try {
        const newRoom = new room({
            name,
            roomtype,
            description,
            price,
        });
        await newRoom.save();
    } catch (error) {
        throw error;
    }
};

export const getAllRooms = async()=>{
    try{
        const result = await Roomtypes.find();
        return result;
    }catch(error){
        throw error
    }
}

export const filteredRoom = async(request)=>{
    try{
        let filters={};
 if(request.query.search){
   filters.name= {$regex:new RegExp (request.query.search,"i")}
 }
 if(request.query.roomtype){
    filters.name= {$regex:new RegExp (request.query.roomtype,"i")}
 }
 if(request.query.minprice||request.query.maxprice){
    filters.price={};
    if(request.query.minprice){
        filters.price.$gte=parseInt(request.query.minprice);
    }
    if(request.query.maxprice){
        filters.price.$lte=parseInt(request.query.maxprice);
    }
 }
        const filteredRooms = await room.find(filters);
        return filteredRooms;
    }catch(error){
        throw error
    }
}
export  const findRoomById= async(roomId)=>{
    try{
        const result = await room.findById(roomId);
        return result;
    }catch(error){
        throw error
    }
}
 
export const updateRoomById= async(id,name,roomtype,price)=>{
    try{
        const Room = await room.findOneAndUpdate({_id:id},{name,roomtype,price},{new:true});
        return Room
    }catch(error){
        throw error
    }
}

export const deleteRoomById= async(id)=>{
    try{
        const deletedroom=await room.findByIdAndDelete(id);
        return deletedroom;
    }catch(error){
        throw error
    }
}