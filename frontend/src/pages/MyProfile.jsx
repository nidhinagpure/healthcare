import Nidhi from "./../assets/nidhi.jpg";
import Input from "../componenets/input";
import axios from 'axios';
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';



function MyProfile() {
  const [newProfile, setNewProfile] = useState({
    name: "",
    number: "",
    email: "",
    city: "",
    gender: "",
    age: "",
    
  });
  const addProfileDetails = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/myprofile`, {
        name: newProfile.name,
        number: newProfile.number,
        email: newProfile.email,
        city:newProfile.city,
        gender: newProfile.gender,
        age: newProfile.age,
      });
      toast.success(response.data.message);
    }catch(e){
      toast.error(e.response.data.message);
    }
   };
  return (
    <>
    <Toaster/>
      <div className='flex justify-center gap-20 mt-14 bg-blue-200 p-20 border-2 border-blue-500'>
        <div className=' mt-10 '>
          <img src={Nidhi} className='w-40 h-40  mb-4 rounded-full bg-red-200' />
          <span className='font-bold text-2xl tracking-wider underline  pr-4'>{newProfile.name}</span>
        </div>
        <div>
          <Input
            type="text"
            placeholder="Enter Name"
            value={newProfile.name}
            onChange={(val) => setNewProfile({ ...newProfile, name: val })}
            size="lg"

          />
          <Input
            type="tel"
            placeholder="Phone no."
            value={newProfile.number}
            onChange={(val) => setNewProfile({ ...newProfile, number: val })}
            size="lg"
          />
          <Input
            type="email"
            placeholder="Enter email"
            value={newProfile.email}
            onChange={(val) => setNewProfile({ ...newProfile, email: val })}
            size="lg"
          />

        </div>

        <div>
          <Input
            type="text"
            placeholder="Enter city"
            value={newProfile.city}
            onChange={(val) => setNewProfile({ ...newProfile, city: val })}
            size="lg"
          />
          <Input
            type="text"
            placeholder="Enter age"
            value={newProfile.age}
            onChange={(val) =>setNewProfile({ ...newProfile, age: val })}
            size="lg"
          />
          <Input
            type="text"
            placeholder="Enter gender"
            value={newProfile.gender}
            onChange={(val) => setNewProfile({ ...newProfile, gender: val })}
            size="lg"
          />
        </div>
      </div>
      <button className='bg-blue-500 text-lg py-2 px-20 rounded-full text-white flex m-auto mt-8 hover:bg-blue-400' 
      onClick={() => {
        addProfileDetails();
      }}>Submit</button>

    </>
  )
}

export default MyProfile






















































































































































































































































































































/*import React, { useState } from 'react'
import nidhi from './../assets/nidhi.jpg'
const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Nidhi Nagpure",
    image: nidhi,
    email: 'nidhinagpure21@gmail.com',
    phone: '+91 9284011752',
    address: {
      line1: "Nagpur",
      line2: "ganesh nagar - 4010045",
    },
    gender: 'Male',
    dob: '2001-07-30',
  })

  const [isEdit, setEdit] = useState(false);

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={nidhi} alt='' />
      {
        isEdit ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4 ' 
        type='text' value={userData.name} 
        onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutra-500 underline mt-3'>CONTACT INFOMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit ? <input className='bg-gray-100 max-w-52' type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit ?
              <p>
                <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <br />
                <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </p> :
              <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }

        </div>
      </div>
      <div>
        <p className='text-neutra-500 underline mt-3'>Bacis Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-netural-700'>
          <p className='font-medium '>Gender:</p>
          {
            isEdit ? <select className='max-w-20 bg-gray-100' onClick={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={useState.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
              : <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-mideum'>Brithday:</p>
          {
            isEdit ?
              <input className='max-w-28 bg-gray-100' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={useState.dob} />
              : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>
      <div>
        {
          isEdit ?
            <button className='mt-4 border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setEdit(false)}>Save Info</button>
            : <button className=' mt-4 border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
} 
export default MyProfile;*/