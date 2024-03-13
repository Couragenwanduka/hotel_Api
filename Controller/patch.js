import rooms from '../models/Room.js';

export async function updateRoom(request,response){
    const {id}=request.params;
    const {name,roomtype,price}=request.body;
    if(!id||!name||!roomtype||!price){
        return response.status(400).json({
            message:"Please provide all the fields"
        })
    }
    const room=await rooms.findOneAndUpdate({id:id},{name,roomtype,price},{new:true});
    if(!room){
        return response.status(404).json({
            message:"Room not found"
        })
    }
    return response.status(200).json(room);

}