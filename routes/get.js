import rooms from '../models/Rooms.js';
import Roomtype from '../models/Roomtypes.js';
import connectDB from '../config/mongodb.js';
connectDB();

export  async function  getRooms(request, response) {
    try {
        const allRooms = await Roomtype.find();
        return response.status(200).json(allRooms);
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            message: "Internal server error"
        })
    }
}
export async function searchRooms(request, response){
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
 const filteredRooms = await rooms.find(filters);
 return response.status(200).json(filteredRooms);
}catch(error){
console.log("Error retrieving rooms",error)
    return response.status(500).json({
        message: "Internal server error"
    })
};
}

export async function getRoomById(request, response) {
    try {
        const {id}= request.params.id;
        const room = await rooms.findById({id:id});
        if (!room) {
            return response.status(404).json({
                message: "Room not found"
            })
        }
        return response.status(200).json(room);
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            message: "Internal server error"
        })
    }
}