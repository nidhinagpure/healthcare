import { useState } from 'react'
import Input from '../componenets/input';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


function BookingOrd () {
   const [newShow, setNewShow] = useState({
    name: "",
    sirname: "",
    number: "",
    email: "",
    address: "",
    date: "",
    time: "",
    day: "",
    doctorname: "",
    decription: "",
    age: "",
  });

  const addAppointment = async () => {
    try{
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/bookappointment`, {
        name: newShow.name,
        sirname: newShow.sirname,
        number: newShow.number,
        email: newShow.email,
        address: newShow.address,
        date: newShow.date,
        time: newShow.time,
        day: newShow.day,
        doctorname: newShow.doctorname,
        decription: newShow.decription,
        age: newShow.age,
      });
      toast.success(response.data.message || "seunxnx");
    }catch (e) {
      toast.error(e.response.data.message || "dhjkki3");
    }
  };
  return (
    <>
      <Toaster />

      <h1 className='text-xl text-center font-bold bg-blue-100 p-2'>
        BOOK  YOUR  APPOINTMENT  NOW
      </h1>

      <div className=' flex flex-raw justify-evenly m-10 bg-indigo-50 p-6 mt-16 broder-blue-800 border-4'>

        <div>

          <Input
            type="text"
            placeholder="Enter Name"
            value={newShow.name}
            onChange={(val) => setNewShow({ ...newShow, name: val })}
            size="lg"
          />
          <Input
            type="text"
            placeholder="Enter Sirname"
            value={newShow.sirname}
            onChange={(val) => setNewShow({ ...newShow, sirname: val })}
            size="lg"
          />
          <Input
            type="text"
            placeholder="Enter Email"
            value={newShow.email}
            onChange={(val) => setNewShow({ ...newShow, email: val })}
            size="lg"
          />
          <Input
            type="text"
            placeholder="Enter Phone No."
            value={newShow.number}
            onChange={(val) => setNewShow({ ...newShow, number: val })}
            size="lg"
          />

        </div>

        <div className=''>
          <Input
            type="text"
            placeholder="Enter Age"
            value={newShow.age}
            onChange={(val) => setNewShow({ ...newShow, age: val })}
            size="lg"
          />
          <Input
            type="text"
            placeholder="Enter Doctor Name"
            value={newShow.doctorname}
            onChange={(val) => setNewShow({ ...newShow, doctorname: val })}
            size="lg"
          />
          <Input
            type="text"
            placeholder="Description of Symptoms"
            value={newShow.decription}
            onChange={(val) => setNewShow({ ...newShow, decription: val })}
            size="lg"
          />
          <Input
            type="text"
            placeholder="Enter Address"
            value={newShow.address}
            onChange={(val) => setNewShow({ ...newShow, address: val })}
            size="lg"
          />
        </div>

        <div>
          <Input
            type="date"
            placeholder="Enter Date"
            value={newShow.date}
            onChange={(val) => setNewShow({ ...newShow, date: val })}
            size="lg"
          />
          <select
            value={newShow.day}
            onChange={(e) => setNewShow({ ...newShow, day: e.target.value })}
            className='py-2 px-6 rounded-lg mt-10 border border-2 border-gray-400'
          >
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>

          <Input
            type="time"
            placeholder="Enter Name"
            value={newShow.time}
            onChange={(val) => setNewShow({ ...newShow, time: val })}
            size="lg"
          />

          <button className='py-2 px-14 rounded-full bg-blue-500 mt-12 text-white'
            onClick={() => {
              addAppointment();
            }}>Submit</button>
        </div>
      </div>
    </>
  );
};


export default BookingOrd;

