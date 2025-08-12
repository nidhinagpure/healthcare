import React, { useState } from 'react'
import Input from '../componenets/input';


const BookingOrd = () => {
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
  return (
    <>
      <h1 className='text-xl text-center font-bold bg-blue-200 p-2'>Book Your Appointment Now </h1>
      <div className=' flex flex-raw justify-evenly m-10'>

        <div>
          <Input
            type="text"
            placeholder="Enter Name"
            value={newShow.name}
            onChange={(val) => { setNewShow({ ...newShow, name: val }) }}
            size="lg"
          />
          <Input
            type="text"
            placeholder="Enter Sirname"
            value={newShow.sirname}
            onChange={(val) => { setNewShow({ ...newShow, sirname: val }) }}
            size="lg"
          />
          <Input
            type="text"
            placeholder="Enter Email"
            value={newShow.email}
            onChange={(val) => { setNewShow({ ...newShow, email: val }) }}
            size="lg"
          />
          <Input
            type="text"
            placeholder="Enter Phone No."
            value={newShow.Phone}
            onChange={(val) => { setNewShow({ ...newShow, name: val }) }}
            size="lg"
          />

        </div>

        <div className='flex-col'>

          <Input
            type="text"
            placeholder="Enter Addresses"
            value={newShow.address}
            onChange={(val) => { setNewShow({ ...newShow, address: val }) }}
            size="lg"
          />
          <Input
            type="date"
            placeholder="Enter Date"
            value={newShow.date}
            onChange={(val) => { setNewShow({ ...newShow, date: val }) }}
            size="lg"
          />
          <Input
            type="time"
            placeholder="Enter Name"
            value={newShow.time}
            onChange={(val) => { setNewShow({ ...newShow, time: val }) }}
            size="lg"
          />
          <Input
            type="day"
            placeholder="Enter Name"
            value={newShow.day}
            onChange={(val) => { setNewShow({ ...newShow, day: val }) }}
            size="lg"
          />
          <select
            value={newShow.day}
            onChange={(e) => setNewShow({ ...newShow, day: e.target.value })}
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
        </div>
        <div>
          <Input
            type="text"
            placeholder="Enter Name"
            value={newShow.name}
            onChange={(val) => { setNewShow({ ...newShow, name: val }) }}
            size="lg"
          />

        </div>

      </div>


    </>
  )
}

export default BookingOrd;

