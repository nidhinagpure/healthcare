 /*import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Doctor = () => {

  const { speciality } = useParams();

  const [filterDoc, setFilterDoc ] = useState([]);

  const { doctor } = useContex(AppContext)

  const applyFilter = () => {
    if(speciality) {
      setFilterDoc(doctor.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctor)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctor,speciality])

  return (
    <div className=''>
      <p className=''>Browsw through the doctor speciality.</p>
      <div className=''>
        <div className=''>
          <p className=''>General physician</p>
          <p className=''>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
        <div>
            {
               filterDoc.map((item, index) => (
                    <div onClick={() => navigate(`/appointments/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='bg-blue-50' src={item.image} alt='' />
                        <div className='p-4'>
                            <div className='flex item-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 my-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>

                ))  
            }
        </div>
      </div>
    </div>
  )
}

export default Doctor */

import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctor = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctor } = useContext(AppContext); //  fixed typo
  const [filterDoc, setFilterDoc] = useState([]);

  useEffect(() => {
    if (Array.isArray(doctor)) {
      if (speciality) {
        setFilterDoc(doctor.filter(doc => doc.speciality === speciality));
      } else {
        setFilterDoc(doctor);
      }
    }
  }, [doctor, speciality]);

  return (
    <div>
    <div className=''>
      <p className='text-gray-600'>Browse through the doctor speciality.</p>
      <div className='flex flex-col sm:flex-row gap-5 mt-5 items-start'>
        {/* Speciality Filter Buttons (UI only for now) */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=>speciality ==='General physician' ? navigate('/doctor'): navigate('/doctor/General physician') } className={`w-[94w] sm:w-auto pl-3 py-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality == "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
          <p onClick={()=>speciality ==='Gynecologist' ? navigate('/doctor'): navigate('/doctor/Gynecologist') } className={`w-[94w] sm:w-auto pl-3 py-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality == "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
          <p onClick={()=>speciality ==='Dermatologist' ? navigate('/doctor'): navigate('/doctor/Dermatologist') } className={`w-[94w] sm:w-auto pl-3 py-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality == "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
          <p onClick={()=>speciality ==='Pediatricians' ? navigate('/doctor'): navigate('/doctor/Pediatricians') } className={`w-[94w] sm:w-auto pl-3 py-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality == "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
          <p onClick={()=>speciality ==='Neurologist' ? navigate('/doctor'): navigate('/doctor/Neurologist') } className={`w-[94w] sm:w-auto pl-3 py-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality == "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
          <p onClick={()=>speciality ==='Gastroenterologist' ? navigate('/doctor'): navigate('/doctor/Gastroenterologist') } className={`w-[94w] sm:w-auto pl-3 py-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality == "Gastroenterologist" ? "bg-indifo-100 text-black" : ""}`}>Gastroenterologist</p>
        </div>

         {/* Filtered Doctors */}
        <div className='w-full grid  grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointments/${item._id}`)}
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
            >
              <img className='bg-blue-50 w-full h-48 object-cover' src={item.image} alt={item.name} />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-green-500'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                  <span>Available</span>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Doctor;
