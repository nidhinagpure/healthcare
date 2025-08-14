import createProfile from "../models/Profile.js";


const getProfile = async (req, res) => {
    const myprofile = await createProfile.find();
    return res.status(200).json({
        success: true,
        data: myprofile,
        message: "Done",
    });
};

const postProfile = async (req, res) => {
    try {
        const { 
            name,
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
         

        const newProfile = new createProfile({
            name,
            email,
            city,
            number,
            age,
            gender,
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