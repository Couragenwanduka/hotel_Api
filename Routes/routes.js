import express from 'express';
import{Rooms,getRooms, searchRooms,roomtype} from '../Controller/Room.controller.js';
import{ getRoomById,updateRoom,deleteRoom}from '../Controller/Room.controller2.js'
const router= express.Router();



router.get('/api/v1/rooms-types',getRooms)
router.get('/api/v1/rooms', searchRooms);
router.post("/api/v1/rooms-types",roomtype)
router.post("/api/v1/rooms",Rooms)
router.get('/api/v1/rooms/:id', getRoomById);
router.patch('/api/v1/rooms/:id', updateRoom); 
router.delete('/api/v1/rooms/:id', deleteRoom);

export default router;
