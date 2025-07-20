import { Link } from 'react-router-dom';
import React from 'react';

import Dermatologist from './../assets/Dermatologist.svg'
import Gastroenterologist from './../assets/Gastroenterologist.svg'
import General_physician from './../assets/General_physician.svg'
import Gynecologist from './../assets/Gynecologist.svg'
import Neurologist from './../assets/Neurologist.svg'

import Pediatricians from './../assets/Pediatricians.svg';


const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]


 const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
       {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)}className='flex flex-col item-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 ' key={index} to={`/doctor/${item.speciality}`}>
            <img className='w-16 sm-24 mb-2'src={item.image} alt={item.speciality} />
            <p className=''>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
