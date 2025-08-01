import React from 'react'
 import appointments from './../assets/appointment_img.png'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();
  return (
    <div className='flex bg-primary rounded-lg px-4 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
      {/* ---left Side ----*/}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
            <p className=''>Book Appointment</p>
            <p className='mt-4'>With 100+ Trusted Doctor</p>
        </div>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create account</button>
      </div>
      {/*---- Right Side ---- */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
           <img className='w-full pb-6absolute botton-0 right-0 max-w-md'src={appointments}/>
      </div>
    </div>
  )
}

export default Banner
