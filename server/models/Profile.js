import { Schema, model } from "mongoose";

const createProfile = new Schema({
    name: String,
    email: String,
    number: String,
    city: String,
    city: String,
    age: String,
});

const Profile = model("Profile", createProfile );

export default Profile; 