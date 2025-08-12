import Appointment from "./../models/Appointment.js"


const getAppointment = async (req, res) => {
    const appointment = await Appointment.find();
    return res.status(200).json({
        success: true,
        data: appointment,
        message: "Appointment booked successfully",
    });
};

const postAppointment = async (req, res) => {
    try{
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
    }catch(e){
        console.error("Error Booking appointment:", error);
        return res.status(500).json({
            success:false,
            message:"Server error while booking appointment",
            error:error.message,
        });
    }
};

const putAppointment = async (req, res) => {

    const { id } = req.params;
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
    } = req.body;

    if (!/^\d{10}$/.test(number)) {
        return res.status(400).json({
            success: false,
            message: "Mobile number must be exactly 10 digits",
            data: null,
        });
    };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email address",
            data: null,
        });
    }
    try {

        const appointmentUpdate = await Appointment.findById(id);

        if (!appointmentUpdate) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",
                data: null,
            });
        }

        // Update details here

        appointmentUpdate.name = name;
        appointmentUpdate.sirname = sirname;
        appointmentUpdate.number = number;
        appointmentUpdate.email = email;
        appointmentUpdate.address = address;
        appointmentUpdate.date = date;
        appointmentUpdate.day = day;
        appointmentUpdate.time = time;
        appointmentUpdate.age = age;
        appointmentUpdate.doctorname = doctorname;
        appointmentUpdate.decription = decription;

        // save update details 

        appointmentUpdate.save();

        return res.status(200).json({
            success: true,
            data: appointmentUpdate,
            message: "Appointment details update successfully!"
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: e.message
        });
    }
};


const deleteAppointment = async (req, res) => {
    const { id } = req.params;

    try {
        const appointmentDetele = await Appointment.deleteOne({ _id: id });

        if (appointmentDetele.deletedCount === 0) {
            return res.status({
                success: false,
                message: "Appointment Not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Appointment deleted successfully",
        });

    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            data: e.message,
        });
    }
};

export {
    getAppointment,
    postAppointment,
    putAppointment,
    deleteAppointment,

}