import rooms from '../models/Rooms.js';
import connectDB from '../config/mongodb.js';

connectDB();
export async function updateRoom(request,response){
    const {id}=request.params;
    const {name,roomtype}=request.body;
    if(!id||!name||!roomtype){
        return response.status(400).json({
            message:"Please provide all the fields"
        })
    }
    let price= 20000
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
    const room=await rooms.findOneAndUpdate({id:id},{name,roomtype,price},{new:true});
    if(!room){
        return response.status(404).json({
            message:"Room not found"
        })
    }
    return response.status(200).json(room);

}