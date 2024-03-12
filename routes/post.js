import Roomtype from '../models/Roomtypes.js';
import rooms from '../models/Rooms.js';
import connectDB from '../config/mongodb.js';

connectDB()
// Functions to generate IDs for different room types

/**
 * Generate ID for standard room type.
 * IDs start from 001 and increment by 1.
 * returns {Promise<string>} Standard room ID
 */
async function standardRooms() {
 try{
  const lastRoomtype= await Roomtype.findOne().sort({_id:-1})
  let lastid="000";
  if(lastRoomtype){
   const lastIdNumber= parseInt(lastRoomtype._id);
   lastid = (lastIdNumber + 1).toString().padStart(3, '0');
  }
  return lastid;
 }catch(error){
  console.log("error fetching last room id",error);
  throw error;
 }
}
/**
 * Generate ID for standard room type.
 * IDs start from 201 and increment by 1.
 * returns {Promise<string>} Standard room ID
 */
async function deluxeRooms() {
  try {
    const lastRoomtype = await Roomtype.findOne().sort({ _id: -1 });
    let lastid = "000";
    if (lastRoomtype) {
      const lastIdNumber = parseInt(lastRoomtype._id);
      lastid = (lastIdNumber + 200).toString().padStart(3, '0');
    } else {
      // If no previous room type exists, start counting from 201
      lastid = "201";
    }
    return lastid;
  } catch (error) {
    console.log("Error fetching last room ID", error);
    throw error;
  }
}
/**
 * Generate ID for standard room type.
 * IDs start from 301and increment by 1.
 * returns {Promise<string>} Standard room ID
 */
async function  juniorsiutes() {
  try {
    const lastRoomtype = await Roomtype.findOne().sort({ _id: -1 });
    let lastid = "000";
    if (lastRoomtype) {
      const lastIdNumber = parseInt(lastRoomtype._id);
      lastid = (lastIdNumber + 300).toString().padStart(3, '0');
    } else {
      // If no previous room type exists, start counting from 201
      lastid = "301";
    }
    return lastid;
  } catch (error) {
    console.log("Error fetching last room ID", error);
    throw error;
  }
}
/**
 * Generate ID for standard room type.
 * IDs start from 401 and increment by 1.
 * returns {Promise<string>} Standard room ID
 */
async function suites() {
  try {
    const lastRoomtype = await Roomtype.findOne().sort({ _id: -1 });
    let lastid = "000";
    if (lastRoomtype) {
      const lastIdNumber = parseInt(lastRoomtype._id);
      lastid = (lastIdNumber + 400).toString().padStart(3, '0');
    } else {
      // If no previous room type exists, start counting from 201
      lastid = "401";
    }
    return lastid;
  } catch (error) {
    console.log("Error fetching last room ID", error);
    throw error;
  }
}
/**
 * Generate ID for standard room type.
 * IDs start from 501 and increment by 1.
 * returns {Promise<string>} Standard room ID
 */
async function executive() {
  try {
    const lastRoomtype = await Roomtype.findOne().sort({ _id: -1 });
    let lastid = "000";
    if (lastRoomtype) {
      const lastIdNumber = parseInt(lastRoomtype._id);
      lastid = (lastIdNumber + 500).toString().padStart(3, '0');
    } else {
      // If no previous room type exists, start counting from 201
      lastid = "501";
    }
    return lastid;
  } catch (error) {
    console.log("Error fetching last room ID", error);
    throw error;
  }
}
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
    let _id = "000";
    switch (name.toLowerCase()) {
      case "standard":
        _id = await standardRooms();
        break;
      case "deluxe":
        _id =  await deluxeRooms();
        break;
      case "juniorsiutes":
        _id =  await juniorsiutes();
        break;
      case "suites":
        _id = await suites();
        break;
      case "executive":
        _id = await executive();
        break;
      default: throw new Error("Invalid room type: " + name);
    }
    const newRoomtype = new Roomtype({
      name,
      _id
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
    const { id, name, roomtype,description} = request.body;
    if (!id || !name || !roomtype||!description) {
      return response.status(400).json({
        message: "Please complete the fields"
      })
    }
    const existingRoom = await rooms.findOne({$or: [{id: id, name: name}]});
    if (existingRoom) {
      return response.status(400).json({
        message: "Room already exists"
      })
    }
    let price = 0
    switch (roomtype.toLowerCase()) {
      case "standard":
        price = 20000;
        break;
      case "deluxe":
        price = 25000;
        break;
      case "juniorsiutes":
        price = juniorsiutes();
        break;
      case "suites":
        price = 35000;
        break;
      case "executive":
        price = 55000;
        break;
      default: throw new Error("Invalid room type: " + name);
    }
    const newRoom = new rooms({
      id,
      name,
      roomtype,
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
// export { Rooms, roomtype } 