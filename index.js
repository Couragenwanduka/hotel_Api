import express from 'express';
import dotenv from 'dotenv';
import  {roomtype,Rooms}from './routes/post.js';
import {getRooms,searchRooms,getRoomById} from './routes/get.js';
import {updateRoom} from './routes/patch.js';
import { deleteRoom } from './routes/delete.js';
dotenv.config()
const app = express();

const PORT = process.env.PORT ||5000;
app.use(express.json());
app.use(express.urlencoded({ extended:true}))

app.get('/api/v1/rooms-types',getRooms)
app.get('/api/v1/rooms', searchRooms);
app.get('/api/v1/rooms/:id', getRoomById); 
app.post("/api/v1/rooms-types",roomtype)
app.post("/api/v1/rooms",Rooms)
app.patch('/api/v1/rooms/:id', updateRoom); 
app.delete('/api/v1/rooms/:id', deleteRoom);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});
