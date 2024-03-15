import { createRoom, createRooomType, dataBaseCall,  filteredRoom,   getAllRooms} from '../service/room.service.js';

/*
roomtype function is used to register a roomtype 
* it also saves the room with an id that fits to the specified room type
*/ 

export async function roomtype(request, response) {
  try {
    const { name } = request.body;
    if (!name) {
      return response.status(400).json({
        message: "Please provide a name"
      });
    }
   const roomtype = await createRooomType(name)
   return response.status(201).json({ message: "RoomType created successfully", room: roomtype });
  } catch (error) {
    response.status(400).json({ message: error.message });
    console.log(error);
  }
}
/**
 * this is used to create a new room
 * checks for empty fields 
 * checks if the room and id already exists
 */
export async function Rooms(request, response) {
  try {
    const {name, roomtype,description,price} = request.body;
    if ( !name || !roomtype||!description||!price){
      return response.status(400).json({
        message: "Please complete the fields"
      })
    }
    const existingRoom = await dataBaseCall(name)
    if (!existingRoom) {
     const newRoom= await createRoom(name,roomtype,description,price)
   return response.status(201).json({ message: "Room created successfully", room: newRoom })
    }else{
      return response.status(400).json({
        message: "Room already exists"
      })
    }
    
  } catch (error) {
    response.status(400).json({ message: error.message });
    console.log(error)
  }
}
export  async function  getRooms(request, response) {
    try {
        const allRooms= await getAllRooms()
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
 const filteredRooms = await filteredRoom(request)
 return response.status(200).json(filteredRooms);
}catch(error){
console.log("Error retrieving rooms",error)
    return response.status(500).json({
        message: "Internal server error"
    })
};
}

