import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {
    getAppointment,
    postAppointment,
    putAppointment,
    deleteAppointment,
} from "./controllers/Appointments.js";
dotenv.config();

const app = express();
app.use(express.json()); // middleware to create the infomation in post api 
app.use(cors());

const connectDB = async () => {
    const connectionUrl = await mongoose.connect(process.env.MONGODB_URL);

    if (connectionUrl) {
        console.log("Mongodb connected successfully");
    };
} // connection of MongoDb

app.get("/bookappointment", getAppointment);

app.post("/bookappointment", postAppointment);

app.put("/bookappointment/:id", putAppointment);

app.delete("/bookappointment/:id", deleteAppointment);

app.get("/health", (req, res) => {
    res.status(200).json({ message: "server is running " })
});


const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`);
    connectDB();
});

