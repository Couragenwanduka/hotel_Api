import roomtypes from '../models/Roomtype.js';
import room from '../models/Room.js';



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
    const newRoomtype = new roomtypes({
      name,
    })
    await newRoomtype.save();
    response.status(201).json({ message: "RoomType created successfully", room: newRoomtype });
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
    const { id, name, roomtype,description,price} = request.body;
    if (!id || !name || !roomtype||!description||!price){
      return response.status(400).json({
        message: "Please complete the fields"
      })
    }
    const existingRoom = await room.findOne({name: name});
    if (!existingRoom) {
      return response.status(400).json({
        message: "invalid room name, please enter a name that matches the room type"
      })
    }
    const newRoom = new room({
      id,
      name,
      roomtype:existingRoom.name,
      description,
      price
    })
    await newRoom.save();
    response.status(201).json({ message: "RoomType created successfully", room: newRoom })
  } catch (error) {
    response.status(400).json({ message: error.message });
    console.log(error)
  }
}
