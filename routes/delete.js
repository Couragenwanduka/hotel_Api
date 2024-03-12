import rooms from '../models/Rooms.js';
import connectDB from '../config/mongodb.js';


connectDB();
export async function deleteRoom(request,response){
     try{
         const {id}=request.params;
         if(!id){
             return response.status(400).json({message:"Please provide an id"});
         }
         const deletedroom=await rooms.findByIdAndDelete(id);
         response.status(200).json(deletedroom);
     }catch(error){
       console.log("error finding room",error);
       response.status(400).json({message:error.message});
     }
}