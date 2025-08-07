import { Schema, model } from "mongoose";

const appointmentSchema = new Schema({
        name:String,
        sirname:String,
        number:String,
        email:String,
        address:String,
        date:String,
        time:String,
        day:String,
        age:String,
        doctorname:String,
        decription:String ,
});

const Appointment = model("Appointment", appointmentSchema );

export default Appointment; 