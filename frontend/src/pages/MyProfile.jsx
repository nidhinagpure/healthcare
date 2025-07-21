import React, { useState } from 'react'
import nidhi from './../assets/nidhi.jpg'
const MyProfile = () => {

  const [userData,setUserData] = useState({
    name:"Nidhi Nagpure",
    image:nidhi,
    email:'nidhinagpure21@gmail.com',
    phone:'+91 9284011752',
    address:{
      line1:"Nagpur",
      line2:"ganesh nagar - 4010045",
    },
    gender:'Male',
    dob:'2001-07-30',
  })

  const [isEdit,setEdit] = useState(false);

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
       <img  className='w-36 rounded' src={nidhi} alt=''/>
       {
        isEdit ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4 ' type='text' value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))}/>
        :<p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
       }
       <hr className='bg-zinc-400 h-[1px] border-none'/>
       <div>
        <p className='text-neutra-500 underline mt-3'>CONTACT INFOMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
        isEdit ? <input  className='bg-gray-100 max-w-52' type='text' value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))}/>
        :<p className='text-blue-400'>{userData.phone}</p>
       }
       <p className='font-medium'>Address:</p>
       {
        isEdit?
        <p>
          <input className='bg-gray-50' onChange={(e) => setUserData(prev =>({...prev,address:{...prev.address,line1:e.target.value}}))} value={userData.address.line1}  type="text" />
          <br/>
          <input className='bg-gray-50' onChange={(e) => setUserData(prev =>({...prev,address:{...prev.address,line2:e.target.value}}))} value={userData.address.line2}  type="text" />
        </p>:
        <p className='text-gray-500'>
          {userData.address.line1}
          <br/>
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
        isEdit ? <select  className='max-w-20 bg-gray-100' onClick={(e) => setUserData(prev => ({...prev,gender: e.target.value}))} value={useState.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        :<p className='text-gray-400'>{userData.gender}</p>
       }
       <p className='font-mideum'>Brithday:</p>
       {
        isEdit ?
         <input  className='max-w-28 bg-gray-100' type='date' onChange={(e) => setUserData(prev => ({...prev,dob: e.target.value}))} value={useState.dob}/>
         : <p className='text-gray-400'>{userData.dob}</p>
       }
        </div>
       </div>
       <div>
          {
            isEdit?
            <button className='mt-4 border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setEdit(false)}>Save Info</button>
            : <button className=' mt-4 border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setEdit(true)}>Edit</button>
          }
       </div>
    </div>
  )
}

export default MyProfile;