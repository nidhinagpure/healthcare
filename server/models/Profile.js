import { Schema, model } from "mongoose";


const myProfile = new Schema({
    name: String,
    email: String,
    number: String,
    city: String,
    city: String,
    age: String,
});

const Profile = model("Profile", myProfile );

export default Profile; 