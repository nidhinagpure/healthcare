import { json } from "express";
import Profile from "../models/Profile";


const getProfile = async (req, res) => {
    const myProfile = await Profile.find();
    return res.status(200).json({
        success: true,
        data: myProfile,
        message: "Done",
    });
};

const postProfile = async (req, res) => {
    try {
        const { name,
            image,
            email,
            city,
            number,
            gender,
            age } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "We need your name to continue",
                data: null,
            });
        };

        if (!image) {
            return res.status(400).json({
                success: false,
                message: "We need your image to continue",
                data: null,
            });
        }
        if (!number) {
            return res.status(400).json({
                success: false,
                message: " We need your number to continue",
                data: null,
            });
        };
        if (!age) {
            return res.status(400).json({
                success: false,
                message: " We need your age to continue",
                data: null,
            });
        };
        if (!city) {
            return res.status(400).json({
                success: false,
                message: " We need your city to continue",
                data: null,
            });
        };
        if (!gender) {
            return res.status(400).json({
                success: false,
                message: " We need your gender to continue",
                data: null,
            });
        };
        if (!email) {
            return res.status(400).json({
                success: false,
                message: " We need your email to continue",
                data: null,
            });
        };

        const newProfile = new Profile({
            name,
            email,
            city,
            number,
            age,
            gender,
            image,
        });

        const saveProfile = await newProfile.save();

        return res.status(200).json({
            success: true,
            message: "Your profile is ready!",
            data: saveProfile,
        });
    } catch (e) {
        console.error("Complete your profile to continue:", error);
        return res.status(500).json({
            success: false,
            message: "Server error while create profile",
            error: error.message,
        });
    }
}

export {
    getProfile,
    postProfile,
}