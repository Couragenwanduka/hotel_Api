import express from 'express';
import  {roomtype,Rooms}from './Controller/post.js';
import {getRooms,searchRooms,getRoomById} from './Controller/get.js';
import {updateRoom} from './Controller/patch.js';
import { deleteRoom } from './Controller/delete.js';

const router= express.Router();



router.get('/api/v1/rooms-types',getRooms)
router.get('/api/v1/rooms', searchRooms);
router.post("/api/v1/rooms-types",roomtype)
router.post("/api/v1/rooms",Rooms)
router.get('/api/v1/rooms/:id', getRoomById);
router.patch('/api/v1/rooms/:id', updateRoom); 
router.delete('/api/v1/rooms/:id', deleteRoom);

export default router;
