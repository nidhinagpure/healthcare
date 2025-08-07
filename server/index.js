import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Appointment from "./models/Appointment.js"
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

app.get("/bookappointment", async (req, res) => {
    const appointment = await Appointment.find();
    return res.status(200).json({
        success: true,
        data:appointment,
        message: "Appointment booked successfully",
    });
});

app.post("/bookappointment", async (req, res) => {
    const {
        name,
        sirname,
        number,
        email,
        address,
        date,
        time,
        day,
        age,
        doctorname,
        decription
    } = req.body; // read from req.body

    /*const newBooking = {
        name,
        sirname,
        number,
        email,
        address,
        date,
        time,
        day,
        doctorname,
        decription ,
    };
     APPOINTMENT.push(newBooking); */// Object  // dont need to save in object in mongodb 

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "name is required",
            data: null,
        })
    };
    if (!sirname) {
        return res.status(400).json({
            success: false,
            message: "sirname is required",
            data: null,
        })
    };
    if (!number) {
        return res.status(400).json({
            success: false,
            message: "number is required",
            data: null,
        })
    };
    if (!email) {
        return res.status(400).json({
            success: false,
            message: "email is required",
            data: null,
        })
    };
    if (!address) {
        return res.status(400).json({
            success: false,
            message: "address is required",
            data: null,
        })
    };
    if (!age) {
        return res.status(400).json({
            success: false,
            message: "age is required",
            data: null,
        })
    };
    if (!day) {
        return res.status(400).json({
            success: false,
            message: "day is required",
            data: null,
        })
    }
    if (!date) {
        return res.status(400).json({
            success: false,
            message: "date is required",
            data: null,
        })
    }
    if (!time) {
        return res.status(400).json({
            success: false,
            message: "time is required",
            data: null,
        })
    }
    if (!doctorname) {
        return res.status(400).json({
            success: false,
            message: "doctorname is required",
            data: null,
        })
    }
    if (!decription) {
        return res.status(400).json({
            success: false,
            message: "description is required",
            data: null,
        })
    }
    /* 
    if (!name || !sirname || !number || !email || !address || !day || !date || !time || !doctorname || !decription) {
  return res.status(400).json({
    success: false,
    message: "All fields are required",
    data: null,
  });
}
    */
    const newappointment = new Appointment({
        name,
        sirname,
        number,
        email,
        address,
        date,
        time,
        age,
        day,
        doctorname,
        decription,
    });
    const savedAppointment = await newappointment.save();

    return res.status(200).json({
        success: true,
        data: savedAppointment,
        message: "book appointment succesfully",
    });

});





app.get("/health", (req, res) => {
    res.status(200).json({ message: "server is running " })
})

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`);
    connectDB();
});