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
app.use(cors({
  origin: "http://localhost:5173", // Allow your React app
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true // If you need cookies or auth headers
}));

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


const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`);
    connectDB();
});

