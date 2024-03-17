import {findRoomById,updateRoomById ,deleteRoomById} from '../service/room.service.js';



export const getRoomById= async(request, response)=> {
    try {
        const roomId= request.params.id;
        if(!roomId){
            return response.status(400).json({
                message: "Please provide an id"
            })
        }
       const idRoom= await findRoomById(roomId)
        if (!idRoom) {
            return response.status(404).json({
                message: "Room not found"
            })
        }
        return response.status(200).json(idRoom);
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            message: "Internal server error"
        })
    }
}
export const updateRoom=async(request,response)=>{
    const {id}=request.params;
    const {name,roomtype,price}=request.body;
    if(!id||!name||!roomtype||!price){
        return response.status(400).json({
            message:"Please provide all the fields"
        })
    }
    const Rooms = await updateRoomById(id,name,roomtype,price)
    if(!Rooms){
        return response.status(404).json({
            message:"Room not found"
        })
    }
    return response.status(200).json(Rooms);

}
export const deleteRoom= async(request,response)=>{
    try{
        const {id}=request.params;
        if(!id){
            return response.status(400).json({message:"Please provide an id"});
        }
        const deletedroom= await deleteRoomById(id)
        response.status(200).json(deletedroom);
    }catch(error){
      console.log("error finding room",error);
      response.status(400).json({message:error.message});
    }
}
